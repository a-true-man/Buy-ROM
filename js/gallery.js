// קוד זה מפעיל את גלריית הלייטבוקס. אין צורך לערוך אותו.

document.addEventListener('DOMContentLoaded', () => {
    const galleryLinks = document.querySelectorAll('.thumbnail-gallery a');
    if (galleryLinks.length === 0) return;

    const galleryItems = Array.from(galleryLinks).map(link => link.href);
    
    galleryLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            createLightbox(index);
        });
    });

    function createLightbox(currentIndex) {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.classList.add('active');
        document.body.appendChild(lightbox);

        const img = document.createElement('img');
        img.src = galleryItems[currentIndex];
        
        const content = document.createElement('div');
        content.classList.add('lightbox-content');
        content.appendChild(img);
        lightbox.appendChild(content);

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = () => lightbox.remove();
        
        const prevBtn = document.createElement('span');
        prevBtn.classList.add('prev');
        prevBtn.innerHTML = '&#10094;';

        const nextBtn = document.createElement('span');
        nextBtn.classList.add('next');
        nextBtn.innerHTML = '&#10095;';
        
        content.appendChild(closeBtn);
        content.appendChild(prevBtn);
        content.appendChild(nextBtn);

        function showImage(index) {
            img.src = galleryItems[index];
            currentIndex = index;
        }

        prevBtn.onclick = () => {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) {
                newIndex = galleryItems.length - 1;
            }
            showImage(newIndex);
        };

        nextBtn.onclick = () => {
            let newIndex = currentIndex + 1;
            if (newIndex >= galleryItems.length) {
                newIndex = 0;
            }
            showImage(newIndex);
        };

        lightbox.addEventListener('click', e => {
            if (e.target === lightbox) {
                lightbox.remove();
            }
        });
        
        // שליטה עם מקלדת
        document.addEventListener('keydown', e => {
            if (!document.getElementById('lightbox')) return;
            if (e.key === 'ArrowRight') nextBtn.click();
            if (e.key === 'ArrowLeft') prevBtn.click();
            if (e.key === 'Escape') closeBtn.click();
        }, { once: true });
    }
});