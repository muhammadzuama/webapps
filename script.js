function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  const moonIcon = document.getElementById('moon-icon');
  const sunIcon = document.getElementById('sun-icon');

  if (body.classList.contains('dark-mode')) {
    // Dark mode is active
    moonIcon.style.display = 'none'; // Hide moon icon
    sunIcon.style.display = 'inline-block'; // Show sun icon
  } else {
    // Dark mode is inactive
    moonIcon.style.display = 'inline-block'; // Show moon icon
    sunIcon.style.display = 'none'; // Hide sun icon
  }
}