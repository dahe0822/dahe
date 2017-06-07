var playBtn = document.getElementById('play'),
    hover = document.getElementById('hover'),
    hoverSound = document.getElementById('hoverSound');

playBtn.addEventListener('click', function() {
  if (!hover.classList.contains('active')) {
    hover.classList.add('active');
    hoverSound.play();
  }
}, false);