function Update(){
  let step = setInterval(()=>{Hour()}, 1000);
};

function Hour(){
  let currentDate = new Date();
  let currentHour = currentDate.getHours();
  let currentMinute = currentDate.getMinutes();
  let currentSecond = currentDate.getSeconds();

  let clock = `${currentHour}:${currentMinute}:${currentSecond}`;
  //let clock = `${currentHour}:${currentMinute}`;
  let display = document.getElementById('hour');

  display.innerText = `${clock}`;
}; 