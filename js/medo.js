// console.log("medo");
let contdowndate = new Date("Dec 31,2022 23:59:59 ").getTime();
console.log(contdowndate);

let conter = setInterval(() => {
  //get date naw
  let dateNaw = new Date().getTime();
  let fainaldate = contdowndate - dateNaw;
  let days = Math.floor(fainaldate / 1000 / 60 / 60 / 24);
  //   console.log(days);
  document.querySelector(".days").innerHTML = days;
  let hours = Math.floor((fainaldate % (1000 * 60 * 60)) / (1000 * 60 * 60));
  console.log(hours);
  document.querySelector(".hours").innerHTML = hours;
  let minutes = Math.floor((fainaldate % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes").innerHTML = minutes;
  let secounds = Math.floor((fainaldate % (1000 * 60)) / 1000);
  document.querySelector(".secounds").innerHTML = secounds;
  if ((fainaldate = 0)) {
    clearInterval(conter);
  }
}, 1000);
