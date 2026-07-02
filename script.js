document.addEventListener('DOMContentLoaded', () => {
    
    // Explicit targeting elements for clean image updates
    const profileImg = document.getElementById('profile-img');
    const switchBtn = document.getElementById('switch-btn');

    const assetPhoto1 = "photo1.jpg";
    const assetPhoto2 = "photo2.jpg";

    switchBtn.addEventListener('click', () => {
        switchBtn.classList.remove('is-pressed');
        void switchBtn.offsetWidth;
        switchBtn.classList.add('is-pressed');

        window.setTimeout(() => {
            switchBtn.classList.remove('is-pressed');
        }, 180);

        // Strip out base path values to clean verification comparisons safely
        const photoFilename = profileImg.src.split('/').pop();
        
        if (photoFilename === assetPhoto1) {
            profileImg.src = assetPhoto2;
        } else {
            profileImg.src = assetPhoto1;
        }
    });

    // Form confirmation processing event monitoring rules
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
        contactForm.reset();
    });
});