const header = document.getElementById('header');
const content = document.getElementById('content')

header.addEventListener('click',()=>{
    // alert('e')
    if(content.style.display !== "none"){
        content.style.display= "none";
        content.style.height= "0px";
        content.style.opacity = "0";
    }
    else{
        content.style.display= "block";
        content.style.height= "400px";
        content.style.opacity = "1";
    }
    
})