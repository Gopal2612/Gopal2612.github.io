$( document ).ready(function() {
		$(window).scroll(function() { 
		    var Scroll = $(window).scrollTop() + 1,
						SectionOneOffset = $('#profile').offset().top, 
				SectionTwoOffset = $('#skills').offset().top,
				SectionThreeOffset = $('#education').offset().top,
				SectionFourOffset = $('#projects').offset().top,
				SectionFiveOffset = $('#contact').offset().top; 

		    if (Scroll >= SectionOneOffset) {
		        $(".nav-item-1").addClass("active");
		    } else {
		        $(".nav-item-1").removeClass("active");
		    }
				if (Scroll >= SectionTwoOffset) {
		        $(".nav-item-2").addClass("active");
						$(".nav-item-1").removeClass("active");
		    } else { 
		        $(".nav-item-2").removeClass("active");
		    }
			if (Scroll >= SectionThreeOffset) {
		        $(".nav-item-3").addClass("active");
						$(".nav-item-2").removeClass("active");
		    } else {
		        $(".nav-item-3").removeClass("active"); 
		    }
			if (Scroll >= SectionFourOffset) { 
		        $(".nav-item-4").addClass("active"); 
						$(".nav-item-3").removeClass("active"); 
		    } else { 
		        $(".nav-item-4").removeClass("active");
		    }
			if (Scroll >= SectionFiveOffset) {
		        $(".nav-item-5").addClass("active");
						$(".nav-item-4").removeClass("active"); 
		    } else { 
		        $(".nav-item-5").removeClass("active");
		    }
		});
});