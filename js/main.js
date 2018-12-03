$(document).ready(function(){
   
    // SLIDER
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
    
    var speed = 500;           //speed of fade
    var autoSlide = true;       //auto slider option
    var autoslide_speed = 4000; //auto slider speed
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

    // var mySlides = $('.slide');
    // var slideIndex = -1;
    // console.log(mySlides);
    // function showNextSlide() {
    //     console.log(quoteIndex);
    //     ++slideIndex;
    //     console.log(quoteIndex);
    //     mySlides.eq(slideIndex % mySlides.length)
    //         .fadeIn(2000)
    //         .delay(2000)
    //         .fadeOut(2000, showNextSlide);
    // }
    // showNextSlide();

    // TESTIMONIALS
    // TESTIMONIALS
    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        console.log(quoteIndex);
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

    // FORM VALIDATION
    // FORM VALIDATION

    // VALIDATE NAME

    // $(':submit').on('click', function(){
    //     var inputName = $('#fname').text();
    //     console.log(inputName);
    // if(inputName === ""){
    //     alert("name");
    // }

    // var inputEmail = $('#femail').text();

    // if(inputEmail === ""){
    //     alert("email");
    // }
    // if(inputEmail.filter(xx => xx !== "@")){
    //     console.log("enter correct Email");
    // }

    // var inputPhone = $('#fphone').text();
    // if(inputPhone === ""){
    //     alert("phone");
    // }
    // })


    
});

// RESPONSIVENESS
