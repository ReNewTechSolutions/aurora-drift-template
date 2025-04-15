document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('sparkle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const sparkleColor = prefersDark ? '#cccccc' : '#ffffff';

  const particles = Array.from({ length: 60 }, () => createParticle());

  function createParticle() {
    const angle = Math.random() * 360;
    const radius = Math.random() * 1.2 + 0.3;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius,
      opacity: Math.random() * 0.8 + 0.2,
      angle,
      orbit: Math.random() * 0.5 + 0.5,
      speed: Math.random() * 0.5 + 0.2
    };
  }

  function updateParticles() {
    particles.forEach(p => {
      p.angle += p.speed * 0.01;
      p.x += Math.cos(p.angle) * p.orbit;
      p.y += Math.sin(p.angle) * p.orbit;
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = sparkleColor;
    particles.forEach(p => {
      ctx.globalAlpha = p.opacity;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  function animate() {
    drawParticles();
    updateParticles();
    requestAnimationFrame(animate);
  }

  animate();
});
