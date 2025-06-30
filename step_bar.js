const steps = document.querySelectorAll('.step');
const lines = document.querySelectorAll('.line');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let current = 2; // Step 0 and Step 1 completed

function updateProgress() {
  steps.forEach((step, index) => {
    const circle = step.querySelector('.circle');
    if (index < current) {
      step.classList.add('active');
      circle.textContent = '✔';
    } else {
      step.classList.remove('active');
      circle.textContent = '✖';
    }
  });

  lines.forEach((line, index) => {
    line.classList.toggle('active', index < current - 1);
  });
}

updateProgress();
{
  prev.disabled = current === 1;
  next.disabled = current === steps.length;
}

next.addEventListener('click', () => {
  if (current < steps.length) {
    current++;
    updateProgress();
  }
});

prev.addEventListener('click', () => {
  if (current > 1) {
    current--;
    updateProgress();
  }
});

updateProgress(); // Run once on load
