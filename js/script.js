function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('pass').value;

    if (login == "sdmarketdata" && senha == "M@rketdata@sd24"){
        alert('Acesso Permitido!');
        location.href = "../html/home.html";
    }else{
        alert('USUÁRIO / SENHA INCORRETO!');
    }
}