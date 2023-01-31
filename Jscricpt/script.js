 var  alka = "Maecenas fermentum tortor id fringilla molestie. In hac habitasse Maecenas fermentum tortor id fringilla molestie. In hac habitasse Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulum id Maecenas fermentum tortor id fringilla molestie";
var  thumma = "Sheri, did the mortgage for the purchase of my home in 2017. He  explained the process to me up front. He got the mortgage approved  on time and met the closing date set by the sellers. Very efficient,  communication was very prompt.";
var  naty = "Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulum id Maecenas fermentum tortor id fringilla molestie. In hac habitasse Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis";
var  kim = "Maecenas fermentum tortor id fringilla molestie. In hac habitasse dictumst.Morbi maximus lobortis ipsum, ut blandit augue ullamcorper vitae convallismassa. Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus..";
var  farai = "Maecenas fermentum tortor id fringilla molestie. In hac habitasse   Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulumidda";

$(".client .alka").click(function(){
    $(".client p:first").html(alka);
    $(".client p:last").html("Kim Willams");

    $(".client .alka").css({height :"130px"});
    $(".client .thumma").css({height :"73px"});
    $(".client .naty").css({height :"73px"});
    $(".client .kim").css({height :"73px"});
    $(".client .farai").css({height :"73px"});
    
});

$(".client .thumma").click(function(){
    $(".client p:first").html(thumma);
    $(".client p:last").html("Thumma Sandeep");

    $(".client .alka").css({height :"73px"});
    $(".client .thumma").css({height :"130px"});
    $(".client .naty").css({height :"73px"});
    $(".client .kim").css({height :"73px"});
    $(".client .farai").css({height :"73px"});
    
});

$(".client .kim").click(function(){
    $(".client p:first").html(kim);
    $(".client p:last").html("Mary Johns");

    $(".client .alka").css({height :"73px"});
    $(".client .thumma").css({height :"73px"});
    $(".client .naty").css({height :"73px"});
    $(".client .kim").css({height :"130px"});
    $(".client .farai").css({height :"73px"});
    
});

$(".client .farai ").click(function(){
    $(".client p:first").html(farai);
    $(".client p:last").html("Shantel Ways");

    $(".client .alka").css({height :"73px"});
    $(".client .thumma").css({height :"73px"});
    $(".client .naty").css({height :"73px"});
    $(".client .kim").css({height :"73px"});
    $(".client .farai").css({height :"130px"});
    
});

$(".client .naty").click(function(){
    $(".client p:first").html(naty);
    $(".client p:last").html("David Mann");

    $(".client .alka").css({height :"80px"});
    $(".client .thumma").css({height :"80px"});
    $(".client .naty").css({height :"130px"});
    $(".client .kim").css({height :"80px"});
    $(".client .farai").css({height :"80px"});
    
});

//Showing the first tab by default
$('.tabs-stage .tab-content').hide();
$('.tabs-stage .tab-content:first').show();
$('.tabs-nav li:first').addClass('tab-active');

//Change tab class and display content
$('.tabs-nav a').on('click',function(event){
event.preventDefault();
$('.tabs-nav li').removeClass('tab-active');
$(this).parent().addClass('tab-active');
$('.tabs-stage .tab-content').hide();
$($(this).attr('href')).show();

});


$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now)) .append('+')   ;
        }
    });
});



$(".menu").click(function() {
    
      $(".menu").toggleClass("active");
    
      $(".navbar-menu").toggleClass("active");
    
    });
    












