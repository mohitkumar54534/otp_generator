let otpbox=document.getElementById("password");
let length=6;
let number="0123456789";

function createpassword(){
    let otp="";
     otp+=number[Math.floor(Math.random()*number.length)];
        // otp+=number[Math.floor(Math.random()*10)];

    while(length>otp.length){
  otp+=number[Math.floor(Math.random()*number.length)];
   }
    otpbox.value=otp;
}
