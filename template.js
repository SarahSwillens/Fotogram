function displayGalleryPhotoBaby (i, filenameBaby) {            // das ist die Template-FUnktion, die meine BabyImgs in die Gallerie rendert
    return `
            <li>
                <button onclick="openDialogBaby(${i})">
                <img src="./img/${filenameBaby}" 
                alt="Bild von Baby-Paco">
                </button>
            </li>
            `                               // die Funktion openDialogBaby(i) wird auf das Thumbnail gesatzt, das dann das Bild mit dem Namen auf dem filenameBaby = babyGalleryImgs[i]- Array einfügt!
}

function displayGalleryPhotoBig (i, filenameBig) {
    return `
            <li>
                <button onclick="openDialogBig(${i})">
                <img src="./img/${filenameBig}" 
                alt="Bild von Paco, erwachsen">
                </button>
            </li>
            `
}

function displayCounterBaby(i) {
    return  `
            ${i+1} von ${babyGalleryImgs.length}
            `
}

function displayCounterBig(i) {
    return  `
            ${i+1} von ${bigGalleryImgs.length}
            `
}