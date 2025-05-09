// sparkle.js — Aurora Drift Canvas Sparkle Effect with Theme Support

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

  function getSparkleColor() {
    const body = document.body;
    if (body.classList.contains('theme-ocean')) return '#aef6f9';
    if (body.classList.contains('theme-sunset')) return '#fff4e6';
    return '#ffffff'; // default sparkle
  }

  let sparkleColor = getSparkleColor();
  const particles = Array.from({ length: 50 }, () => createParticle());

  function createParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3
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

  animate();

  // Theme switcher handling
  const themeSwitcher = document.getElementById('themeSwitcher');
  const savedTheme = localStorage.getItem('aurora-theme');
  if (savedTheme && savedTheme !== 'default') {
    document.body.classList.add(savedTheme);
    if (themeSwitcher) themeSwitcher.value = savedTheme;
  }

  if (themeSwitcher) {
    themeSwitcher.addEventListener('change', () => {
      document.body.classList.remove('theme-ocean', 'theme-sunset');
      const selected = themeSwitcher.value;
      if (selected !== 'default') {
        document.body.classList.add(selected);
      }
      localStorage.setItem('aurora-theme', selected);
      sparkleColor = getSparkleColor();
    });
  }
});
