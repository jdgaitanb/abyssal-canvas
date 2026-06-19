import { useEffect, useRef } from "react";

/**
 * Interactive wireframe mesh background. Pure 2D canvas — fast and
 * reactive to mouse without WebGL deps.
 */
export function MeshBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, dpr = 1;
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
    let raf = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = e.clientX - rect.left;
      mouse.ty = e.clientY - rect.top;
    };
    const onLeave = () => { mouse.tx = -9999; mouse.ty = -9999; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    // Build a hex-ish grid of points.
    const spacing = 70;
    type P = { x: number; y: number; ox: number; oy: number };
    let points: P[] = [];
    const buildPoints = () => {
      points = [];
      const cols = Math.ceil(w / spacing) + 2;
      const rows = Math.ceil(h / spacing) + 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing + (r % 2 ? spacing / 2 : 0) - spacing;
          const y = r * spacing - spacing;
          points.push({ x, y, ox: x, oy: y });
        }
      }
    };
    buildPoints();
    const resizeAll = () => { resize(); buildPoints(); };
    window.removeEventListener("resize", resize);
    window.addEventListener("resize", resizeAll);

    let t = 0;
    const draw = () => {
      t += 0.004;
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      ctx.clearRect(0, 0, w, h);

      const radius = 240;
      const r2 = radius * radius;

      for (const p of points) {
        // gentle ambient drift
        const wave = Math.sin(p.ox * 0.01 + t * 2) * 4 + Math.cos(p.oy * 0.012 + t * 1.6) * 4;
        let x = p.ox + wave;
        let y = p.oy + wave * 0.6;
        // mouse repel + slight pull
        const dx = x - mouse.x;
        const dy = y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < r2) {
          const f = (1 - d2 / r2) * 30;
          const len = Math.sqrt(d2) || 1;
          x += (dx / len) * f;
          y += (dy / len) * f;
        }
        p.x = x; p.y = y;
      }

      // draw connections (triangulate within neighborhood)
      const maxDist = spacing * 1.6;
      const md2 = maxDist * maxDist;
      ctx.lineWidth = 1;
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < md2) {
            const cx = (a.x + b.x) / 2;
            const cy = (a.y + b.y) / 2;
            const mdx = cx - mouse.x;
            const mdy = cy - mouse.y;
            const md = Math.sqrt(mdx * mdx + mdy * mdy);
            const glow = Math.max(0, 1 - md / radius);
            const base = 1 - d2 / md2;
            const alpha = base * 0.08 + glow * 0.45;
            ctx.strokeStyle = glow > 0.05
              ? `rgba(180, 220, 255, ${alpha})`
              : `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // points
      for (const p of points) {
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        const glow = Math.max(0, 1 - md / radius);
        ctx.fillStyle = `rgba(200, 230, 255, ${0.2 + glow * 0.8})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.8 + glow * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resizeAll);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 h-full w-full"
      style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(40,60,100,0.18), transparent 60%)" }}
      aria-hidden
    />
  );
}
