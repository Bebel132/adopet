document.querySelector(".mudar").addEventListener('click', () => {
    const passwordEle = document.querySelector(".senha");
    const type = passwordEle.getAttribute('type');
    passwordEle.setAttribute('type', type === 'password' ? 'text' : 'password');
})

document.querySelector("#mudarConfirmarSenha").addEventListener('click', () => {
    const passwordEle = document.querySelector("#confirmarSenha");
    const type = passwordEle.getAttribute('type');
    passwordEle.setAttribute('type', type === 'password' ? 'text' : 'password');
})