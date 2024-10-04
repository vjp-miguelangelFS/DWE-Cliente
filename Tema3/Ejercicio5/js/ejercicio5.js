let div = document.getElementById('contenedorGeneral')

// 1

div.style.width = '200px'
div.style.height = '200px'
div.style.backgroundColor = '#9e9e9e'
div.style.color = 'blue'
div.style.border = '1px solid red'

// 3
document.addEventListener('DOMContentLoaded',function (){
    
    // 2
    window.addEventListener("resize",function(){
        div.textContent = window.innerWidth + ' - ' +this.window.innerHeight
    })
})



