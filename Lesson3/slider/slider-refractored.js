(function($) {

    //function function_name = Object

    var SliderObj = function(container, nav) {
        this.container = container;
        this.nav = nav;
        this.imgs = this.container.find('img'); //find all imgs within contaier(slider div)
        this.imgsWidth = this.imgs[0].width; //get the width of the first image
        this.imgsLength = this.imgs.length; //get the number of images
        this.current = 0;
    };

    SliderObj.prototype.transition = function(coords) {
        this.container.animate({
            'margin-left': coords || -(this.current * this.imgsWidth)
        });

    };


    SliderObj.prototype.setCurrent = function(dir) {
        (dir === 'next') ? this.current++ : this.current--;
        this.current = (this.current < 0) ? this.imgsLength - 1 : this.current % this.imgsLength;
        return this.current;
    };

    //var slider = new Slider($('div.slider'), $('#slider-nav'));
    var slider = new SliderObj($('div.slider-container'), $('#slider-nav'));

    slider.nav.show().find('button').on('click', function() {
        slider.setCurrent($(this).data('dir'));
        slider.transition();

    });

})(jQuery);