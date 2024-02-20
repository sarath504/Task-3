function empSearch(){
    var input=document.getElementsByClassName('emp-search');
    var div=document.getElementsByClassName('assign-employees');
    // div[0].style.display="none";
    div[0].style.display=div[0].style.display==="block" ? "none" : "block";
    document.body.addEventListener("click", function(event) {
        if (!div[0].contains(event.target) && event.target !==input[0] ) {
            div[0].style.display = "none";
        }
    });
}

function boxColor(str){
    var role=document.getElementsByClassName('role-name');
    var description=document.getElementsByClassName('description');
    if(str=='role'){
        role[0].style.outline='2px solid #378EFF';
    }
    else if(str=='textarea'){
        description[0].style.outline='2px solid #378EFF';
    }
}

function removeColor(str){
    var role=document.getElementsByClassName('role-name');
    var description=document.getElementsByClassName('description');
    if(str=='role'){
        role[0].style.outline='none';
        role[0].style.border='1px solid black';
    }
    else if(str=='textarea'){
        description[0].style.outline='none';
        description[0].style.border='1px solid black';
    }
}


function dropDown(dropdownId,text){
    var dropdown=document.getElementById('dropdown'+dropdownId);
    dropdown.querySelector(".dropbtn").textContent=text;
    
}

function dropdownLoc(dropdownId,text){
    var dropdown=document.getElementById('dropdown'+dropdownId);
    dropdown.querySelector(".dropbtn-location").textContent=text;
}

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
