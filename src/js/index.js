import '/style/index.scss';
import AppendImages from './AppendGallery';
const trackerElem = $('[a-tracker]'); // Navigation bar Elems
const headerElem = $('[a-header]'); //Header Elem Selector
const hambuger = document.querySelector('.hambuger');
const listElem = document.querySelector('[a-nav]');

$(window).on('load', e => {
    AppendImages();
    const wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    });
    wow.init();

    trackerElem.bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior
        const THIS = $(this);
        // const target = $(THIS.attr('a-tracker'));
        const target = THIS.attr('a-tracker');
        if (window.innerWidth < 570) {
            listElem.classList.toggle('active');
        }
        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body')
            .stop()
            .animate(
                {
                    scrollTop: $(`[a-${target}]`).offset().top
                },
                600,
                function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
                }
            );

        return false;
    });
});

// For Displaying the hamburger in mobile view
(e => {
    hambuger.addEventListener('click', e => {
        e.preventDefault();
        listElem.classList.toggle('active');
    });
})();

// $(document).on('scroll', e => {
//     if ($('[a-aboutus]').offset().top - $(window).scrollTop() <= 0) {
//         headerElem
//             .addClass('active')
//             .parent()
//             .addClass('active');
//     } else {
//         headerElem
//             .removeClass('active')
//             .parent()
//             .removeClass('active');
//     }

//     trackerElem.each(function() {
//         const scrollPos = $(document).scrollTop();
//         const currLink = $(this);
//         const refElement = $(currLink.attr('a-tracker'));
//         if (
//             refElement.position().top <= scrollPos &&
//             refElement.position().top + refElement.height() > scrollPos
//         ) {
//             refElement.hasClass('active').removeClass('active');
//             currLink.addClass('active');
//         } else {
//             currLink.removeClass('active');
//         }
//     });
// });
