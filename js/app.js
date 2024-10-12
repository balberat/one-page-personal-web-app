$(document).ready(function () {
    var sectionList = ['main-section', 'about-me', 'resume', 'portfolio', 'contact']
    var activeSection = sectionList[0];
    function init() {
        setInterval(changeTitle, 4000);
        hideSections()
        setCarousels()
        particlesJS.load('particles-js', './node_modules/particles.js/demo/particles.json', function () { });
    }
    init();
    function hideSections() {
        sectionList.forEach(section => {
            $('#' + section).hide()
        });
        $('#' + activeSection).css("opacity", 1).show()
    }
    function setCarousels() {
        $("#testimonials .owl-carousel").owlCarousel({
            items: 2,
            margin: 40,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                650: {
                    items: 2,
                    nav: false
                },
            }
        });
        $("#clients .owl-carousel").owlCarousel({
            items: 5,
            margin: 40,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 3,
                    nav: false
                },
                650: {
                    items: 5,
                    nav: false
                },
            }
        });
    }
    function showNextSection() {
        var activeIndex = sectionList.indexOf(activeSection);
        var $activeSectionElement = $('#' + activeSection)
        if (activeIndex !== -1 && activeIndex < sectionList.length - 1) {
            activeSection = sectionList[activeIndex + 1];
        } else if (activeIndex === sectionList.length - 1) {
            activeSection = sectionList[0];
        }

        $('#nav #' + activeSection).addClass("active")
        $('#nav #' + $activeSectionElement.attr('id')).removeClass("active")


        $('#side-nav-section-list a').removeClass("active")
        $('#side-nav-section-list a[id=' + activeSection + ']').addClass("active")

        $activeSectionElement.animate({
            opacity: 0
        }, function () {
            $activeSectionElement.hide()
            $('#' + activeSection).css("opacity", "0")
            $('#' + activeSection).show()
            $('#' + activeSection).animate({
                opacity: 1
            });

        }
        );
    }

    function showPrevSection() {
        var activeIndex = sectionList.indexOf(activeSection);
        var $activeSectionElement = $('#' + activeSection)
        if (activeIndex !== -1 && activeIndex !== 0) {
            activeSection = sectionList[activeIndex - 1];
        } else if (activeIndex === 0) {
            activeSection = sectionList[sectionList.length - 1];
        }

        $('#nav #' + activeSection).addClass("active")
        $('#nav #' + $activeSectionElement.attr('id')).removeClass("active")

        $('#side-nav-section-list a').removeClass("active")
        $('#side-nav-section-list a[id=' + activeSection + ']').addClass("active")


        $activeSectionElement.animate({
            opacity: 0
        }, function () {
            $activeSectionElement.hide()
            $('#' + activeSection).css("opacity", "0")
            $('#' + activeSection).show()
            $('#' + activeSection).animate({
                opacity: 1
            });

        }
        );
    }

    function changeTitle() {
        var $titleText = $('#title-text');
        var activeTitle = $titleText.text();
        var titleList = ["Mobile Developer", "Frontend Developer", "Web Designer", "Backend Developer"];
        var activeIndex = titleList.indexOf(activeTitle);
        if (activeIndex !== -1 && activeIndex < titleList.length - 1) {
            var nextElement = titleList[activeIndex + 1];
        } else if (activeIndex === titleList.length - 1) {
            var nextElement = titleList[0];
        }
        $titleText.animate({
            fontSize: "10px",
            opacity: 0
        }, function () {
            $titleText.text(nextElement).css({
                fontSize: "10px",
                opacity: 0
            }).animate({
                fontSize: "20px",
                opacity: 1
            });
        });
    }

    $(".nav-item").hover(
        function () {
            $(this).find("#nav-title").css("opacity", 1)
                .show()
                .animate({ left: -80 }, 300);
        },
        function () {
            $(this).find("#nav-title")
                .animate({ left: -50, opacity: 0.1 }, 300, function () {
                    $(this).hide();
                });
        }
    );

    $(".nav-link").on("click", function () {
        var clickedId = $(this).attr("id");
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        activeSection = clickedId;
        hideSections()

    });

    $("#side-nav-section-list a").on("click", function () {
        var clickedId = $(this).attr("id");
        $('#side-nav-section-list #' + activeSection).toggleClass("active")
        activeSection = clickedId;
        $('#side-nav-section-list #' + activeSection).toggleClass("active")
        $('.side-nav').toggleClass("open")
        hideSections()
    });


    $('#next-button').click(function () {
        showNextSection()
    });
    $('#prev-button').click(function () {
        showPrevSection()
    });
    $('#tstm-next-button').click(function (e) {
        e.preventDefault();
        $("#testimonials .owl-carousel").trigger('next.owl.carousel');
    });
    $('#tstm-prev-button').click(function (e) {
        e.preventDefault();
        $("#testimonials .owl-carousel").trigger('prev.owl.carousel');
    });
    $('#clients-next-button').click(function (e) {
        e.preventDefault();
        $("#clients .owl-carousel").trigger('next.owl.carousel');
    });
    $('#clients-prev-button').click(function (e) {
        e.preventDefault();
        $("#clients .owl-carousel").trigger('prev.owl.carousel');
    });

    $('#side-nav-btn').click(function (e) {
        e.preventDefault()
        $('.side-nav').toggleClass("open")
    })

    $('.filter-link').click(function (e) {
        e.preventDefault();

        $('.filter-link').removeClass('active');
        $(this).addClass('active');

        var filterValue = $(this).data('filter');


        if (filterValue === 'all') {
            $('#portfolio #portfolio-item').show();
        } else {
            $('#portfolio #portfolio-item').hide();
            $('#portfolio #portfolio-item[data-category="' + filterValue + '"]').show();
        }
    });

});