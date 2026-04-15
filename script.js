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

    babyGalleryContainer.innerHTML += displayGalleryPhotoBaby(i, filenameBaby); // die TemplateFunktion wird ausgelagert.
  }

  for (let i = 0; i < bigGalleryImgs.length; i++) {
    let filenameBig = bigGalleryImgs[i];

    bigGalleryContainer.innerHTML += displayGalleryPhotoBig(i, filenameBig);
  }
}


function openDialogBaby(i) {
  currentIndex = i;
  let pictureContainer = document.getElementById("pictureContainer");
  let lastNextButtons = document.getElementById("lastNextButtons");

  dialogRef.showModal();
  dialogRef.classList.add("opened");

  pictureContainer.innerHTML = displayPictureContainerBaby(i);

  lastNextButtons.innerHTML = displayLastNextButtonsBaby(i);
  
}


function openDialogBig(i) {
  currentIndex = i;
  let pictureContainer = document.getElementById("pictureContainer");
  let lastNextButtons = document.getElementById("lastNextButtons");

  dialogRef.showModal();
  dialogRef.classList.add("opened");

  pictureContainer.innerHTML = displayPictureContainerBig(i);

  lastNextButtons.innerHTML = displayLastNextButtonsBig(i);
}


function closeDialog() {
  dialogRef.close();
  dialogRef.classList.remove("opened");
}


function prevImgBaby() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = babyGalleryImgs.length - 1;
  }

  openDialogBaby(currentIndex);
}


function nextImgBaby() {
  currentIndex++;

  if (currentIndex >= babyGalleryImgs.length) {
    currentIndex = 0;
  }
  openDialogBaby(currentIndex);
}


function prevImgBig() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = bigGalleryImgs.length - 1;
  }

  openDialogBig(currentIndex);
}


function nextImgBig() {
  currentIndex++;

  if (currentIndex >= bigGalleryImgs.length) {
    currentIndex = 0;
  }
  openDialogBig(currentIndex);
}
