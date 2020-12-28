function move(event) {
  document.querySelectorAll('.layer').forEach(value => {
    var speed = value.getAttribute('data-speed');
    value.style.transform = `translate(${event.clientX * speed / 1100}px, ${event.clientY * speed / 500}px)`;
  });
}

document.addEventListener('mousemove', move);