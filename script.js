
  const shredButton = document.getElementById('shredButton');
  const bankCard = document.getElementById('bankCard');
  const cardBeam = document.getElementById('cardBeam');
  const destructionArea = document.getElementById('destructionArea');
  const stripes = document.getElementById('stripes');
  const particles = document.getElementById('particles');

  function createParticles() {
      particles.innerHTML = '';
      for (let i = 0; i < 50; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particles.appendChild(particle);
      }
  }

  function animateBeam() {
      cardBeam.style.animation = 'none';
      void cardBeam.offsetWidth; 
      cardBeam.style.animation = 'beam 0.5s ease-in-out';
  }

  function createShreddedPieces() {
      destructionArea.innerHTML = '';
      const pieceCount = 20;
      
      for (let i = 0; i < pieceCount; i++) {
          const piece = document.createElement('div');
          piece.className = 'shredded-piece';
          piece.style.left = `${Math.random() * 230}px`;
          
          const delay = Math.random() * 1.5;
          const duration = 1 + Math.random() * 1;
          
          piece.style.animation = `shred ${duration}s ease-in ${delay}s forwards`;
          destructionArea.appendChild(piece);
      }
  }

  function shredCard() {

      shredButton.disabled = true;
      
      bankCard.style.transition = 'transform 2s ease-in-out';
      bankCard.style.transform = 'translate(-50%, 130px)';
      
      setTimeout(() => {
          animateBeam();
      }, 1500);
      
      setTimeout(() => {
          stripes.style.display = 'flex';
      }, 2000);
      
      setTimeout(() => {
          particles.style.opacity = '1';
          createParticles();
          createShreddedPieces();
      }, 2200);
      
      setTimeout(() => {
          bankCard.style.opacity = '0';
      }, 2500);
      
      setTimeout(() => {
          resetAnimation();
      }, 5000);
  }

  function resetAnimation() {
      bankCard.style.transition = '';
      bankCard.style.transform = 'translateX(-50%)';
      bankCard.style.opacity = '1';
      stripes.style.display = 'none';
      particles.style.opacity = '0';
      shredButton.disabled = false;
  }

  shredButton.addEventListener('click', shredCard);

  createParticles();
