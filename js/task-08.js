const form = document.querySelector('.login-form')

form.addEventListener('submit', event => {
  event.preventDefault()
  const {email, password} = event.currentTarget.elements
  if(email.value === '' || password.value === '') {
    alert('FILL ALL FIELDS')
  } else {
    console.log({
      email : email.value,
      password : password.value,
    });
    form.reset()
  }
});