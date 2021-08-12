let name = prompt("İsminizi giriniz", "Ahmet");

let querySelectorName = document.querySelector("#isim");

querySelectorName.innerHTML = `${name}`;
querySelectorName.classList.add("font-italic", "font-weight-bolder");

// let querySelectorDate=document.querySelector("#tarih");
// let yeniTarih=new Date();
// querySelectorDate.innerHTML=yeniTarih.getHours()+":"+yeniTarih.getMinutes()+":"+yeniTarih.getSeconds()+""+yeniTarih.();
// setInterval(clockTick, 1000);

function clockTick() {
  var days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  var currentTime = new Date(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes(),
    seconds = currentTime.getSeconds(),
    day = currentTime.getDay(),
    text = hours + ":" + minutes + ":" + seconds + "   " +days[day];
  // here we get the element with the id of "date" and change the content to the text variable we made above
  document.getElementById("tarih").innerHTML = text; 
}

// here we run the clockTick function every 1000ms (1 second)
setInterval(clockTick, 1000);
