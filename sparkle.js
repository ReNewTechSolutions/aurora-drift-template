// sparkle.js — Aurora Drift Sparkle Background with Theme Awareness

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

  // Detect current or preferred color scheme
  function getSparkleColor() {
    const body = document.body;
    if (body.classList.contains('theme-ocean') || body.classList.contains('theme-sunset')) {
      return '#ffffff';
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches || body.classList.contains('dark')) {
      return '#cccccc';
    } else {
      return '#ffffff';
    }
  }

  let sparkleColor = getSparkleColor();

  const particles = Array.from({ length: 50 }, () => createParticle());

  function createParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4
    };
  }

  function updateParticles() {
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0 || p.x > width) p.speedX *= -1;
      if (p.y < 0 || p.y > height) p.speedY *= -1;
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = sparkleColor;
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function animate() {
    drawParticles();
    updateParticles();
    requestAnimationFrame(animate);
  }

  // Update sparkle color when theme changes
  const themeSwitcher = document.getElementById('themeSwitcher');
  if (themeSwitcher) {
    themeSwitcher.addEventListener('change', () => {
      sparkleColor = getSparkleColor();
    });
  }

  animate();
});
