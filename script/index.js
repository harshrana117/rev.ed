$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".navbar").addClass("active");
    }
    else {
        $(".navbar").removeClass("active");
    }
});





document.querySelector(".burger").addEventListener("click",function(){
    let burger=document.querySelector(".burger");
    if(burger.classList.contains("burger-effect")){
    	burger.classList.remove("burger-effect");
    }
    else{
        burger.classList.add("burger-effect");
    }


	let nav=document.querySelector(".not-nested");
    if(nav.style.left=="0vw"){
    	nav.style.left="-100vw";
    }
    else{
    	nav.style.left="0vw";
    }
	
	
});




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    

    if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
  });
}

