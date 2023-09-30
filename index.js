const nav = document.getElementById('nav');
const navIcon = document.getElementsByClassName('nav-icons');
const navIconText = document.getElementsByClassName('nav-icon-text');
const twitter = document.getElementsByClassName('fa-twitter')[0];
const home = document.getElementsByClassName('fa-house-user')[0];
const comment = document.getElementById('comment')
const heart = document.getElementById('heart')
const uparrow = document.getElementById('uparrow')
const caution = document.getElementById('caution')
const navBar = document.getElementById('navbar')
const container = document.getElementById('container')
const everyIcons =document.getElementsByTagName('i')
const searchIcon = document.getElementById('search-icon')
const searchInput = document.getElementById('search-input')




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


const clickUparrowIcon = () =>{
    let clickUparrow = 'active'
    uparrow.addEventListener('click', function(){
        if( clickUparrow  === 'active'){
            uparrow.style.color = 'green'
            clickUparrow  = 'deactive'
        }
        else{
            uparrow.style.color = ''
            clickUparrow = 'active'
        }
    })

}
clickUparrowIcon();


const clickCommentIcon = () =>{
    let clickcomment = 'active'

    comment.addEventListener('click', function(){
        if( clickcomment === 'active'){
            comment.style.color = 'rgb(22, 120, 218)'
            clickcomment = 'deactive'
        }
        else{
            comment.style.color = ''
            clickcomment = 'active'
        }
    })

}
clickCommentIcon();

const clickHeartIcon = () =>{
    let clickHeart = 'active'
    heart.addEventListener('click', function(){
        if( clickHeart === 'active'){
            heart.style.color = 'red'
            clickHeart = 'deactive'
        }

        else{
            heart.style.color = ''
            clickHeart = 'active'
        }
    })
    
}
clickHeartIcon();



const clickCaution = () =>{
    let clickCautionIcon = 'display'
    caution.addEventListener( 'click', function() {

        if(clickCautionIcon === 'display'){
            caution.style.color ='red'
            clickCautionIcon = 'undisplayed'
        }
        else{
            caution.style.color = ''
            clickCautionIcon = 'display'
        }
    }) 

}
clickCaution();


const clickRetweet = () =>{
    let clickRetweetIcon = 'display'
    retweet.addEventListener( 'click', function() {

        if(clickRetweetIcon === 'display'){
            retweet.style.color ='green'
            clickRetweetIcon = 'undisplayed'
        }
        else{
            retweet.style.color = ''
            clickRetweetIcon = 'display'
        }
    }) 

    

}
clickRetweet();



let clicked = 'closed'
navBar.addEventListener('click', function(){
    const retweet = document.getElementById('retweet')
    for (let i = 0; i < navIconText.length; i++) {
        if (navIconText[i].style.display === 'block' || navIconText[i].style.display === '') {
            navIconText[i].style.display = 'none'; 
        } else {
            navIconText[i].style.display = 'block';
        }

    }

    if(clicked === 'closed'){
        container.style.gridTemplateColumns = '100px 2fr 1fr';
        clicked = 'opened'
    }
    else{
        container.style.gridTemplateColumns = 'auto 2fr 1fr';
        clicked = 'closed'
    }
})


searchInput.addEventListener('click', function(event) {
    event.stopPropagation()
    searchIcon.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if(searchInput.value && e.target !== searchIcon){
        searchIcon.style.display = 'none';
    }
    else{
        searchIcon.style.display = 'block';
    }
});