//as we selected all with querySelectorAll the variable panels will be an array of all pannels 
const panels=document.querySelectorAll('.panel');

// th argument panel is considered as one panel of th e array pannels 
panels.forEach((panel)=>{
    //this function sis for to add a class active on each panel that will be clicked " ()=> " is another way of declaring functions 
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})
// this function is for to remove the active class on the other panels before adding on the one we clicked on
function removeActiveClasses(){
    panels.forEach((panel) =>{
        panel.classList.remove('active')
    })
}