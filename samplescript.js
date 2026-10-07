const buttonname = document.getElementById('changeName');
const studentname = document.getElementById('studentName');
const changebg = document.getElementById('changeBackground');
const proff = document.getElementById('profile');
const tgd = document.getElementById('toggleDetails');
const details = document.getElementById('details');

buttonname.addEventListener("click", function(){
    studentname.textContent = "Maria Santos";
}

)

changebg.addEventListener("click", function(){
    if(proff.style.backgroundColor == "lightblue"){
        proff.style.backgroundColor = "white";
    }else{proff.style.backgroundColor = "lightblue";}
})

tgd.addEventListener("click", function(){
    details.classList.toggle("hidden");
})