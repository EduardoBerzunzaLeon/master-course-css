const pre = document.querySelector("pre");
const container = document.querySelector('.container');

container.addEventListener("mousemove", (e) => {
    // console.log('mouse');
  rotateElement(e, pre);
  
});

container.addEventListener("mouseleave", (e) => {
    e.stopPropagation();
    stopElement(pre);
})

const rotateElement = (event, element) => {

  const x = event.clientX;
  const y = event.clientY;

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  const offsetX = ((x - middleX) / middleX) * 45;   
  const offsetY = ((y - middleY) / middleY) * 45;
  const delay = '0s';

  element.style.setProperty("--rotateX", offsetX + "deg");
  element.style.setProperty("--rotateY", -1 * offsetY + "deg");
  
  element.style.setProperty("--delay", delay);

  console.log({
    offsetX, offsetY, middleX, middleY, x, y,
  });
}

const stopElement = (element) => {
    element.style.setProperty("--rotateX", "0deg");
    element.style.setProperty("--rotateY", "0deg");
    element.style.setProperty("--delay", '.5s');
}


