const num1 = document.querySelector(".number1");
let counter1 = 0;
setInterval(() => {
  if (counter1 == 10) {
    clearInterval();
  } else {
    counter1 += 1;
    num1.textContent = counter1;
  }
}, 100);


const num2 =document.querySelector(".number2");
let counter2 = 0;
setInterval(() => {
  if (counter2 == 2) {
    clearInterval();
  } else {
    counter2 += 1;
    num2.textContent = counter2;
  }
},100);

const num3 =document.querySelector(".number3");
let counter3 = 0;
setInterval(() => {
  if (counter3 == 40) {
    clearInterval();
  } else {
    counter3 += 1;
    num3.textContent = counter3;
  }
}, 50);

const num4 =document.querySelector(".number4");
let counter4 = 0;
setInterval(() => {
  if (counter4 == 160) {
    clearInterval();
  } else {
    counter4 += 1;
    num4.textContent = counter4;
  }
}, 16);

// services-box


window.addEventListener('scroll', () => {
  let servicebox = document.querySelectorAll('.services-box');
  let serviceboxPosition = servicebox[0].getBoundingClientRect().top;
  let servicesecren = window.innerHeight /1;
  servicebox.forEach(function(box){
    if (serviceboxPosition < servicesecren) {
      box.classList.add('servicesactive')
    }else {
      box.classList.remove('servicesactive')
    }
  })
});


window.addEventListener('scroll', () => {
  let reasonbox = document.querySelectorAll('.reason-scroll');
  let reasonPosition = reasonbox[0].getBoundingClientRect().top;
  let reasonsecren = window.innerHeight /1;
  reasonbox.forEach(function(reasbox){
    if (reasonPosition < reasonsecren) {
      reasbox.classList.add('reasonactive')
    } else {
      reasbox.classList.remove('reasonactive')
    }
  })
});


window.addEventListener('scroll', () => {
  let counterbox = document.querySelectorAll('.scroll-counter');
  let counterPosition = counterbox[0].getBoundingClientRect().top;
  let countersecren = window.innerHeight /1;
  counterbox.forEach(function(countbox){
    if (counterPosition < countersecren) {
      countbox.classList.add('activecounter')
    } else {
      countbox.classList.remove('activecounter')
    }
  })
});


window.addEventListener('scroll', () => {
  let teambox = document.querySelectorAll('.teambox');
  let teamPosition = teambox[0].getBoundingClientRect().top;
  let teamsecren = window.innerHeight /1;
  teambox.forEach(function(tebox){
    if (teamPosition < teamsecren) {
      tebox.classList.add('teamboxactive')
    } else {
      tebox.classList.remove('teamboxactive')
    }
  })
});


window.addEventListener('scroll', () => {
  let clientbox = document.querySelectorAll('.clientbox');
  let clientPosition = clientbox[0].getBoundingClientRect().top;
  let clientsecren = window.innerHeight /1;
  clientbox.forEach(function(clienbox){
    if (clientPosition < clientsecren) {
      clienbox.classList.add('clientboxactive')
    } else {
      clienbox.classList.remove('clientboxactive')
    }
  })
});


window.addEventListener('scroll', () => {
  let newsbox = document.querySelectorAll('.newsbox');
  let newsPosition = newsbox[0].getBoundingClientRect().top;
  let newssecren = window.innerHeight /1;
  newsbox.forEach(function(newbox){
    if (newsPosition < newssecren) {
      newbox.classList.add('newsboxactive')
    } else {
      newbox.classList.remove('newsboxactive')
    }
  })
});


window.addEventListener('scroll', () => {
  let gallerybox = document.querySelectorAll('.animation');
  let galleryPosition = gallerybox[5].getBoundingClientRect().top;
  let gallerysecren = window.innerHeight /0.5;
  gallerybox.forEach(function(gallerbox){
    if (galleryPosition < gallerysecren) {
      gallerbox.classList.add('animatiactive')
    } else {
      gallerbox.classList.remove('animatiactive')
    }
  })
});