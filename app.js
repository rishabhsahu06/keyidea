function showDetails(type) {
    // Hide all detail items
    const details = document.querySelectorAll('.detail-item');
    details.forEach(detail => {
        detail.classList.add('hidden');
    });

    // Show the selected detail item
    const selectedDetail = document.getElementById(type);
    selectedDetail.classList.remove('hidden');

    // Update the title based on the selected type
    const titles = {
        vintage: 'Vintage & Antique',
        hidden: 'Hidden Halo',
        pave: 'Pave'
    };
    document.getElementById('ring-title').textContent = titles[type];
}
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});