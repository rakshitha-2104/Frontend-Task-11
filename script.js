const images = [
    {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000",
        caption: "Beautiful Beach "
    },
    {
        src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000",
        caption: "Palm Island Dubai"
    },
    {
        src: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1000",
        caption: "Cute Panda"
    },
    {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000",
        caption: "Beautiful Himalayas"
    }
];
const galleryImage = document.getElementById("galleryImage");
const imageCaption= document.getElementById("imageCaption");
const imageNumber = document.getElementById("imageNumber");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const playBtn = document.getElementById("playBtn");
const dotsContainer = document.getElementById("dotsContainer");
let currentIndex = 0;
let slideshow = null;
function showImage(index) {
    galleryImage.src=images[index].src;
    imageCaption.textContent=images[index].caption;
    imageNumber.textContent='Image ${index + 1} of ${images.length}';
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}
function createDots() {
    images.forEach((image, index) => {
        const dot = document.createElement("button");
        dot.className="dot";
        dot.setAttribute("aria-label", 'Show image ${index + 1}');
        dot.addEventListener("click", () => {
            currentIndex = index;
            showImage(currentIndex);
        });
        dotsContainer.appendChild(dot);
    });
}
function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}
function previousImages() {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex=images.length - 1;
    }
    showImage(currentIndex);
}
function playSlideshow() {
    if(slideshow !== null) return;
    slideshow = setInterval(nextImage, 3000);
    playBtn.textContent="Pause";
}
function pauseSlideshow() {
    clearInterval(slideshow);
    slideshow = null;
    playBtn.textContent="Play";
}
nextBtn.addEventListener("click", () => {
    nextImage();
});
prevBtn.addEventListener("click",() => {
    previousImage();
});
playBtn.addEventListener("click", () => {
    if(slideshow === null) {
        playSlideshow();
    } else {
        pauseSlideshow();
    }
});
createDots();
showImage(currentIndex);



