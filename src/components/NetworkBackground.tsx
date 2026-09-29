import React, { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  baseRadius: number;
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Track mouse for subtle interactive tilt
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    // Prefers-reduced-motion check
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion = e.matches;
      if (isReducedMotion) {
        cancelAnimationFrame(animationFrameId);
        render();
      } else {
        loop();
      }
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    // Rotation state
    let angleX = 0.25;
    let angleY = 0;
    let angleZ = 0.05;

    // Generate 3D Geodesic Plexus Sphere points using Fibonacci sphere distribution
    const numPoints = 160;
    const baseSphereRadius = () => Math.min(width, height) * (width < 640 ? 0.48 : 0.38);
    let sphereRadius = baseSphereRadius();

    let points: Point3D[] = [];

    const initPoints = () => {
      points = [];
      const goldenRatio = Math.PI * (3 - Math.sqrt(5)); // ~2.39996 radians

      for (let i = 0; i < numPoints; i++) {
        // Uniform distribution across sphere surface
        const y = 1 - (i / (numPoints - 1)) * 2; // -1 to 1
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = goldenRatio * i;

        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;

        // Slight organic radial displacement (some nodes stick out slightly like satellite nodes)
        const radialJitter = 0.94 + Math.random() * 0.12;
        const ptRadius = (0.9 + Math.random() * 1.3);

        points.push({
          x: x * radialJitter,
          y: y * radialJitter,
          z: z * radialJitter,
          baseRadius: ptRadius,
        });
      }
    };

    // Precalculate neighbor edges based on 3D distance so the network structure remains stable
    let edges: [number, number, number][] = [];
    const buildEdges = () => {
      edges = [];
      const maxConnectDistNorm = 0.36; // in normalized unit sphere coords

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dz = points[i].z - points[j].z;
          const dist = Math.hypot(dx, dy, dz);

          if (dist < maxConnectDistNorm) {
            edges.push([i, j, dist]);
          }
        }
      }
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      sphereRadius = baseSphereRadius();

      if (points.length === 0) {
        initPoints();
        buildEdges();
      }

      if (isReducedMotion) {
        render();
      }
    };

    // 3D rotation projection matrices
    const rotate3D = (x: number, y: number, z: number, rX: number, rY: number, rZ: number) => {
      // Rotation around Y
      const cosY = Math.cos(rY);
      const sinY = Math.sin(rY);
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;

      // Rotation around X
      const cosX = Math.cos(rX);
      const sinX = Math.sin(rX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      // Rotation around Z
      const cosZ = Math.cos(rZ);
      const sinZ = Math.sin(rZ);
      const x3 = x1 * cosZ - y2 * sinZ;
      const y3 = x1 * sinZ + y2 * cosZ;

      return { x: x3, y: y3, z: z2 };
    };

    const render = () => {
      // Clear background to dark navy #070b18
      ctx.fillStyle = "#070b18";
      ctx.fillRect(0, 0, width, height);

      // Subtle ambient background radial glow centered at the globe
      // Center position of the sphere (centered horizontally, balanced vertically)
      const centerX = width * 0.5;
      const centerY = height * (width < 768 ? 0.45 : 0.5);

      const radialGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        sphereRadius * 0.2,
        centerX,
        centerY,
        sphereRadius * 1.6
      );
      radialGlow.addColorStop(0, "rgba(25, 60, 110, 0.22)");
      radialGlow.addColorStop(0.5, "rgba(10, 25, 55, 0.12)");
      radialGlow.addColorStop(1, "rgba(7, 11, 24, 0)");
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Camera focal distance for perspective
      const fov = 750;

      // Project all 3D points
      interface ProjectedPoint {
        projX: number;
        projY: number;
        z: number;
        scale: number;
        depthFactor: number;
        radius: number;
      }

      const projected: ProjectedPoint[] = [];

      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        const scaledX = pt.x * sphereRadius;
        const scaledY = pt.y * sphereRadius;
        const scaledZ = pt.z * sphereRadius;

        // Apply 3D rotation
        const rot = rotate3D(scaledX, scaledY, scaledZ, angleX, angleY, angleZ);

        // Perspective division
        const distance = fov + rot.z;
        const scale = fov / Math.max(1, distance);

        const projX = centerX + rot.x * scale;
        const projY = centerY + rot.y * scale;

        // Normalized depth factor from 0 (deep in back) to 1 (closest in front)
        const depthFactor = Math.max(0, Math.min(1, (rot.z + sphereRadius) / (sphereRadius * 2)));

        projected.push({
          projX,
          projY,
          z: rot.z,
          scale,
          depthFactor,
          radius: pt.baseRadius * scale,
        });
      }

      // 1. Draw Connecting Network Lines
      const maxConnectDistNorm = 0.36;
      for (let e = 0; e < edges.length; e++) {
        const [i, j, distNorm] = edges[e];
        const p1 = projected[i];
        const p2 = projected[j];

        // Average depth of both ends
        const avgDepth = (p1.depthFactor + p2.depthFactor) * 0.5;

        // Distance factor: shorter links are brighter
        const distFactor = 1 - distNorm / maxConnectDistNorm;

        // Lines in front are much crisper and brighter cyan; back lines are dark & semi-transparent
        const alpha = Math.max(0.04, Math.min(0.65, distFactor * (0.12 + Math.pow(avgDepth, 1.8) * 0.55)));

        ctx.beginPath();
        ctx.moveTo(p1.projX, p1.projY);
        ctx.lineTo(p2.projX, p2.projY);

        if (avgDepth > 0.6) {
          // Front lines: glowing electric cyan-blue
          ctx.strokeStyle = `rgba(110, 195, 255, ${alpha})`;
          ctx.lineWidth = 0.9 * p1.scale;
        } else {
          // Back lines: deep muted navy/slate
          ctx.strokeStyle = `rgba(50, 95, 160, ${alpha * 0.75})`;
          ctx.lineWidth = 0.6 * p1.scale;
        }

        ctx.stroke();
      }

      // 2. Draw 3D Plexus Glowing Nodes
      // Sort points by z (draw back points first, front points last for proper depth overlap)
      const sortedIndices = projected
        .map((p, idx) => ({ idx, z: p.z }))
        .sort((a, b) => a.z - b.z);

      for (let s = 0; s < sortedIndices.length; s++) {
        const p = projected[sortedIndices[s].idx];
        const depth = p.depthFactor;

        // Front nodes glow bright white/cyan; back nodes are dimmer
        const nodeAlpha = Math.max(0.2, Math.min(1.0, 0.25 + Math.pow(depth, 1.5) * 0.75));

        // Outer glow halo for nodes near the front
        if (depth > 0.55) {
          ctx.beginPath();
          ctx.arc(p.projX, p.projY, p.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${0.18 * depth})`;
          ctx.fill();
        }

        // Main node circle
        ctx.beginPath();
        ctx.arc(p.projX, p.projY, Math.max(0.8, p.radius), 0, Math.PI * 2);

        if (depth > 0.7) {
          // Bright white-cyan core for foremost nodes
          ctx.fillStyle = `rgba(240, 253, 255, ${nodeAlpha})`;
        } else if (depth > 0.4) {
          // Soft cyan
          ctx.fillStyle = `rgba(125, 211, 252, ${nodeAlpha})`;
        } else {
          // Deeper blue for back nodes
          ctx.fillStyle = `rgba(56, 115, 190, ${nodeAlpha * 0.6})`;
        }

        ctx.fill();
      }
    };

    // Animation loop: rotates continuously and smoothly responds to mouse tilt
    const loop = () => {
      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Continuous 3D rotation + subtle mouse tilt
      angleY += 0.0035 + mouse.x * 0.002;
      angleX += 0.0018 + mouse.y * 0.002;
      angleZ = Math.sin(angleY * 0.5) * 0.08;

      render();
      animationFrameId = requestAnimationFrame(loop);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalized offset from screen center (-1 to 1)
      mouse.targetX = (e.clientX / width - 0.5) * 2;
      mouse.targetY = (e.clientY / height - 0.5) * 2;
    };

    const handleMouseLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();

    if (isReducedMotion) {
      render();
    } else {
      loop();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="network-canvas"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, // Fixed behind all content
        pointerEvents: "none", // Never obstructs clicks or scrolling
        backgroundColor: "#070b18",
      }}
    />
  );
}
