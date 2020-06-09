(function ($) {
    $(function () {
        var popupWrapper = $('#popup-wrap');
        var popUp = $('#pop-up');
        
        $(".popup-close").click(function(e){
            e.preventDefault();
            
            TweenMax.to(popupWrapper, 0.5, {
                y: '100%',
                ease: Sine.easeOut
            });
            
            TweenMax.to(popUp, .8, {
                css: {
                    opacity: 0,
                },
                delay: .5,
                ease: Sine.easeOut,
                onComplete:function(){
                    popUp.hide();
                }
            });
        });
                        
        $('#popup-wrap').draggable({
            handle: ".drag-btn",
            axis: "y",
            revert: true,
            drag: function (e, ui) {
                
            },
            revert: function (e, ui) {            
                TweenMax.to(popupWrapper, 0.3, {
                    y: '100%',
                    ease: Sine.easeOut
                });

                TweenMax.to(popUp, .8, {
                    css: {
                        opacity: 0,
                    },
                    delay: .5,
                    ease: Sine.easeOut,
                    onComplete:function(){
                        popUp.hide();
                    }
                });
                return !e;
            }
        });
    });
})(jQuery);