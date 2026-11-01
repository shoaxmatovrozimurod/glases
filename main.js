const imgElement = document.getElementById("img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next")


const images = [
    "https://picsum.photos/500/600?random=1",
    "https://picsum.photos/500/600?random=2",
    "https://picsum.photos/500/600?random=3",
]
let index = 0

nextBtn.addEventListener("click" , () => {
    index ++ ;

    if (index >= images.length){
        index = 0 ;
    }
    imgElement.src = images [index];
     
})
prevBtn.addEventListener("click", () => {
    index -- ;

    if (index < 0){
        index = images.length - 1 ;
    }
    imgElement.src = images [index];
})




// const imgElement = document.getElementById("img");
// const prevBtn = document.getElementById("prev");
// const nextBtn = document.getElementById("next");

// const images = [
//     "https://picsum.photos/500/600?random=1",
//     "https://picsum.photos/500/600?random=2",
//     "https://picsum.photos/500/600?random=3",
// ];

// let index = 0;

// function updateImage() {
//     imgElement.style.opacity = "0.4";
//     setTimeout(() => {
//         imgElement.src = images[index];
//         imgElement.style.opacity = "1";
//     }, 150);
// }

// nextBtn.addEventListener("click", () => {
//     index++;
//     if (index >= images.length) {
//         index = 0;
//     }
//     updateImage();
// });

// prevBtn.addEventListener("click", () => {
//     index--;
//     if (index < 0) {
//         index = images.length - 1;
//     }
//     updateImage();
// });