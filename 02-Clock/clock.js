const hourhand = document.querySelector('.hour');
const minhand = document.querySelector('.min');
const sechand = document.querySelector('.sec');
const time = document.querySelector('.time');

function update() {
    let d= new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    const hourdeg = ((hour / 12) * 360) + ((min/60)*30) + 90;
    const mindeg = ((min / 60) * 360) + ((sec/60)*6) + 90;
    const secdeg = ((sec / 60) * 360) + 90;
    hourhand.style.transform = 'rotate('+hourdeg+'deg)';
    minhand.style.transform = 'rotate('+mindeg+'deg)';
    sechand.style.transform = 'rotate('+secdeg+'deg)';
    time.innerHTML = hour + " : " + min + " : " + sec;
}

setInterval(update,1000);

update();