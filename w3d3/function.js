// const box = document.getElementById('box');
// let id;
// let left = 0;
// let screenWidth = window.screen.availWidth;
// function move() {
//   id = setInterval(function(){
//     if(left > screenWidth-20)
//       stop()
//     left += 5;
//     // box.style.left = left + 'px';
//     box.style.left = `${left}px`
//   },5)
// }
// function stop() {
//   clearInterval(id)
// }

box.addEventListener(`dragstart`, function (e) {
    let x = e.clientX;
    let y = e.clientY;
    console.log(`start`, x, y);
    console.log(`start draging`, e.target.id);
})

box.addEventListener(`drag`, function (e) {
    let x = e.clientX;
    let y = e.clientY;
    console.log(`drag`, x, y);
})

box.addEventListener(`dragend`, function (e) {
    let x = e.clientX;
    let y = e.clientY;
    console.log(`dragend`, x, y);
    box.style.left = x+`px`
    box.style.top = y+`px`

})