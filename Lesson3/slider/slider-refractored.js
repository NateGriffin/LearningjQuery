(function($){

    //function function_name = Object

   function SliderObj(container,nav) {
        this.container = container;
        this.nav = nav;
        this.imgs = this.container.find('img'); //find all imgs within contaier(slider div)
        this.imgsWidth = this.imgs[0].width; //get the width of the first image
        this.imgsLength = this.imgs.length; //get the number of images
        this.current = 0;
   }

   SliderObj.prototype.transition = function(coords) {
        this.container.animate({
            'margin-left':coords || -(this.current * this.imgsWidth)
        });
            
   };

   //var slider = new Slider($('div.slider'), $('#slider-nav'));
   var slider = new SliderObj($('div.slider'), $('#slider-nav'));

        slider.nav.show().find('button').on('click', function() {
            slider.transition(-1800);

        });

})(jQuery);