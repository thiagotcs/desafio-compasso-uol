function signin(e) {
  e.preventDefault();
  const user = document.getElementById('user');
  const password = document.getElementById('password');
  const disclaimer = document.getElementsByClassName('signin__disclaimer');
  const userMocked = 'email.usuario@compasso.com.br';
  const passwordMocked = '123456';
  if (user.value !== userMocked || password.value !== passwordMocked) {
    user.classList.add('signin__input--error');
    password.classList.add('signin__input--error');
    disclaimer[0].style.visibility = 'visible';
    disclaimer[1].style.visibility = 'visible';
  } else {
    user.classList.remove('signin__input--error');
    password.classList.remove('signin__input--error');
    disclaimer[0].style.visibility = 'hidden';
    disclaimer[1].style.visibility = 'hidden';
    window.location.href = '../src/views/home.html';
  }
}

function signout(e) {
  e.preventDefault();
  window.location.href = '../index.html';
}