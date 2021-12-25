var images = document.querySelectorAll('.image img')
var gallery = document.querySelector('.gallery')
var galleryImage = document.querySelector('.gallery__img img')
var prev = document.querySelector('.gallery__prev-btn')
var next = document.querySelector('.gallery__next-btn')
var close = document.querySelector('.gallery__close')

function showGallery() {
    gallery.classList.add('show')
    galleryImage.src = images[currenIndex].src
}

images.forEach((image, index) => {
    image.addEventListener('click', function() {
        currenIndex = index
        showGallery()
    })
});

prev.addEventListener('click', function() {
    if (currenIndex == 0)
        currenIndex = images.length - 1
    else
        currenIndex--
    showGallery()
})

next.addEventListener('click', function() {
    if (currenIndex == images.length - 1)
        currenIndex = 0
    else
        currenIndex++
    showGallery()
})

close.addEventListener('click', function() {
    gallery.classList.remove('show')
})