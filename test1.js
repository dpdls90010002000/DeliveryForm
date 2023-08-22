const FName1 = document.getElementById('txtFName');
const LName1 = document.getElementById('txtLName');
const Address1 = document.getElementById('txtAddress');
const City1 = document.getElementById('txtCity');
const State1 = document.getElementById('myState');
const Zip1 = document.getElementById('Zip');
const Phone1 = document.getElementById('Phone');
const FName = document.getElementById('DFName');
const LName = document.getElementById('DLName');
const Address = document.getElementById('DAddress');
const City = document.getElementById('DCity');
const State = document.getElementById('DmyState');
const Zip = document.getElementById('DZip');
const Phone = document.getElementById('DPhone');



function myFun(){

const select1 = document.getElementById('myState');
const select2 = document.getElementById('DmyState');

    select1.selectedIndex = -1;
    select2.selectedIndex = -1;

    const inputValues = ['txtFName','txtLName','txtAddress','txtCity','myState','Zip','Phone','DFName'
    ,'DLName','DAddress','DCity','DmyState','DZip','DPhone'];
    
    for (let i = 0; i < inputValues.length; i++) {
        const input = document.getElementById(inputValues[i]);
      
        if (input.checkValidity()) {
          input.classList.remove('invalid');
          input.classList.add('valid');
        } else {
          input.classList.remove('valid');
          input.classList.add('invalid');
        }
      }


}

var infoOption = document.querySelector("#infoOption");



infoOption.addEventListener("click",function(){
    if(infoOption.checked == true){
        var Fname = document.querySelector("#txtFName").value;
        var Lname = document.querySelector("#txtLName").value;
        var StreetAddress = document.querySelector("#txtAddress").value;
        var City = document.querySelector("#txtCity").value;
        var State = document.querySelector("#myState").value;
        var Zip = document.querySelector("#Zip").value;
        var Phone = document.querySelector("#Phone").value;



        document.querySelector("#DFName").value = Fname;
        document.querySelector("#DLName").value = Lname;
        document.querySelector("#DAddress").value = StreetAddress;
        document.querySelector("#DCity").value = City;
        document.querySelector("#DmyState").value = State;
        document.querySelector("#DZip").value = Zip;
        document.querySelector("#DPhone").value = Phone;

    }
    else{
        document.querySelector("#DFName").value = "";
        document.querySelector("#DLName").value = "";
        document.querySelector("#DAddress").value = "";
        document.querySelector("#DCity").value = "";
        document.querySelector("#DmyState").value = "";
        document.querySelector("#DZip").value = "";
        document.querySelector("#DPhone").value = "";
    }
});




function submitForm(){



    if(FName1.value ===''|| FName1.value == null ){
        FName1.setCustomValidity("Please enter your First Name");
    }
    else{
        FName1.setCustomValidity("");
    }
    
    
    if(LName1.value ===''|| LName1.value == null ){
        LName1.setCustomValidity("Please enter your Last Name");
    }
    else{
        LName1.setCustomValidity("");
    }

    if(Address1.value ===''|| Address1.value == null ){
        Address1.setCustomValidity("Please enter your Street Address");
    }
    else{
        Address.setCustomValidity("");
    }

    if(City1.value ===''|| City1.value == null ){
       City1.setCustomValidity("Please enter your City");
    }    else{
        City1.setCustomValidity("");
    }

    if(State1.value ===''|| State1.value == null ){
        State1.setCustomValidity("Please Select your State");
    }    else{
        State1.setCustomValidity("");
    }

    if(Zip1.value.length < 5 || Zip1.value ==null ){
        Zip1.setCustomValidity("Check the Number of Zip code");
    
    }    else{
        Zip1.setCustomValidity("");
    }

    if(Phone1.value.length != 12 || Phone1.value ==null ){
        Phone1.setCustomValidity("Check the Number of Phone number");
    }    else{
        Phone1.setCustomValidity("");
    }

   


    if(FName.value ===''|| FName.value == null ){
        FName.setCustomValidity("Please enter your First Name");
        
    }
    else{
        FName.setCustomValidity("");
    }
    
    
    if(LName.value ===''|| LName.value == null ){
        LName.setCustomValidity("Please enter your Last Name");
    }
    else{
        LName.setCustomValidity("");
    }

    if(Address.value ===''|| Address.value == null ){
        Address.setCustomValidity("Please enter your Street Address");
    }
    else{
        Address.setCustomValidity("");
    }

    if(City.value ===''|| City.value == null ){
        City.setCustomValidity("Please enter your City");
    }    else{
        City.setCustomValidity("");
    }

    if(State.value ===''|| State.value == null ){
        State.setCustomValidity("Please Select your State");
    }    else{
        State.setCustomValidity("");
    }
    if(Zip.value.length < 5 || Zip.value ==null ){
        Zip.setCustomValidity("Please Enter 5 digit Number");
    
    }    else{
        Zip.setCustomValidity("");
    }

    if(Phone.value.length != 12 || Phone.value == null ){
        Phone.setCustomValidity("Check the Number of Phone number");
    }    else{
        Phone.setCustomValidity("");
    }



}