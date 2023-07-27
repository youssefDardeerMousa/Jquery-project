$("#menue").css("left","5%");
$("#menue").click(function(){
    console.log(x);
    $("#menue p").text("close")
    if($("#links").css("left")!="0px"){
        $("#links").animate({left:`0`},"slow");
        $("#menue").animate({left:"25%"});
        $("#links").css("left","0px");
        
      
    }
       else{
        $("#links").animate({left:`-300`},"slow");
        $("#menue").animate({left:"5%"});
        $("#links").css("left",`-300`);
        $("#menue p").text("open")
       } 
})
$("#close").click(function(){
        $("#links").animate({left:`-367.898px`})
        $("#menue").animate({left:"5%"});
        $("#menue p").text("open");
        $("#links").animate({left:`-367.898px`},"slow")
    
        $("#menue").animate({left:"5%"},"slow")
    })

    $(".singer-one h2").click(function(){
        $(".singer-two p").slideUp();
        $(".singer-three p").slideUp();
        $(".singer-four p").slideUp()

        if($(".singer-one p").css("display")=="none"){
            $(".singer-one p").slideDown()
        }
        else{
            $(".singer-one p").slideUp()
        }
        
    })

    $(".singer-two h2").click(function(){
        $(".singer-one p").slideUp();
        $(".singer-three p").slideUp();
        $(".singer-four p").slideUp()
        if($(".singer-two p").css("display")=="none"){
            $(".singer-two p").slideDown()
        }
        else {
            $(".singer-two p").slideUp()
        
        }
      
    })
    $(".singer-three h2").click(function(){
        $(".singer-one p").slideUp();
        $(".singer-two p").slideUp();
        $(".singer-four p").slideUp()
      
        if($(".singer-three p").css("display")=="none"){
            $(".singer-three p").slideDown()
        }
        else {
            $(".singer-three p").slideUp()
        
        }
    })

    $(".singer-four h2").click(function(){
        $(".singer-two p").slideUp();
        $(".singer-one p").slideUp();
        $(".singer-three p").slideUp();
        if($(".singer-four p").css("display")=="none"){
            $(".singer-four p").slideDown()
        }

        else {
            $(".singer-four p").slideUp()
        }
        
    })
    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 250) % 60);
        const minutes = Math.floor((total / 250 / 60) % 60);
        const hours = Math.floor((total / (250 * 60 * 60)) % 24);
        const days = Math.floor(total / (250 * 60 * 60 * 24));
        
        return {
          total,
          days,
          hours,
          minutes,
          seconds
        };
      }
      
      function initializeClock(id, endtime) {
        const clock = document.getElementById(id);
        const daysSpan = clock.querySelector('.days');
        const hoursSpan = clock.querySelector('.hours');
        const minutesSpan = clock.querySelector('.minutes');
        const secondsSpan = clock.querySelector('.seconds');
      
        function updateClock() {
          const t = getTimeRemaining(endtime);
      
          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }
      
        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
      }
      
      const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
      initializeClock('clockdiv', deadline);
      var x=100;
      var textarea=document.querySelector(".textarea")

      $("#condition").text(`100` + " Characyer Reamining");

      $(".textarea").keydown(function(e){
     
       
      
        if(x==0){
           
            $("#condition").text(` your available character finished ` + " Characyer Reamining");
        }
    
        if(e.key=="Backspace" && x<100){
            
            x++;
            $("#condition").text(`${x}` + " Characyer Reamining");
        }
           
    
        if(x<=100 && e.key!="Backspace" && x>0){
            x--;
            $("#condition").text(`${x}` + " Characyer Reamining");
        }
        
      })

var detials=$("a").eq(2).attr("href");
var home=$("a").eq(0).attr("href");
var Duration=$("a").eq(1).attr("href");
var Contact=$("a").eq(3).attr("href");
var home1=$(home).offset().top;
var detials1=$(detials).offset().top;
var Duration1=$(Duration).offset().top;
var Contact1=$(Contact).offset().top;
$("a").eq(2).click(function(){
    $("html,body").animate({scrollTop:`${detials1-300}`});
})

$("a").eq(1).click(function(){
    $("html,body").animate({scrollTop:`${Duration1-200}`});
    
})
$("a").eq(3).click(function(){
    $("html,body").animate({scrollTop:`${Contact1+20}`});
    
})
$("a").eq(0).click(function(){
    $("html,body").animate({scrollTop:`${home1}`});
    
})


