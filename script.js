const inputEl = document.querySelector('.inp3');
const emailEl = document.querySelector('#idemail');
const senhaEl = document.querySelector('#idsenha');


inputEl.addEventListener('click', enviar);


function enviar() {
    if(emailEl.value !== '' && senhaEl.value !== '') {
        alert('Login efetuado com sucesso!');
    } else if(emailEl.value === '') {
        alert('Faltou preencher o campo de e-mail!');
    } else {
        alert('Faltou preencher o campo de senha!');
    }

    localStorage.setItem('e-mail', emailEl.value);
    localStorage.setItem('senha', senhaEl.value);
   
}