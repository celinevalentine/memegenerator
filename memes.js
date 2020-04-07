let memeForm = document.querySelector('#memeForm');
let imgInput = document.querySelector('#url');
let topTextInput = document.querySelector('input[name="topText"]');
let btmTextInput = document.querySelector('input[name="btmText"]');
let imgUrl = imgInput.value;
let newImg = document.createElement("img");
newImg.src = imgUrl;



memeForm.addEventListener("submit" || "keypress", function(e) {
    if (e.keycode === 13);
    e.preventDefault();
    // create image, get it from input sources then append it in the new div

    newImg.setAttribute("height", "250px");
    newImg.setAttribute("width", "250px");

    let newDiv = document.createElement('div');
    let topTextDiv = document.createElement('div');
    let btmTextDiv = document.createElement('div');

    newDiv.id = 'meme-results';
    newDiv.appendChild(newImg);
    newDiv.appendChild(topTextDiv);
    newDiv.appendChild(btmTextDiv);

    let removeButton = document.createElement("button");;
    removeButton.innerText = "X";
    newImg.appendChild(removeButton);

    memeForm.reset();
});
// delete meme 
let memeList = document.querySelector('meme_results');
memeList.addEventListener('click', function(e) {
    const clickedImg = e.target.tagName;
    if (clickedImg === 'button') {
        e.target.parentElement.remove();
    };
});