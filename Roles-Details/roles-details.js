function hamburgerOpen(){
    var element=document.getElementsByClassName('left-container');
    var hamburger=document.getElementsByClassName('hamburger-menu');
    var mainContainer=document.getElementsByClassName('main-container');
    element[0].style.display='none';
    if(element[0].style.display=='none'){
        hamburger[0].style.display='flex';
        hamburger[0].style.flexDirection='column';
        mainContainer[0].style.display='flex';
        mainContainer[0].style.flexDirection='row';
        mainContainer[0].style.flex='10% 90%';
        hamburger[0].style.width='10%';
    }
}

function hamburgerClose(){
    var leftUpdate=document.getElementsByClassName('left-container-update');
    var element=document.getElementsByClassName('left-container');
    var hamburger=document.getElementsByClassName('hamburger-menu');
    var mainContainer=document.getElementsByClassName('main-container');
    hamburger[0].style.display='none';
    if(hamburger[0].style.display=='none'){
        element[0].style.display='block';
        mainContainer[0].style.display='flex';
        mainContainer[0].style.flexDirection='row';
        mainContainer[0].style.flex='18% 82%';
        mainContainer[0].style.marginLeft='1%';
        leftUpdate[0].style.marginTop='75%';
    }
}