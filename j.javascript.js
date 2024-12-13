function toggleDetails(button) {
    const details = button.previousElementSibling;
    
    if (details.style.display === 'none' || details.style.display === '') {
      details.style.display = 'block';
      button.textContent = 'Read Less';
    } else {
      details.style.display = 'none';
      button.textContent = 'Read More';
    }
  }