$(document).ready(function(){
    
    var n = 0;
    
    $('.up').on('click',function(){
        $('.count1').text(++n);
        $('.count2').text(++n);
    });

    $('.down').on('click',function(){
        $('.count1').text(--n);
    });
    
    $('a').on('click',function(){
        var check = $(this).attr('class'); 
        num1 = 0;
        $('.active').text(num1);
        // var check = this.getAttribute('class'); 
        console.log(check);
        
        if ( check == 'a1') {
            $('h1').text('1번 페이지');
            $('.count1').show().addClass('active');
            $('.count2').hide().removeClass('active');
        } else {
            $('h1').text('2번 페이지');            
            $('.count2').show().addClass('active');
            $('.count1').hide().removeClass('active');
        }
    });
    
    var num1 = 0; 
    var num2 = 0;
    
    $('.up1').on('click',function(){
        
        var check = $('.count1').hasClass('active');
        num1 = num1 + 1;
        $('.active').text(num1);
    });
    
    $('.down1').on('click',function(){
        num1 = num1 - 1;
        $('.active').text(num1);
    });
});