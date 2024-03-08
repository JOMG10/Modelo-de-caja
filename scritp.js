const inputPassword = document.getElementById('input-password')

document.getElementById('iniciar').addEventListener('click', (e)=>{
    e.preventDefault()
    const password= inputPassword.value
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if(regex.test(password) ){
        window.location.href = 'menu.html';
    console.log("iniciando boton")

    }else{
        alert("el dato es menor de 8 dijitos")
    }
    
    
})
