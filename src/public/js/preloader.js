/*window.addEventListener('load', () => {
    const contenedor_loader = document.querySelector('.contenedor_loader')
    contenedor_loader.style.opacity = 0
    contenedor_loader.style.visibility = 'hidden'
})*/
window.addEventListener('load', () => {
    const contenedor_loader = document.querySelector('.loader-wrapper')  
    setTimeout(function(){
        contenedor_loader.classList.add('loaded');
        contenedor_loader.style.opacity = 0
        contenedor_loader.style.visibility = 'hidden'
    }, 1100)
})



