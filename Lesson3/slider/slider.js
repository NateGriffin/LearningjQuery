(function($) {

    var sliderUl = $('div.slider-container').children('ul'),
        imgs = sliderUl.find('img'),
        imgsWidth = imgs[0].width,
        imgsLength = imgs.length,
        current = 1,
        totalImgsWidth = imgsLength * imgsWidth;

    $('#slider-nav').show().find('button').on('click', function() {
        var direction = $(this).data('dir'),
            loc = imgsWidth;
        //Update current value

        if (direction === 'next') {
            current += 1;

        } else {
            current -= 1;
        }

        //If first image
        if (current === 0) {
            current = imgsLength;
            loc = totalImgsWidth - imgsWidth;
            direction = 'next';
        } else if (current - 1 === imgsLength) {
        	current = 1;
        	loc = 0;

        }
        transition(sliderUl, loc, direction);
    });

    function transition(container, loc, direction) {
        var unit;
        if (direction && loc !== 0) {
            unit = (direction === 'next') ? '-=' : '+=';
        }
        container.animate({
            'margin-left': unit ? (unit + loc) : loc

        });

    }

})(jQuery);