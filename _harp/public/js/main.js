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

        $('.plglt-nav-menu a').bind('click',function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
        });

        $(window).resize(function() {
            refreshScrollSpy();
        });
        
        $(window).load(function() {
            refreshScrollSpy();
        })
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

    initMenuAffix();
    initMenuScrollSpy();
    initParallax();
});
