

const nav = document.getElementById('nav');
const navIcon = document.getElementsByClassName('nav-icons');
const navIconText = document.getElementsByClassName('nav-icon-text');
const twitter = document.getElementsByClassName('fa-twitter')[0];
const home = document.getElementsByClassName('fa-house-user')[0];
const comment = document.getElementById('comment')
const retweet = document.getElementById('retweet')
const heart = document.getElementById('heart')
const uparrow = document.getElementById('uparrow')
const caution = document.getElementById('caution')
const navBar = document.getElementById('navbar')
const container = document.getElementById('container')




for (let i = 0; i < navIcon.length; i++) {
    navIcon[i].addEventListener('mouseover', function () {
        navIcon[i].style.backgroundColor = 'cornflowerblue';
        twitter.style.color = 'black';
        home.style.color = 'black';
    });

    navIcon[i].addEventListener('mouseleave', function () {
        navIcon[i].style.backgroundColor = '';
        twitter.style.color = '';
        home.style.color = '';
    });
}

 comment.addEventListener( 'click', function() {
    comment.style.color ='cornflowerblue'
 
}) 


heart.addEventListener( 'click', function() {
    heart.style.color ='red'
 
}) 



caution.addEventListener( 'click', function() {
    caution.style.color ='red'
 
}) 

retweet.addEventListener( 'click', function() {
    retweet.style.color ='green'
 
}) 



let navExpanded = false
navBar.addEventListener('click', function() {
   
    if (navExpanded) {
        container.style.gridTemplateColumns = '1fr 2fr 1fr';
        navBar.style.marginLeft = '25px';
    } else {
        container.style.gridTemplateColumns = '100px 2fr 1fr';
        navBar.style.marginLeft = '5px';
    }
  
        navExpanded = !navExpanded;
       

        for (let i = 0; i < navIconText.length; i++) {
            if (navIconText[i].style.display === 'block' || navIconText[i].style.display === '') {
                navIconText[i].style.display = 'none'; 
            } else {
                navIconText[i].style.display = 'block';
            }
        }

});
 
