function toggleMenu() {
    const dropdown = document.getElementById('dropdown');
    const arrow = document.getElementById('arrow');
    dropdown.classList.toggle('hidden');
    arrow.style.transform = dropdown.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
  }
  