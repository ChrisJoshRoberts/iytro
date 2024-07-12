const filterButtons = document.querySelectorAll('.filter-link');
const logoItems = document.querySelectorAll('.logo-item');
const empty = document.querySelector('.empty');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');
    let matchFound = false;

    logoItems.forEach(logo => {
      const logoValue = logo.getAttribute('data-filter');

      if (filterValue === 'Tout' || filterValue === logoValue) {
        logo.style.display = 'block';
        matchFound = true;
      } else {
        logo.style.display = 'none';
      }
    });

    if (matchFound) {
      empty.style.display = 'none';
    } else {
      empty.style.display = 'block';
    }
  });
});
