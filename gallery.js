document.addEventListener('DOMContentLoaded', (event) => {
    const photoContainers = document.querySelectorAll('.photo-container');

    photoContainers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            const button = container.querySelector('.know-more');
            button.style.display = 'block';
            const caption = container.querySelector('.caption');
            caption.style.bottom = '15px';
        });

        container.addEventListener('mouseleave', () => {
            const button = container.querySelector('.know-more');
            button.style.display = 'none';
            const caption = container.querySelector('.caption');
            caption.style.bottom = '0';
        });
    });
});

