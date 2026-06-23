import { useEffect, useRef } from 'react';

export default function Cursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouse = { x: width / 2, y: height / 2, vx: 0, vy: 0 };
    let previousMouse = { x: width / 2, y: height / 2 };
    let isMoving = false;

    // The glow circle coordinates
    let glow = { x: width / 2, y: height / 2 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;
      length: number;

      constructor(x: number, y: number, vx: number, vy: number) {
        this.x = x;
        this.y = y;
        // Sprinkle outward
        this.vx = vx * 0.2 + (Math.random() - 0.5) * 2;
        this.vy = vy * 0.2 + (Math.random() - 0.5) * 2;
        this.maxLife = Math.random() * 30 + 20;
        this.life = this.maxLife;
        this.size = Math.random() * 1.5 + 0.5;
        // Main font color (white) with some light/color variations for the premium feel
        const colors = ['#ffffff', '#f3f4f6', '#e5e7eb', '#ffffff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.length = Math.random() * 10 + 5; // "tiny line" length
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        // Add a little friction and gravity
        this.vx *= 0.95;
        this.vy *= 0.95;
        this.vy += 0.05; // slight fall
        this.life--;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const opacity = this.life / this.maxLife;
        ctx.beginPath();
        // Draw as a tiny line matching velocity
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const stretch = Math.max(1, speed * 2);
        
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - (this.vx / speed) * stretch * this.length, this.y - (this.vy / speed) * stretch * this.length);
        
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size;
        ctx.globalAlpha = opacity * 0.8;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    }

    const particles: Particle[] = [];

    const onMouseMove = (e: MouseEvent) => {
      previousMouse = { x: mouse.x, y: mouse.y };
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.vx = mouse.x - previousMouse.x;
      mouse.vy = mouse.y - previousMouse.y;
      isMoving = true;

      // Add particles ("sprinkles tiny lines")
      const speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);
      if (speed > 2) {
        const count = Math.min(Math.floor(speed / 5), 5);
        for (let i = 0; i < count; i++) {
          particles.push(new Particle(mouse.x, mouse.y, mouse.vx, mouse.vy));
        }
      }
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth following glow
      glow.x += (mouse.x - glow.x) * 0.15;
      glow.y += (mouse.y - glow.y) * 0.15;

      ctx.globalCompositeOperation = 'screen';

      // Draw the glow effect
      const gradient = ctx.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, 50);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.beginPath();
      ctx.arc(glow.x, glow.y, 50, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.globalAlpha = 1;
      ctx.fill();

      // Draw the main cursor dot
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      // Dot glow
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#ffffff';
      ctx.fill();
      ctx.shadowBlur = 0;

      // Update and draw particles (tiny lines)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hidden lg:block fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

