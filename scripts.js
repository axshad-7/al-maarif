document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});
function duplicateImages() {
    const slider = document.getElementById('slider');
    const images = slider.querySelectorAll('.slider-image');
    images.forEach(image => {
        const clone = image.cloneNode(true);
        slider.appendChild(clone);
    });
}

window.onload = function() {
    duplicateImages();
};