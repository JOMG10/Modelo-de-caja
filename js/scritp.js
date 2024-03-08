const inputPassword = document.getElementById('input-password')
const spanValidacion = document.getElementById("validacion")

document.getElementById('iniciar').addEventListener('click', (e)=>{
    e.preventDefault()
    const password= inputPassword.value
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if(regex.test(password) ){
    window.location.href = 'view/menu.html';
    console.log("iniciando boton")
    }else{
        spanValidacion.textContent = "El dato es incorrecto"
        
    }
    
    
})
