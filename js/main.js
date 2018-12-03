$(document).ready(function(){
    // SLIDER
    var speed = 500;           //speed of fade
    var autoSlide = true;       //auto slider option
    var autoslide_speed = 4000; //auto slider speed


    // add initial active class
    $('.slide').first().addClass('active');

    // hide all slides
    $('.slide').hide();

    // show first slide
    $('.active').show();

    $('#next').on('click', function(){
        $('.active').removeClass('active').addClass('prevActive');

        if($('.prevActive').is(':last-child')){
            $('.slide').first().addClass('active');
        }
        else{
            $('.prevActive').next().addClass('active');
        }
        $('.prevActive').removeClass('prevActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    
    });

    $('#prev').on('click', function(){
        $('.active').removeClass('active').addClass('prevActive');
        //console.log($(".prevActive"));

        if($('.prevActive').is(':first-child')){
            $('.slide').last().addClass('active');
        }
        else{
            $('.prevActive').prev().addClass('active');
        }
        $('.prevActive').removeClass('prevActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    
    });

    if(autoSlide === true){
        setInterval(function(){
            $('.active').removeClass('active').addClass('prevActive');

        if($('.prevActive').is(':last-child')){
            $('.slide').first().addClass('active');
        }
        else{
            $('.prevActive').next().addClass('active');
        }
        $('.prevActive').removeClass('prevActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
        }, autoslide_speed);
    }


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
