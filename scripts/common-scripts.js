;
(function ($) {
    $(function () {

        // Begin input common focus and blur for value.
        $('.main-wrap input:text,.main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="phone"],.main-wrap input[type="number"],.main-wrap input[type="search"],.main-wrap textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = ''
            }
        })

        $('.main-wrap input:text,.main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="phone"],.main-wrap input[type="number"],.main-wrap input[type="search"],.main-wrap textarea').blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
            }
        })
        // Ends input common focus and blur for value.

        $("#splash-loading-content").delay(2000).fadeOut('slow');

        $("div.phone-nav").click(function () {
            $(".nav-wrap ").slideToggle()
        })


        $(".scroll-down").click(function (e) {
            e.preventDefault()
            var pageHalf = $('.main-wrap').outerHeight() / 2
            $("body, html").animate({
                scrollTop: $('body').offset().top + pageHalf
            }, 500)
            $(this).fadeOut()
            $(".scroll-top").fadeIn()

            console.log(pageHalf)
        })

        $(".scroll-top").click(function (e) {
            e.preventDefault()
            $("body, html").animate({
                scrollTop: $('body').offset().top - 0
            }, 500)

            $(this).fadeOut()
            $(".scroll-down").fadeIn()
        })

        $(window).scroll(function () {
            var windowHalf = $(window).outerHeight() / 2
            if ($(window).scrollTop() > windowHalf) {
                $(".scroll-top").show()
                $(".scroll-down").hide()
            } else {
                $(".scroll-top").hide()
                $(".scroll-down").show()
            }
        })



        if ($(".animate").length) {

            var $animation_elements = $('.animate, .addEven');
            var $window = $(window);

            function check_if_in_view() {
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);

                $.each($animation_elements, function () {
                    var $element = $(this);
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top + 100;
                    var element_top_position_mobi = $element.offset().top;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if (element_top_position <= window_bottom_position) {
                        $element.addClass('in-view');
                    } else if (element_top_position_mobi <= window_bottom_position && $(window).width() < 768) {
                        $element.addClass('in-view');
                        console.log('works')

                    } else {
                        $element.removeClass('in-view');
                    }
                });
            }

            $window.on('scroll resize', check_if_in_view);
            $window.trigger('scroll');
        }
        // End animation function
        $(window).on("scroll", function () {
            if ($(".addEven").hasClass("in-view")) {
                // Set count down timer function 
                var sec = 5
                var timer = setInterval(function () {
                    $('#count-down span').text(sec--);
                    if (sec == -1) {
                        //$('#count-down .counter-text').fadeOut('fast');
                        clearInterval(timer);
                    }
                }, 1000);
            }
        })



        var pixelToMove = 15;
        $("#content-details-wrap .content-item").mousemove(function (e) {
            var width = $(this).innerWidth();
            var height = $(this).innerHeight();
            //var newValueX = (e.pageX / width) * pixelToMove;
            //var newValueY = (e.pageY / height) * pixelToMove;

            var offset = $(this).offset();
            var newValueX = ((e.pageX - offset.left) / width) * pixelToMove;
            var newValueY = ((e.pageY - offset.top) / width) * pixelToMove;

            $("#content-details-wrap .content-item-inner").css({
                'transform': 'translate(0, 0)'
            })
            $(this).find(".content-item-inner").css({
                'transform': 'translate(' + newValueX + 'px,' + newValueY + 'px)'
            });
            $(this).find(".link-info").css({
                'margin-left': newValueX + 'px',
                'margin-top': newValueY + 'px'
            });
        });

        $("#content-details-wrap .content-item").mouseleave(function (e) {
            $("#content-details-wrap .content-item-inner").css({
                'transform': 'translate(0, 0)'
            });
            $(this).find(".link-info").css({
                'margin': 0
            });
        });





        //tab function
        $('.tab-item-wrap img').hide();
        $('.tab-item-wrap img').eq(0).show();

        $('.thum-tab-nav img').each(function (i) {
            $(this).click(function () {
                if ($(this).hasClass('active')) return false
                else {
                    $('.thum-tab-nav img').removeClass('active');
                    $(this).addClass('active');
                    $('.tab-item-wrap img').hide().removeClass('show');
                    $('.tab-item-wrap img').eq(i).fadeIn().addClass('800');
                }
            });
        });



        // this nav animation
        $(window).on('scroll', function () {
            var wsclTop = $(this).scrollTop();
            if (wsclTop > 0 && $(window).width() > 767) {
                $('body').addClass('hidden');
            } else {
                $('body').removeClass('hidden');
            }
        });
        
        // addClass to the home page
        if($('.home-content').length){
            $('body').addClass('home-page')
        }





    }) // End ready function.

    $(window).load(function () {
        // Begin common slider
        if ($('div.slider-wrap').length == 0) return false

        $('div.slider-wrap').flexslider({
            animation: "fade",
            slideshow: true,
            directionNav: false,
            controlNav: false,
            slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,
            useCSS: false,
            start: function (slider) {
                //$('body').removeClass('loading');

            },
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function (slider) {

            }
        })

    })


})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})