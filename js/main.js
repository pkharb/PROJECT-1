$(document).ready(function(){
    
    
    var allImg = $('.img');
    $('.next').on('click', function(){
        
        var firstImage = $('.first');
        var currentImg = $('.active');
       
       if(currentImg[0] === allImg[allImg.length -1]){
        
            currentImg.removeClass('active').css('z-index', -10);
            firstImage.addClass('active').css('z-index', 10);
       }
       else {
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
            
        }
       }
    })
    $('.prev').on('click', function(){

        var lastImg = $('.first');
        var currentImg = $('.active');
        
        

        if(currentImg[0] === allImg[0]){
            currentImg.removeClass('.active').css('z-index', -10);
            //console.log(allImg[0]);
            lastImg.addClass('.active').css('z-index', 10);
            // debugger
        }
        else {
            // debugger
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    }
    })


        var quotes = $(".quotes");
        //console.log(quotes.length);
        var quoteIndex = -1;
    
        function showNextQuote() {
            ++quoteIndex;
            quotes.eq(quoteIndex % quotes.length)
                .fadeIn(2000)
                .delay(2000)
                .fadeOut(2000, showNextQuote);
        }
    
        showNextQuote();

        var writer = $(".writer");
        var writerIndex = -1;
    
        function showNextWriter() {
            ++writerIndex;
            writer.eq(writerIndex % writer.length)
                .fadeIn(2000)
                .delay(2000)
                .fadeOut(2000, showNextWriter);
        }
    
        showNextWriter();
    
   
});

// RESPONSIVENESS
