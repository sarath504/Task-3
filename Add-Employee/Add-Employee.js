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

document.addEventListener('DOMContentLoaded',()=>{
    var joindt=document.getElementsByClassName('joindt-data')[0];
    const date=new Date().toLocaleDateString();
    joindt.placeholder=date;
    var parameters=window.location.search;
    var urlparams=new URLSearchParams(parameters);
    var empno=urlparams.get('empid');
    var a=localStorage.getItem('details');
    var data=JSON.parse(a);
    if(empno){
        document.getElementsByClassName('add-employee-btn')[0].innerHTML='Update';
    }
    data.forEach((element) => {
        if(element['EMPNO']==empno){
            var name=element['USER'].split(" ");
            document.getElementsByClassName('profile-picture')[0].src=element['image'];
            document.getElementsByClassName('last-name-data')[0].value=name[0];
            document.getElementsByClassName('first-name-data')[0].value=name[name.length-1];
            document.getElementsByClassName('empno-data')[0].value=element['EMPNO'];
            document.getElementsByClassName('email-data')[0].value=element['EMAIL'];
            document.getElementsByClassName('mobile-data')[0].value=element['MOBILE'];
            document.getElementsByClassName('dob-data')[0].value=element['DOB'];
            document.getElementsByClassName('joindt-data')[0].value=element['JOINDT'];
            document.getElementsByClassName('btn-loc')[0].innerText=element['LOCATION'];
            document.getElementsByClassName('btn-role')[0].innerText=element['ROLE'];
            document.getElementsByClassName('btn-dept')[0].innerText=element['DEPARTMENT'];
            document.getElementsByClassName('btn-manager')[0].innerText=element['MANAGER'];
            document.getElementsByClassName('btn-project')[0].innerText=element['PROJECT'];
        }
    });


    var inputFile=document.getElementsByClassName('file-upload');
inputFile[0].addEventListener('change',event=>{
    console.log("entered");
    const image=event.target.files[0];
    const reader=new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load',()=>{
        localStorage.setItem('profileImage',reader.result);
        console.log("Image is uploaded to local storage");
        var img=document.getElementsByClassName('profile-picture');
        img[0].src=localStorage.getItem('profileImage');
    });
    inputFile[0].addEventListener('click',()=>{
        inputFile[0].value=null;
    });
    // if(img[0]){
    //     reader.readAsDataURL(profileImage);
    // }
    
});

});




