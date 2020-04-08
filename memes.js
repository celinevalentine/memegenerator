let memeForm = document.querySelector('#memeForm');

memeForm.addEventListener('submit', function(e) {
    // if (e.keycode === 13);
    e.preventDefault();
    // create image, get it from input sources then append it in the new div
    let imgInput = document.querySelector('#url');
    let imgUrl = imgInput.value;
    let newImg = document.createElement("img");
    newImg.setAttribute('src', imgUrl);

    newImg.setAttribute("height", "250px");
    newImg.setAttribute("width", "250px");
    //add top and btm text to newImg
    let topTextInput = document.querySelector('#topText');
    let topText = topTextInput.value;
    let btmTextInput = document.querySelector('#btmText');
    let btmText = btmTextInput.value;

    let newDiv = document.createElement('div');
    let topTextDiv = document.createElement('div');
    let btmTextDiv = document.createElement('div');
    topTextDiv.appendChild(topText);
    btmTextDiv.appendChild(btmText);

    let removeButton = document.createElement("button");;
    removeButton.innerText = "X";

    newDiv.appendChild(newImg);
    newDiv.appendChild(topTextDiv);
    newDiv.appendChild(btmTextDiv);

    newDiv.appendChild(removeButton);

    let canvas = document.querySelector('#meme-results');
    canvas.appendChild(newDiv);

    memeForm.reset();
});
// delete meme 
let imgInput = document.querySelector('#url');
let imgUrl = imgInput.value;
let newImg = document.createElement("img");
newImg.setAttribute('src', imgUrl);

newImg.addEventListener('click', function(e) {

    const clickedImg = e.target.tagName;
    if (clickedImg === 'button') {
        e.target.parentElement.remove();
    };
});