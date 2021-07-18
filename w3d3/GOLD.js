boxa.addEventListener(`dragstart`, function (e) {
    let x = e.clientX;
    let y = e.clientY;
    // console.log(`start`, x, y);
    // console.log(`start draging`, e.target.id);
})

boxa.addEventListener(`drag`, function (e) {
    let x = e.clientX;
    let y = e.clientY;
    // console.log(`drag`, x, y);
})

boxa.addEventListener(`dragend`, function (e) {
    let x = e.clientX;
    let y = e.clientY;
    console.log(`dragend`, x, y);
    boxa.style.left = x+`px`
    boxa.style.top = y+`px`

})


boxb.addEventListener(`dragstart`, function (e) {
    let x = e.clientX;
    let y = e.clientY;
    // console.log(`start`, x, y);
    // console.log(`start draging`, e.target.id);
})

boxb.addEventListener(`drag`, function (e) {
    let x = e.clientX;
    let y = e.clientY;
    // console.log(`drag`, x, y);
})

boxb.addEventListener(`dragend`, function (e) {
    let x = e.clientX;
    let y = e.clientY;
    console.log(`dragend`, x, y);
    boxb.style.left = x+`px`
    boxb.style.top = y+`px`

})
