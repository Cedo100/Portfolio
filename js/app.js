(function($){

    function flipflap(el){
        if(el.hasClass('is-opened')){
            el.addClass('is-closed').removeClass('is-opened');
        }else{
            el.addClass('is-opened').removeClass('is-closed');
        }
    }
    
    $('.field-input').on('focus', function(){
        $(this).parent().addClass('is-focused has-label');
    });

    $('.field-input').on('blur', function(){

        const parent= $(this).parent();
        
        if($(this).val()== ''){
            parent.removeClass('has-label');
        }
        parent.removeClass('is-focused');
    });

    $('#menu-icon').on('click', function(){
        const t= $(this);

        $('body').toggleClass('isActive');
        
        flipflap(t);
    });

    $('#overlay').on('click', function(){
        const i= $('#menu-icon');

        $('body').removeClass('isActive');

        flipflap(i);
    })
})(jQuery);