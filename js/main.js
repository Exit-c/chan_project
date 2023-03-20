/* popup */
$(document).ready(function(){
    function setCookie(name, value, expiredays) {  
        const todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    };
    
    $('.linebox .today').click(function(){
        setCookie('maindiv','done',1);
        
        $('.popup').fadeOut('fast');
    });
    
    $('.linebox .popupclose').click(function(){
        $('.popup').fadeOut('fast');
    });
    
    cookiedata = document.cookie; 
    if(cookiedata. indexOf('maindiv=done') < 0 ){
        $('.popup').css('display','block');
    }else{
        $('.popup').css('display','none');
    }
});

