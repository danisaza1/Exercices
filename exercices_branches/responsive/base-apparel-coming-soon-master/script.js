
  const emailInput = document.querySelector('.email-input');
  const submitButton = document.querySelector('.submit-button');
  const errorMessage = document.querySelector('.error-message');
  const validation = document.querySelector('.input-container');
  const errorIcon = document.querySelector('.error-icon'); 

 
  const emailExemple = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  submitButton.addEventListener('click', function (e) {
    e.preventDefault(); 

    const emailValue = emailInput.value.trim();

    if (!emailExemple.test(emailValue)) {
      errorMessage.style.display = 'block';
       errorIcon.style.display = 'block'; 
      emailInput.style.borderColor = 'red';
     validation.style.border = '2px solid hsl(0, 93%, 68%)';
    } else {
      errorMessage.style.display = 'none';
       errorIcon.style.display = 'none';
      emailInput.style.borderColor = '';

      
      console.log("Email válido enviado:", emailValue);
    }
  });