function errorMsg(){
    var div=document.getElementsByClassName('error-msg-div');
    var empNo=document.getElementsByClassName('empno-data');
    var empno=empNo[0].value;
    var fName=document.getElementsByClassName('first-name-data');
    var fname=fName[0].value;
    var lName=document.getElementsByClassName('last-name-data');
    var lname=lName[0].value;
    var emailId=document.getElementsByClassName('email-data');
    var email=emailId[0].value;
    var joinDt=document.getElementsByClassName('joindt-data');
    var joindt=joinDt[0].value;
    var dob=document.getElementsByClassName('dob-data');
    dob=dob[0].value;
    var mobile=document.getElementsByClassName('mobile-data');
    mobile=mobile[0].value;

    for(var i=0;i<div.length;i++){
        div[i].style.display='none';
    }
    
    if(empno.length==0){
        if(div[0].style.display=='none'){
            div[0].style.display='flex';
            div[0].style.flexDirection='row';
            empNo[0].style.outline="2px solid red";
            empNo[0].style.borderStyle='none';
        }
    }
    else{
        div[0].style.display='none';
    }

    if(fname.length==0){
        if(div[1].style.display=='none'){
            div[1].style.display='flex';
            div[1].style.flexDirection='row';
            fName[0].style.outline="2px solid red";
            fName[0].style.borderStyle='none';
        }
    }
    else{
        div[1].style.display='none';
    }

    if(lname.length==0){
        if(div[2].style.display=='none'){
            div[2].style.display='flex';
            div[2].style.flexDirection='row';
            lName[0].style.outline="2px solid red";
            lName[0].style.borderStyle='none';
        }
    }
    else{
        div[2].style.display='none';
    }

    if(email.length==0){
        if(div[3].style.display=='none'){
            div[3].style.display='flex';
            div[3].style.flexDirection='row';
            emailId[0].style.outline="2px solid red";
            emailId[0].style.borderStyle='none';
        }
    }
    else{
        div[3].style.display='none';
    }

    if(joindt.length==0){
        if(div[4].style.display=='none'){
            div[4].style.display='flex';
            div[4].style.flexDirection='row';
            joinDt[0].style.outline="2px solid red";
            joinDt[0].style.borderStyle='none';
        }
    }
    else{
        div[4].style.display='none';
    }
    var btnDiv=document.getElementsByClassName('error-btn-div');
    var mainDiv=document.getElementsByClassName('profile-picture-div');
    var edit=document.getElementsByClassName("edit-text");
    var successMsg=document.getElementsByClassName('success-msg');
    var flag1=0,flag2=1;
    if(document.getElementsByClassName('profile-picture')[0].src!='../Assets/profile.PNG'){
        flag1=1;
    }
    else{
        flag1=1;
        mainDiv[0].style.width='150px';
        edit[0].style.marginLeft='20%';
    }

        var btn=document.getElementsByClassName('dropbtn');
        empno=document.getElementsByClassName('empno-data')[0].value;
        fname=document.getElementsByClassName('first-name-data')[0].value;
        lname=document.getElementsByClassName('last-name-data')[0].value;
        var name=lname+" "+fname;
        email=document.getElementsByClassName('email-data')[0].value;
        joindt=document.getElementsByClassName('joindt-data')[0].value;

        var location=btn[0].innerText;
        var role=btn[1].innerText;
        var department=btn[2].innerText;
        var manager=btn[3].innerText;
        var project=btn[4].innerText;
        
        var img=document.getElementsByClassName('profile-picture');

        var data={
            image:img[0].src,
            USER:name,
            EMAIL:email,
            LOCATION:location,
            DEPARTMENT:department,
            ROLE:role,
            EMPNO:empno,
            STATUS:'Active',
            JOINDT:joindt,
            MOBILE:mobile,
            DOB:dob,
            MANAGER:manager,
            PROJECT:project
        };
        
        for(var i=0;i<div.length;i++){
            if(div[i].style.display!='none'){
                flag2=0;
            }
        }
        if(flag1==1 && flag2==1){
            saveData(data);
            console.log("Success");
            successMsg[0].style.display='block';

            setTimeout(function() {
                successMsg[0].style.display='none';
                window.location.href="../Employee/employee.html";
            }, 1000);
            
        }
        else{
            console.log(flag1);
            console.log(flag2);
            console.log("failed");
        }
}

function saveData(data){
    const storedData=JSON.parse(localStorage.getItem('details')) || [];
    var exist=0;
    storedData.forEach((element)=>{
        if(element['EMPNO']==data['EMPNO']){
            element['image']=data['image'];
            element['EMPNO']=data['EMPNO'];
            element['USER']=data['USER'];
            element['EMAIL']=data['EMAIL'];
            element['JOINDT']=data['JOINDT'];
            element['LOCATION']=data['LOCATION'];
            element['DEPARTMENT']=data['DEPARTMENT'];
            element['ROLE']=data['ROLE'];
            element['MOBILE']=data['MOBILE'];
            element['DOB']=data['DOB'];
            element['MANAGER']=data['MANAGER'];
            element['PROJECT']=data['PROJECT'];
            exist=1;
        }
    });
    if(exist==0){
        storedData.push(data);
    }
    localStorage.setItem('details',JSON.stringify(storedData));  
}

function dropDownClick(str){
    console.log(str);
    var dropDown=document.getElementsByClassName('dropdown-content');
    var btn=document.getElementsByClassName('dropbtn');
        if(str=='Location'){
            dropDown[0].style.borderRadius='7px';
            dropDown[0].style.display=dropDown[0].style.display==='block' ? 'none' : 'block';
            document.body.addEventListener("click", function(event) {
                if (event.target !==btn[0]) {
                    dropDown[0].style.display = "none";
                }
            });
        }
        else if(str=='Job Title'){
            dropDown[1].style.borderRadius='7px';
            dropDown[1].style.display=dropDown[1].style.display==='block' ? 'none' : 'block';
            document.body.addEventListener("click", function(event) {
                if (event.target !==btn[1]) {
                    dropDown[1].style.display = "none";
                }
            });
        }
        else if(str=='Department'){
            dropDown[2].style.borderRadius='7px';
            dropDown[2].style.display=dropDown[2].style.display==='block' ? 'none' : 'block';
            document.body.addEventListener("click", function(event) {
                if (event.target !==btn[2]) {
                    dropDown[2].style.display = "none";
                }
            });
        }
        else if(str=='manager'){
            dropDown[3].style.borderRadius='7px';
            dropDown[3].style.display=dropDown[3].style.display==='block' ? 'none' : 'block';
            document.body.addEventListener("click", function(event) {
                if (event.target !==btn[3]) {
                    dropDown[3].style.display = "none";
                }
            });
        }
        else if(str=='project'){
            dropDown[4].style.borderRadius='7px';
            dropDown[4].style.display=dropDown[4].style.display==='block' ? 'none' : 'block';
            document.body.addEventListener("click", function(event) {
                if (event.target !==btn[4]) {
                    dropDown[4].style.display = "none";
                }
            });
        }
}


