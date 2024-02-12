function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('pass').value;

    if (login == "grcarvalho" && senha == "123"){
        alert ('Acesso permitido');
        location.href = "home.html";
    }else{
        alert('Acesso negado');
    }
}