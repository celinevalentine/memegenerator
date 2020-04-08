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
    let topText = topTextInput.value.toUpperCase();
    let btmTextInput = document.querySelector('#btmText');
    let btmText = btmTextInput.value.toUpperCase();

    let newDiv = document.createElement('div');
    let topTextDiv = document.createElement('div');
    let btmTextDiv = document.createElement('div');
    topTextDiv.innerHTML = topText;
    btmTextDiv.innerHTML = btmText;
    newDiv.classList.add('memeContainer');
    topTextDiv.classList.add('topText');
    btmTextDiv.classList.add('btmText');

    newImg.addEventListener("click", function(evt) {
        evt.target.parentElement.remove();
    });

    newDiv.appendChild(newImg);
    newDiv.appendChild(topTextDiv);
    newDiv.appendChild(btmTextDiv);


    let canvas = document.querySelector('#meme-results');
    canvas.appendChild(newDiv);

    memeForm.reset();
});