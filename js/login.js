
var icon = document.querySelector('#eye')

icon.addEventListener('click', function(){
    var input = document.querySelector('#input')
    var type = input.getAttribute('type')
    if(type==='password'){
        input.setAttribute('type', 'text')
        icon.className ='fa-solid fa-eye-slash'
    }
    else{
        input.setAttribute('type', 'password')
        icon.className ='fa-solid fa-eye'
    }
}) 
