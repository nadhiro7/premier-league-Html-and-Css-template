let myLogo = document.querySelector('.logo img');
let myClub = document.getElementById('club');
let myHeader = document.querySelectorAll('header');
document.body.onscroll = function(){
    if(document.querySelector('html').scrollTop >= 50){
        myLogo.classList.add('lgImg');
        myClub.style.display = "none";
        myHeader[0].style.height = "85px"
    }else if(document.querySelector('html').scrollTop === 0){
        myLogo.classList.remove('lgImg');
        myClub.style.display = "flex";
        myHeader[0].style.height = "135px"
    }
}