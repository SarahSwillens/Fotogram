function displayGalleryPhotoBaby(i, filenameBaby) {
  // das ist die Template-FUnktion, die meine BabyImgs in die Gallerie rendert
  return `
            <li>
                <button onclick="openDialogBaby(${i})">
                <img src="./img/${filenameBaby}" 
                alt="Bild von Baby-Paco">
                </button>
            </li>
            `; // die Funktion openDialogBaby(i) wird auf das Thumbnail gesatzt, das dann das Bild mit dem Namen auf dem filenameBaby = babyGalleryImgs[i]- Array einfügt!
}

function displayGalleryPhotoBig(i, filenameBig) {
  return `
            <li>
                <button onclick="openDialogBig(${i})">
                <img src="./img/${filenameBig}" 
                alt="Bild von Paco, erwachsen">
                </button>
            </li>
            `;
}

function displayCounterBaby(i) {
  return `
            ${i + 1} von ${babyGalleryImgs.length}
            `;
}

function displayCounterBig(i) {
  return `
            ${i + 1} von ${bigGalleryImgs.length}
            `;
}

function displayPictureContainerBig(i) {
  return `
            <h2>${bigNames[i]}</h2>
            <img class="bigImg" src="img/${bigGalleryImgs[i]}" alt="${bigNames[i]}">
        `;
}

function displayPictureContainerBaby(i) {
  return `
            <h2>${babyNames[i]}</h2>
            <img class="bigImg" src="img/${babyGalleryImgs[i]}" alt="${babyNames[i]}">
        `;
}


function displayLastNextButtonsBaby(i) {
    return `
            <button id="prevButton" onclick="prevImgBaby()" class="dialogButton" tabindex="0">
                <img src="./icon/letztes_default.png" alt="vorheriges Bild">
            </button>
            ${displayCounterBaby(i)}
            <button id="nextButton" onclick="nextImgBaby()" class="dialogButton" tabindex="0">
                <img src="./icon/next_default.png" alt="nächstes Bild">
            </button>
        `;
}

function displayLastNextButtonsBig(i){
return `
        <button id="prevButton" onclick="prevImgBig()" class="dialogButton" tabindex="0">
                <img src="./icon/letztes_default.png" alt="vorheriges Bild">
            </button>
            ${displayCounterBig(i)}
            <button id="nextButton" onclick="nextImgBig()" class="dialogButton" tabindex="0">
                <img src="./icon/next_default.png" alt="nächstes Bild">
            </button>
        `;
}