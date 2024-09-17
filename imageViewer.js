document.addEventListener('DOMContentLoaded', function() {
    const viewer = document.getElementById('imageViewer');
    const viewerImage = document.getElementById('viewerImage');

    document.querySelectorAll('.viewable-image').forEach(img => {
        img.addEventListener('click', function() {
            viewerImage.src = this.src;
            viewer.style.display = 'flex';
        });
    });

    viewer.addEventListener('click', function() {
        viewer.style.display = 'none';
        viewerImage.src = '';
    });

    viewer.addEventListener('touchstart', function(event) {
        event.preventDefault();
        viewer.style.display = 'none';
        viewerImage.src = '';
    });
});
