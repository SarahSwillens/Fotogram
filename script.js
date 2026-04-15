
    const dialogRef = document.getElementById("dialog");

    const babyGalleryImgs = [
        "BabyWithMe.jpg",
        "Basket.jpg",
        "BigBed.jpg",
        "Newborn.jpg"
    ]

    const babyNames = [
        "Baby-Paco mit mir",
        "Pacos Lieblingsort",
        "Pacos Bettchen",
        "Frisch geschlüpft"
    ]
    
    const bigGalleryImgs = [
        "BeautifulTree.jpg",
        "BestBuddy.jpg",
        "BigBoyWithMe.jpg",
        "Coming.jpg",
        "Grass.jpg",
        "HiTHere.jpg",
        "HugeStick.jpg",
        "Lake.jpg",
        "LayingOnTheWall.jpg",
        "RedRing.jpg",
        "Relax.jpg",
        "Stick.jpg",
        "Tongue.jpg",
        "TreeTrunk.jpg"
    ]

const bigNames = [
        "Schöner Herbsttag",
        "Bester Freund",
        "Wir zusammen",
        "Ich komme",
        "Im Gras",
        "Hi There!",
        "Ein ganz kleines Stöckchen",
        "Am See",
        "Voll am Chillen",
        "Im Sommer",
        "Lazy Day",
        "Meins!",
        "Ätsch!",
        "Mein Kunststück"
    ]

    function renderGallery() {

    let babyGalleryContainer = document.getElementById("babyGalleryContainer");
    let bigGalleryContainer = document.getElementById("bigGalleryContainer");


        for (let i = 0; i < babyGalleryImgs.length; i++) {

            let filenameBaby = babyGalleryImgs[i];                  // filename wird hier als Parameter genommen        

            babyGalleryContainer.innerHTML += displayGalleryPhotoBaby (i, filenameBaby); // die TemplateFunktion wird ausgelagert.
        }

        for (let i = 0; i < bigGalleryImgs.length; i++) {
            
            let filenameBig = bigGalleryImgs[i];

            bigGalleryContainer.innerHTML += displayGalleryPhotoBig (i, filenameBig);

            
        }
    }



    function openDialogBaby(i) {
        currentIndex = i;
        let pictureContainer = document.getElementById("pictureContainer");
        let lastNextButtons = document.getElementById("lastNextButtons");
        
        dialogRef.showModal();
        dialogRef.classList.add("opened");

        pictureContainer.innerHTML = `
            <h2>${babyNames[i]}</h2>
            <img class="bigImg" src="img/${babyGalleryImgs[i]}" alt="${babyNames[i]}">
        `;


        lastNextButtons.innerHTML = `
        <button id="prevButton" onclick="prevImgBaby()" class="dialogButton" tabindex="0">
                <img src="./icon/letztes_default.png" alt="vorheriges Bild">
            </button>
            ${displayCounterBaby(i)}
            <button id="nextButton" onclick="nextImgBaby()" class="dialogButton" tabindex="0">
                <img src="./icon/next_default.png" alt="nächstes Bild">
            </button>
        `

    }

    function openDialogBig(i) {
        currentIndex = i;
        let pictureContainer = document.getElementById("pictureContainer");
        let lastNextButtons = document.getElementById("lastNextButtons");

        dialogRef.showModal();
        dialogRef.classList.add("opened");

        pictureContainer.innerHTML = `
            <h2>${bigNames[i]}</h2>
            <img class="bigImg" src="img/${bigGalleryImgs[i]}" alt="${bigNames[i]}">
        `;

        lastNextButtons.innerHTML = `
        <button id="prevButton" onclick="prevImgBig()" class="dialogButton" tabindex="0">
                <img src="./icon/letztes_default.png" alt="vorheriges Bild">
            </button>
            ${displayCounterBig(i)}
            <button id="nextButton" onclick="nextImgBig()" class="dialogButton" tabindex="0">
                <img src="./icon/next_default.png" alt="nächstes Bild">
            </button>
        `

    }

    function closeDialog() {
        dialogRef.close();
        dialogRef.classList.remove("opened");
    }


    let currentIndex = 0;

    function prevImgBaby () {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = babyGalleryImgs.length - 1;
        }

        openDialogBaby(currentIndex);
    }

    function nextImgBaby () {
        currentIndex ++;

        if (currentIndex >= babyGalleryImgs.length) {
            currentIndex = 0;
        }
        openDialogBaby(currentIndex);
    }

    function prevImgBig () {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = bigGalleryImgs.length - 1;
        }

        openDialogBig(currentIndex);
    }

    function nextImgBig () {
        currentIndex ++;

        if (currentIndex >= bigGalleryImgs.length) {
            currentIndex = 0;
        }
        openDialogBig(currentIndex);
    }

    
