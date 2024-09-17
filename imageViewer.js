document.addEventListener('DOMContentLoaded', function() {
    const viewer = document.getElementById('imageViewer');
    const viewerImage = document.getElementById('viewerImage');
    const closeButton = document.getElementById('closeButton');

    document.querySelectorAll('.viewable-image').forEach(img => {
        img.addEventListener('click', function() {
            viewerImage.src = this.src;
            viewer.style.display = 'flex';
            setTimeout(() => {
                viewer.classList.add('active');
            }, 10); // Small delay to ensure the image is loaded before animating
        });
    });

    closeButton.addEventListener('click', function() {
        viewer.classList.remove('active');
        setTimeout(() => {
            viewer.style.display = 'none';
            viewerImage.src = '';
        }, 300); // Match the transition duration
    });

    viewer.addEventListener('click', function(event) {
        if (event.target === viewer) {
            viewer.classList.remove('active');
            setTimeout(() => {
                viewer.style.display = 'none';
                viewerImage.src = '';
            }, 300); // Match the transition duration
        }
    });

    viewer.addEventListener('touchstart', function(event) {
        if (event.target === viewer) {
            event.preventDefault();
            viewer.classList.remove('active');
            setTimeout(() => {
                viewer.style.display = 'none';
                viewerImage.src = '';
            }, 300); // Match the transition duration
        }
    });
});
