$(function() {
    var initMenuAffix = function() {
        var calculateOffset = function() {
            return $('.plglt-index-intro').height()
        }
        $('.plglt-nav').affix({
            offset: { top: calculateOffset }
        });
        $('#plglt-index-nav').height($(".plglt-nav").height());
    };

    var initMenuScrollSpy = function() {
        var calculateOffset = $('.plglt-nav').height()*1.5
        var refreshScrollSpy = function() {
            var data = $('body').data('bs.scrollspy');
            data.options.offset = calculateOffset
            $('body').data('bs.scrollspy', data);
            $('body').scrollspy('refresh');
        };

        $('body').scrollspy({ target: '.plglt-nav', offset: calculateOffset})

        $('.plglt-nav-menu a.js-menu-scroll').bind('click',function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
        });

        $(window).resize(function() {
            refreshScrollSpy();
        });

        $(window).load(function() {
            refreshScrollSpy();
        });

        $('#accordion').on('shown.bs.collapse hidden.bs.collapse', function () {
            refreshScrollSpy();
        });
    };

    var initParallax = function() {
        var $window = $(window);

        $('section[data-type="background"]').each(function(){
            var $scroll = $(this);

            $(window).scroll(function() {
                var yPos = -($window.scrollTop() / $scroll.data('speed'));

                var coords = '50% '+ yPos + 'px';

                $scroll.css({ backgroundPosition: coords });
            });
        });
    };

    var initWorkshopAccordion = function () {

        var removeHash = function() {
            var scrollV, scrollH, loc = window.location;
//            if ("pushState" in history)
//                history.pushState("", document.title, loc.pathname + loc.search);
//            else {
                // Prevent scrolling by storing the page's current scroll offset
                scrollV = document.body.scrollTop;
                scrollH = document.body.scrollLeft;

                loc.hash = "";

                // Restore the scroll offset, should be flicker free
                document.body.scrollTop = scrollV;
                document.body.scrollLeft = scrollH;
//            }
        };

        $('#accordion').on('shown.bs.collapse', function() {
            var expandedPanel = $('.panel-collapse.in');
            var expandedPanelHeading = expandedPanel.siblings('.panel-heading');
            var stickyMenuHeight = $('.plglt-nav.affix').height()*1.1;
            if(expandedPanelHeading.offset().top < $(window).scrollTop()+stickyMenuHeight) {
                $('html, body').animate({scrollTop: expandedPanelHeading.offset().top - stickyMenuHeight - 10}, 250);
            }
        });

        $('#accordion').on('hide.bs.collapse', function() {
          removeHash();
        });

        location.hash && $(location.hash + '.collapse').collapse('show');
    };


    initWorkshopAccordion();

    enquire.register("screen and (min-width: 992px)", function() {
        initParallax();
    });

    enquire.register("screen and (min-width: 768px)", function() {
        initMenuAffix();
        initMenuScrollSpy();

    });

    enquire.register("screen and (max-width: 767px", function(){
        $(".plglt-index-intro").css({'height':$(window).height()});
    });


});
