(()=>{
   const loginBtn = document.getElementById('login');
   const usuarioHtml = document.getElementById('usuario');
   const passwordHtml = document.getElementById('password');
    
    loginBtn.addEventListener('click', (evento) =>{
        if (usuarioHtml.value === "") {
            alert("Por favor, escribe tu nombre de usuario.");
            usuarioHtml.focus();
            return false;
          }
          if (passwordHtml.value === "") {
            alert("Por favor, escribe tu contraseña");
            passwordHtml.focus();
            return false;
          }
          
          return true;
        
        
    })
    




}

)();