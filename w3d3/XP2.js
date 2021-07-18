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