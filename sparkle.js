// ================== SPARKLE DRIFT SCRIPT ==================

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('sparkle-canvas');
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
  
    const particleCount = 60;
    const particles = Array.from({ length: particleCount }, () => createParticle());
  
    function createParticle() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3
      };
    }
  
    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'white';
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      updateParticles();
      requestAnimationFrame(draw);
    }
  
    function updateParticles() {
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
  
        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;
      });
    }
  
    draw();
  });
  