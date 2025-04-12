
window.onload = () => {
    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = 0;
      setTimeout(() => {
        section.style.transition = "opacity 1s ease-in-out";
        section.style.opacity = 1;
      }, 300);
    });
  };
  
 
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submitted successfully!');
     
    });
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      dob: form.dob.value,
      country: form.country.value,
      gender: form.gender.value,
    };
    localStorage.setItem('registrationData', JSON.stringify(data));
    alert('Data saved locally!');
  });
  