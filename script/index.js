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

