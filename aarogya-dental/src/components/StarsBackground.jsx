
import { useEffect, useRef } from "react";
import { ToothIcon } from "./Icons";

export default function StarsBackground({ count = 18 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let animationId;
    let teeth = [];

    function resize() {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createTeeth() {
      teeth = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,

        // Different tooth sizes
        size: Math.random() * 22 + 18,

        // Very slow movement
        speedX: (Math.random() - 0.5) * 0.12,
        speedY: (Math.random() - 0.5) * 0.12,

        // Subtle green transparency
        opacity: Math.random() * 0.08 + 0.04,

        // Rotation
        rotation: (Math.random() - 0.5) * 0.3,

        rotationSpeed: (Math.random() - 0.5) * 0.001,

        // Floating animation
        phase: Math.random() * Math.PI * 2,
        floatSpeed: Math.random() * 0.008 + 0.004,
      }));
    }

    function drawTooth(tooth) {
      const size = tooth.size;

      ctx.save();

      ctx.translate(tooth.x, tooth.y);
      ctx.rotate(tooth.rotation);

      const scale = size / 22;

      ctx.scale(scale, scale);

      // Your dental green
      ctx.strokeStyle = `rgba(3, 165, 80, ${tooth.opacity})`;

      ctx.lineWidth = 1.8;

      // Soft glow
      ctx.shadowBlur = 8;
      ctx.shadowColor = `rgba(3, 165, 80, ${
        tooth.opacity * 2
      })`;

      ctx.beginPath();

      /*
        Same tooth path from your ToothIcon
      */
      ctx.moveTo(12, 3);

      ctx.bezierCurveTo(
        9.8,
        3,
        8.8,
        4.3,
        7.5,
        4.3
      );

      ctx.bezierCurveTo(
        6,
        4.3,
        5,
        3.4,
        3.8,
        4.4
      );

      ctx.bezierCurveTo(
        2.5,
        5.5,
        2,
        7.4,
        2.4,
        9.6
      );

      ctx.bezierCurveTo(
        2.8,
        11.9,
        3.8,
        13.2,
        4.2,
        15.6
      );

      ctx.bezierCurveTo(
        4.5,
        17.4,
        4.9,
        20,
        6.5,
        20
      );

      ctx.bezierCurveTo(
        7.9,
        20,
        7.8,
        17.4,
        8.2,
        15.6
      );

      ctx.bezierCurveTo(
        8.5,
        14.1,
        8.9,
        13.2,
        9.7,
        13.2
      );

      ctx.bezierCurveTo(
        10.5,
        13.2,
        10.9,
        14.1,
        11.2,
        15.6
      );

      ctx.bezierCurveTo(
        11.6,
        17.4,
        11.5,
        20,
        12.9,
        20
      );

      ctx.bezierCurveTo(
        14.5,
        20,
        14.9,
        17.4,
        15.2,
        15.6
      );

      ctx.bezierCurveTo(
        15.6,
        13.2,
        16.6,
        11.9,
        17,
        9.6
      );

      ctx.bezierCurveTo(
        17.4,
        7.4,
        16.9,
        5.5,
        15.6,
        4.4
      );

      ctx.bezierCurveTo(
        14.4,
        3.4,
        13.4,
        4.3,
        12.9,
        4.3
      );

      ctx.bezierCurveTo(
        14.2,
        4.3,
        14.2,
        3,
        12,
        3
      );

      ctx.stroke();

      ctx.restore();
    }

    function draw() {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      teeth.forEach((tooth) => {
        tooth.x += tooth.speedX;
        tooth.y += tooth.speedY;

        tooth.phase += tooth.floatSpeed;
        tooth.rotation += tooth.rotationSpeed;

        const floatingY = Math.sin(tooth.phase) * 4;

        // Wrap around screen
        if (tooth.x < -40) {
          tooth.x = window.innerWidth + 40;
        }

        if (tooth.x > window.innerWidth + 40) {
          tooth.x = -40;
        }

        if (tooth.y < -40) {
          tooth.y = window.innerHeight + 40;
        }

        if (tooth.y > window.innerHeight + 40) {
          tooth.y = -40;
        }

        tooth.y += floatingY * 0.02;

        drawTooth(tooth);
      });

      animationId = requestAnimationFrame(draw);
    }

    function handleResize() {
      resize();
      createTeeth();
    }

    resize();
    createTeeth();
    draw();

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}