function mobileValidation(){
    var mobileNumber=/^[0-9]{10}$/;
    var text=document.getElementsByClassName('mobile-data')[0].value;
    var mobile=document.getElementsByClassName('error-mobile');
    if(mobileNumber.test(text) || text.length==0){
        mobile[0].style.display='none';
    }
    else{
        mobile[0].style.display='block';
    }
}

function fnameValidation(){
    var fname=/^[a-zA-Z\s]*$/;
    var text=document.getElementsByClassName('first-name-data')[0].value;
    var firstName=document.getElementsByClassName('error-fname');
    if(fname.test(text)){
        firstName[0].style.display='none';
    }
    else{
        firstName[0].style.display='block'; 
    }
}

function lnameValidation(){
    var lname=/^[a-zA-Z\s]*$/;
    var text=document.getElementsByClassName('last-name-data')[0].value;
    var lastName=document.getElementsByClassName('error-lname');
    if(lname.test(text)){
        lastName[0].style.display='none';
    }
    else{
        lastName[0].style.display='block'; 
    }
}

function emailValidation(){
    var email=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var text=document.getElementsByClassName('email-data')[0].value;
    var emailId=document.getElementsByClassName('error-email');
    if(email.test(text)){
        emailId[0].style.display='none';
    }
    else{
        emailId[0].style.display='block';
    }
}

function empIdValidation(){
    var empid=/^[A-Za-z0-9]*$/;
    var text=document.getElementsByClassName('empno-data')[0].value;
    var emp=document.getElementsByClassName('error-empid');
    if(empid.test(text)){
        emp[0].style.display='none';
    }
    else{
        emp[0].style.display='block';
    }
}

function dateValidation(){
    var date=/^\d{4}\-\d{1,2}\-\d{1,2}$/;
    var text=document.getElementsByClassName('joindt-data')[0].value;
    var joinDt=document.getElementsByClassName('error-date');
    if(date.test(text) || text.length==0){
        joinDt[0].style.display='none';
    }
    else{
        joinDt[0].style.display='block';
    }
    console.log(text);
}

function dropDown(dropdownId,text){
    var dropdown=document.getElementById('dropdown'+dropdownId)
    dropdown.querySelector(".dropbtn").textContent=text;
}

function removeError(str){
    var div=document.getElementsByClassName('error-msg-div');
    var empNo=document.getElementsByClassName('empno-data');
    var fName=document.getElementsByClassName('first-name-data');
    var lName=document.getElementsByClassName('last-name-data');
    var emailId=document.getElementsByClassName('email-data');
    var joinDt=document.getElementsByClassName('joindt-data');

    if(str=='empno'){
        div[0].style.display="none";
        empNo[0].style.outline="2px solid #378EFF";
    }
    else if(str=="fname"){
        div[1].style.display="none";
        fName[0].style.outline="2px solid #378EFF";
    }
    else if(str=="lname"){
        div[2].style.display="none";
        lName[0].style.outline="2px solid #378EFF";
    }
    else if(str=="email"){
        div[3].style.display="none";
        emailId[0].style.outline="2px solid #378EFF";
    }
    else if(str=="joindt"){
        div[4].style.display="none";
        joinDt[0].style.outline="2px solid #378EFF";
    }

}

function focusOut(str){
    var empNo=document.getElementsByClassName('empno-data');
    var fName=document.getElementsByClassName('first-name-data');
    var lName=document.getElementsByClassName('last-name-data');
    var emailId=document.getElementsByClassName('email-data');
    var joinDt=document.getElementsByClassName('joindt-data');

    if(str=='empno'){
        empNo[0].style.outline="none";
        empNo[0].style.border='1px solid black';
    }
    else if(str=="fname"){
        fName[0].style.outline="none";
        fName[0].style.border='1px solid black';
    }
    else if(str=="lname"){
        lName[0].style.outline="none";
        lName[0].style.border='1px solid black';
    }
    else if(str=="email"){
        emailId[0].style.outline="none";
        emailId[0].style.border='1px solid black';
    }
    else if(str=="joindt"){
        joinDt[0].style.outline="none";
        joinDt[0].style.border='1px solid black';
    }
}
