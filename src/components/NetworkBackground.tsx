import React, { useEffect, useRef } from "react";

/**
 * ==========================================================================
 * PROFESSIONAL CINEMATIC CONNECTED NETWORK BACKGROUND
 *
 * Designed for enterprise-grade visual polish:
 * - Multi-depth parallax nodes (foreground, midground, ambient background)
 * - Constellation mesh with subtle polygonal facet fills between tight triplets
 * - Glowing white-cyan and teal nodes with soft radial halos
 * - Smooth lerped mouse interaction: proximity filaments + soft fluid displacement
 * - Atmospheric deep navy radial gradient illumination
 * - 60 FPS performance optimization with spatial pruning
 * - High-DPI sharpness (devicePixelRatio) and mobile density scaling
 * - Respects prefers-reduced-motion and document.visibilityState
 * ==========================================================================
 */

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  r: number;
  layer: number; // 0.6 (distant) to 1.3 (foreground)
  isTeal: boolean;
  pulsePhase: number;
  pulseSpeed: number;
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    // Smooth lerped mouse coordinates
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      radius: 160,
    };

    const hasHover = window.matchMedia("(hover: hover)").matches;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = motionQuery.matches;

    const LINK_DIST = 135;
    const TRIANGLE_MAX_DIST = 90;

    /**
     * Resizes canvas to exact device pixel ratio for maximum sharpness
     */
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for performance
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density tuned for high-end aesthetic: balanced, never cluttered
      let targetCount = Math.round((width * height) / 9500);
      if (width < 640) {
        targetCount = Math.round(targetCount * 0.55); // Keep mobile fluid
      }
      targetCount = Math.max(25, Math.min(105, targetCount));

      // Generate multi-depth particles
      particles = [];
      for (let i = 0; i < targetCount; i++) {
        // Depth layer: 0.6 (background dust), 1.0 (midground), 1.3 (foreground)
        const layer = 0.65 + Math.random() * 0.65;
        const isTeal = Math.random() < 0.25;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseX: 0,
          baseY: 0,
          // Natural drift: speed scales subtly with layer depth
          vx: (Math.random() - 0.5) * 0.45 * layer,
          vy: (Math.random() - 0.5) * 0.45 * layer,
          // Node radius scales with depth: 0.8px up to 2.2px
          r: (0.75 + Math.random() * 1.1) * (layer > 1 ? 1.2 : 0.9),
          layer,
          isTeal,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.015 + Math.random() * 0.02,
        });
      }

      if (isReducedMotion) {
        render();
      }
    };

    /**
     * Physics update with soft boundaries and gentle fluid cursor evasion
     */
    const update = () => {
      if (isReducedMotion) return;

      // Smooth cursor lerp
      if (hasHover && mouse.targetX > 0) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Pulse phase for subtle organic breathing
        p.pulsePhase += p.pulseSpeed;

        // Position drift
        p.x += p.vx;
        p.y += p.vy;

        // Soft elastic edge bounce
        const margin = 20;
        if (p.x < -margin) {
          p.x = -margin;
          p.vx = Math.abs(p.vx);
        } else if (p.x > width + margin) {
          p.x = width + margin;
          p.vx = -Math.abs(p.vx);
        }

        if (p.y < -margin) {
          p.y = -margin;
          p.vy = Math.abs(p.vy);
        } else if (p.y > height + margin) {
          p.y = height + margin;
          p.vy = -Math.abs(p.vy);
        }

        // Gentle fluid cursor evasion
        if (hasHover && mouse.x > 0 && mouse.y > 0) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius && dist > 0) {
            const force = (1 - dist / mouse.radius) * 1.5;
            const angle = Math.atan2(dy, dx);
            // Smoothly push particle outward
            p.x += Math.cos(angle) * force * p.layer;
            p.y += Math.sin(angle) * force * p.layer;
          }
        }
      }
    };

    /**
     * Render the visual network
     */
    const render = () => {
      // 1. Draw rich atmospheric space background gradient
      const bgGrad = ctx.createRadialGradient(
        width * 0.35,
        height * 0.25,
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.95
      );
      bgGrad.addColorStop(0, "#0c1e3d"); // Deep indigo-navy highlight
      bgGrad.addColorStop(0.35, "#081329");
      bgGrad.addColorStop(0.7, "#060b1a");
      bgGrad.addColorStop(1, "#040711"); // Obsidian base

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Pre-calculate neighbor matrix for distance lines & triangle facets
      const connectedPairs: [number, number, number][] = [];

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);

          if (dist < LINK_DIST) {
            connectedPairs.push([i, j, dist]);
          }
        }
      }

      // 2. Subtle translucent geometric facets (triangulation fills)
      // Creates that high-end constellation / wireframe mesh polish
      ctx.lineWidth = 0.5;
      for (let k = 0; k < connectedPairs.length; k++) {
        const [i, j, d1] = connectedPairs[k];
        if (d1 > TRIANGLE_MAX_DIST) continue;

        const a = particles[i];
        const b = particles[j];

        // Search for a mutual neighbor forming a tight triangle
        for (let m = k + 1; m < connectedPairs.length; m++) {
          const [i2, j2, d2] = connectedPairs[m];
          if (i2 !== i && j2 !== i && i2 !== j && j2 !== j) continue;

          const thirdIndex = i2 === i ? j2 : i2 === j ? j2 : j2 === i ? i2 : i2;
          if (thirdIndex === i || thirdIndex === j) continue;

          const c = particles[thirdIndex];
          const d3 = Math.hypot(b.x - c.x, b.y - c.y);

          if (d3 < TRIANGLE_MAX_DIST) {
            // Draw delicate mesh polygon
            const avgDist = (d1 + d2 + d3) / 3;
            const facetAlpha = (1 - avgDist / TRIANGLE_MAX_DIST) * 0.045;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.lineTo(c.x, c.y);
            ctx.closePath();

            // Dual tone fill: teal accent if any node is teal
            if (a.isTeal || b.isTeal || c.isTeal) {
              ctx.fillStyle = `rgba(25, 211, 176, ${facetAlpha * 1.2})`;
            } else {
              ctx.fillStyle = `rgba(56, 189, 248, ${facetAlpha})`;
            }
            ctx.fill();
            break; // Limit to 1 facet per edge for crisp clarity
          }
        }
      }

      // 3. Draw constellation connecting lines
      for (let k = 0; k < connectedPairs.length; k++) {
        const [i, j, dist] = connectedPairs[k];
        const a = particles[i];
        const b = particles[j];

        // Fade smoothly with distance and layer depth
        const distRatio = 1 - dist / LINK_DIST;
        const avgLayer = (a.layer + b.layer) * 0.5;
        const lineAlpha = distRatio * 0.32 * Math.min(1.2, avgLayer);

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);

        if (a.isTeal && b.isTeal) {
          // Both teal: glowing mint-teal line
          ctx.strokeStyle = `rgba(25, 211, 176, ${lineAlpha * 1.15})`;
          ctx.lineWidth = 0.85;
        } else if (a.isTeal || b.isTeal) {
          // One teal: cyan-teal gradient line
          ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
          ctx.lineWidth = 0.75;
        } else {
          // Standard: crisp celestial blue-white line
          ctx.strokeStyle = `rgba(135, 195, 255, ${lineAlpha * 0.85})`;
          ctx.lineWidth = 0.65;
        }

        ctx.stroke();
      }

      // 4. Interactive cursor filaments (hover only)
      if (hasHover && mouse.x > 0 && mouse.y > 0) {
        for (let i = 0; i < particles.length; i++) {
          const a = particles[i];
          const mdx = a.x - mouse.x;
          const mdy = a.y - mouse.y;
          const mDist = Math.hypot(mdx, mdy);

          if (mDist < mouse.radius) {
            const mRatio = 1 - mDist / mouse.radius;
            const mAlpha = Math.pow(mRatio, 1.4) * 0.65;

            // Electric teal laser filament to cursor
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(25, 211, 176, ${mAlpha})`;
            ctx.lineWidth = 0.95;
            ctx.stroke();
          }
        }
      }

      // 5. Draw glowing constellation nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Subtle breathing pulse
        const pulse = Math.sin(p.pulsePhase) * 0.25 + 1;
        const currentRadius = p.r * pulse;

        if (p.isTeal) {
          // Vibrant Teal Node with soft glowing halo
          // Ambient halo
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius * 3, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(25, 211, 176, 0.16)";
          ctx.fill();

          // Core dot
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = "#19d3b0";
          ctx.fill();
        } else {
          // Diamond Ice-White Node with subtle cyan halo
          if (p.layer > 0.9) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, currentRadius * 2.4, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(186, 230, 253, 0.12)";
            ctx.fill();
          }

          // Core dot
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = "#e2f1ff";
          ctx.globalAlpha = p.layer > 1 ? 0.85 : 0.65;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }
    };

    /**
     * Smooth 60 FPS animation loop
     */
    const loop = () => {
      update();
      render();
      animId = requestAnimationFrame(loop);
    };

    // Pause on tab switch to preserve system resources
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else if (!isReducedMotion) {
        animId = requestAnimationFrame(loop);
      }
    };

    // Pointer move listener
    const handlePointerMove = (e: PointerEvent) => {
      if (!hasHover) return;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handlePointerLeave = () => {
      mouse.targetX = -9999;
      mouse.targetY = -9999;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion = e.matches;
      if (isReducedMotion) {
        cancelAnimationFrame(animId);
        render();
      } else {
        loop();
      }
    };

    // Event listeners
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);
    motionQuery.addEventListener("change", handleMotionChange);

    // Initial boot
    resize();
    if (!isReducedMotion) {
      loop();
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0, // Sits cleanly behind all page content (relative z-10)
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        id="network-canvas"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          display: "block",
        }}
      />
    </div>
  );
}
