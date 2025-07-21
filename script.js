function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('theme-icon');
  body.classList.toggle('dark');
  icon.textContent = body.classList.contains('dark') ? '🌙' : '🌞';
}

function updateGreeting() {
  const greetingText = document.getElementById('greetingText');
  const now = new Date();
  const hour = now.getHours();

  let greeting;
  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 17) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  greetingText.textContent = greeting;
}

updateGreeting();


const fromInput = document.getElementById('from');
const toInput = document.getElementById('to');
const veyilBtn = document.querySelector('.veyil-btn');

function checkInputs() {
  if (fromInput.value.trim() && toInput.value.trim()) {
    veyilBtn.classList.add('active');
  } else {
    veyilBtn.classList.remove('active');
  }
}

fromInput.addEventListener('input', checkInputs);
toInput.addEventListener('input', checkInputs);


