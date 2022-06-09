const progress=document.getElementById('progress');
const circles=document.querySelectorAll('.circle');
const prev=document.getElementById('prev');
const next=document.getElementById('next');

let currentActive=1


next.addEventListener('click',()=>{
    currentActive++
    if (currentActive>circles.length){
        currentActive=circles.length;   
    }

    update()
    
})

 prev.addEventListener('click',()=>{
     currentActive--
     if(currentActive<1){
         currentActive=1;
     }
     update()
 })

 function update () {

    circles.forEach((circle,idx)=>{
        if (idx<currentActive){
        circle.classList.add('active');
        }
        else{
        circle.classList.remove('active');
        }

    })

    const allActive=document.querySelectorAll('.active')
    
    allActive.forEach((idx)=>{
      if(currentActive === 1 ){
          prev.disabled=true
          progress.style.width=((allActive.length -1)/(circles.length -1))*100 +'%'
      }
      else if(currentActive === circles.length){
          next.disabled=true
          progress.style.width=((allActive.length -1)/(circles.length -1))*100 +'%'
      }
      else{ 
          prev.disabled=false
          next.disabled=false
          progress.style.width=((allActive.length -1)/(circles.length -1))*100 +'%'
      }
    })

 }
 
 

