function counDown() {
   setInterval(function(){
   var currentDate = new Date().getTime();
   var bakraEid = new Date("17 jun 2024").getTime();
   var eidTotal = bakraEid - currentDate;
   // console.log(eidTotal)
   var eidDays = Math.floor(eidTotal / (1000 * 60 * 60 * 24));
   console.log("Days:" + eidDays)
   var eidHours = Math.floor(eidTotal % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
   console.log("Hours:" + eidHours);
   var eidTime = Math.floor(eidTotal % (1000 * 60 * 60) / (1000 * 60));
   console.log("Time: " + eidTime)
   var eidSecond = Math.floor(eidTotal % (1000 * 60) / (1000));
   console.log("Second:" + eidSecond);
   document.getElementById("days").innerText=eidDays;
   document.getElementById("hours").innerText=eidHours;
   document.getElementById("time").innerText=eidTime;
   document.getElementById("second").innerText=eidSecond;
},1000)
}
counDown()