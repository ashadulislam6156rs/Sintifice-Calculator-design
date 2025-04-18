// function myTime(){
//     var myDate = new Date();
//     var min = (myDate.getMinutes() < 10 ) ? "0" + myDate.getMinutes() : myDate.getMinutes(),
//         hr = (myDate.getHours() < 10 ) ? "0" + myDate.getHours() : myDate.getHours(),
//         sec = (myDate.getSeconds() < 10 ) ? "0" + myDate.getSeconds() : myDate.getSeconds(),
//         DN = (myDate.getHours() >= 12) ? "PM" : "AM";


//     if(myDate.getHours() > 12)
//     {
//         hr = myDate.getHours() - 12;

//     }
//     else if(myDate.getHours() == 0 )
//     {
//         hr = 12;
//     }
//     else
//     {
//         hr = myDate.getHours();
//     }


//     var currenTime = hr + " : " + min + " : " + sec + " " + DN;
    
//     document.getElementsByClassName("time")[0].innerHTML = currenTime;


//     var myDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//         myMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//     var currenDate = myDay[myDate.getDay()] + ", " + myMonth[myDate.getMonth()] + " " + myDate.getDate() + ", " + myDate.getFullYear();
//   document.getElementsByClassName("date")[0].innerHTML = currenDate;


// }

// myTime();

// setInterval(function(){
//     myTime();
// },1000);


function ans(){
    var a = document.getElementById("input-id").value;
    var b = eval(a);
    document.getElementById("input-id").value = b;

}

function calculateValue(newCalculate){
    document.getElementById("input-id").value += newCalculate;

}
function deleteData(){
    document.getElementById("input-id").value = "";

}
function resultCalculate(){

}

