const dialogRef = document.getElementById("dialog");
let currentIndex = 0;


const babyGalleryImgs = [
  "BabyWithMe.jpg",
  "Basket.jpg",
  "BigBed.jpg",
  "Newborn.jpg",
];


const babyNames = [
  "Baby-Paco mit mir",
  "Pacos Lieblingsort",
  "Pacos Bettchen",
  "Frisch geschlüpft",
];


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
  "TreeTrunk.jpg",
];


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
  "Mein Kunststück",
];


function renderGallery() {
  let babyGalleryContainer = document.getElementById("babyGalleryContainer");
  let bigGalleryContainer = document.getElementById("bigGalleryContainer");

  for (let i = 0; i < babyGalleryImgs.length; i++) {
    let filenameBaby = babyGalleryImgs[i]; // filename wird hier als Parameter genommen

    babyGalleryContainer.innerHTML += displayGalleryPhotoBaby(i, filenameBaby, babyGalleryImgs); // die TemplateFunktion wird ausgelagert.
  }

  for (let i = 0; i < bigGalleryImgs.length; i++) {
    let filenameBig = bigGalleryImgs[i];

    bigGalleryContainer.innerHTML += displayGalleryPhotoBig(i, filenameBig, bigGalleryImgs);
  }
}


function openDialog(i, namesArray, pictureArray) {
  currentIndex = i;
  let pictureContainer = document.getElementById("pictureContainer");
  let lastNextButtons = document.getElementById("lastNextButtons");

  dialogRef.showModal();
  dialogRef.classList.add("opened");

  pictureContainer.innerHTML = displayPictureContainer(i, namesArray, pictureArray);

  let arrayname = [];
  if (pictureArray == babyGalleryImgs) {
    arrayname = "babyGalleryImgs";
  } else {
    arrayname = "bigGalleryImgs";
  }
  lastNextButtons.innerHTML = displayLastNextButtons(i, arrayname);
  
}


function closeDialog() {
  dialogRef.close();
  dialogRef.classList.remove("opened");
}


function prevImg(arrayName) {
  currentIndex--;
  let array = [];

  if (arrayName == "babyGalleryImgs") {
    array = babyGalleryImgs
  } else if (arrayName == "bigGalleryImgs") {
    array = bigGalleryImgs
  }

  if (currentIndex < 0) {
  currentIndex = array.length - 1;
  }

  if (arrayName == "babyGalleryImgs") {
  openDialog(currentIndex, babyNames, babyGalleryImgs);
} else {
  openDialog(currentIndex, bigNames, bigGalleryImgs);
}
}


function nextImg(arrayName) {
  let array = []
  if (arrayName == "babyGalleryImgs") {
    array = babyGalleryImgs
  } else if (arrayName == "bigGalleryImgs") {
    array = bigGalleryImgs
  }
  
  currentIndex++;

  if (currentIndex >= array.length) {
    currentIndex = 0;
  }

  if (arrayName == "babyGalleryImgs") {
  openDialog(currentIndex, babyNames, babyGalleryImgs);
  } else {
  openDialog(currentIndex, bigNames, bigGalleryImgs);
  };
}

