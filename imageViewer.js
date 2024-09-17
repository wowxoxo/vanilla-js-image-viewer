document.addEventListener('DOMContentLoaded', function() {
    const viewer = document.getElementById('imageViewer');
    const viewerImage = document.getElementById('viewerImage');
    const closeButton = document.getElementById('closeButton');

    document.querySelectorAll('.viewable-image').forEach(img => {
        img.addEventListener('click', function() {
            viewerImage.src = this.src;
            viewer.classList.add('active');
        });
    });

    closeButton.addEventListener('click', function() {
        viewer.classList.remove('active');
        viewerImage.src = '';
    });

    viewer.addEventListener('click', function(event) {
        if (event.target === viewer) {
            viewer.classList.remove('active');
            viewerImage.src = '';
        }
    });

    viewer.addEventListener('touchstart', function(event) {
        if (event.target === viewer) {
            event.preventDefault();
            viewer.classList.remove('active');
            viewerImage.src = '';
        }
    });
});
