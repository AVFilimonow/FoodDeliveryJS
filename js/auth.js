const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');
const buttonCart = document.querySelector('.button-cart');

const login = (user) => {
    buttonAuth.style.display = "none";
    buttonOut.style.display = "flex";
    userName.style.display = "flex";
    userName.textContent = user.login;
    modalAuth.style.display = "none";
    buttonCart.style.display = "flex";
}

const logout = () => {
    userName.style.display = "none";
    userName.textContent = "";
    buttonOut.style.display = "none";
    buttonAuth.style.display = "flex";
    localStorage.removeItem('user');
    buttonCart.style.display = "none";
}

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = "flex";
})

closeAuth.addEventListener('click', () => {
    modalAuth.style.display = "none";
})

buttonOut.addEventListener('click', () => {
    logout();
})

logInForm.addEventListener('submit', (event) => {
    event.preventDefault();

    user = {
        login: inputLogin.value,
        password: inputPassword.value
    }

    localStorage.setItem('user', JSON.stringify(user));
    login(user);
})

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
}