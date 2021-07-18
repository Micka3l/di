// exercise 1
const animate = document.getElementById(`animate`);
const container = document.getElementById(`container`);
let id;
let left = 0;
let screenWidth = container.offsetWidth;


function myMove() {
    id = setInterval(function(){
      if(left > screenWidth-60)
        stop()
      left += 5;
      // box.style.left = left + 'px';
      animate.style.left = `${left}px`
    },5)
  }
  function stop() {
    clearInterval(id)
  }