function displayGalleryPhotoBaby(i, filenameBaby) {
  return `
            <li>
                <button onclick="openDialog(${i}, babyNames, babyGalleryImgs)">
                <img src="./img/${filenameBaby}" 
                alt="Bild von Baby-Paco">
                </button>
            </li>
            `; 
}


function displayGalleryPhotoBig(i, filenameBig) {
  return `
            <li>
                <button onclick="openDialog(${i}, bigNames, bigGalleryImgs)">
                <img src="./img/${filenameBig}" 
                alt="Bild von Paco, erwachsen">
                </button>
            </li>
            `;
}


function displayCounter(i, array) {
  return `
            ${i + 1} von ${array.length}
            `;
}


function displayPictureContainer(i, namesArray, pictureArray) {
  return `
            <h2>${namesArray[i]}</h2>
            <img class="bigImg" src="img/${pictureArray[i]}" alt="${namesArray[i]}">
        `;
}


function displayLastNextButtons(i, arrayName) {
    let array = []
    if (arrayName == "babyGalleryImgs") {
        array = babyGalleryImgs
    } else {
        array = bigGalleryImgs
    }
    
    return `
            <button id="prevButton" onclick="prevImg('${arrayName}')" class="dialogButton" tabindex="0">
                <img src="./icon/letztes_default.png" alt="vorheriges Bild">
            </button>
            ${displayCounter(i, array)}
            <button id="nextButton" onclick="nextImg('${arrayName}')" class="dialogButton" tabindex="0">
                <img src="./icon/next_default.png" alt="nächstes Bild">
            </button>
        `;
}
