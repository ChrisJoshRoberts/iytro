const contacts = document.querySelectorAll('.contact-detials');

contacts.forEach(contact => {
  const phoneNumber = contact.querySelector('.phone-number');
  if (phoneNumber.innerHTML !== '') {
    contact.classList.add('has-phone-number');
  } else {
    contact.classList.add('no-phone-number');
  }
});
