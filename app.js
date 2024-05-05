		
		var menuBTn=document.querySelector("#menu-bar);
		var navbar = document.querySelector(".navbar");
		menuBtn.onClick = () => {
			menuBTn.classList.toggle("fa-times");
			navBar.classList.toggle("active");
		};
		window.onscroll=()=>{
			menuBTn.classList.remove("fa-times");
			navBar.classList.remove("active");
			themeToggler.classList.remove("active");
		}
		
		
		var themeToggler= document.querySelector(".theme-toggler");
		var themeBtn = document.querySelector(".toggle-btn");
		themeBtn.oneclick = () => {
				themeToggler.classList.toggle("active");
		};
		document.querySelectorAll(".theme-toggler").foreach(
		(btn) =>{btn.onClick=() =>{
			let color=btn.style.background;
			document.querySelector(":root").style.setProperty("--theme-color", color)
			
		};
		});
	var swiper = new swiper(".review-slider",{
		slidePerView:1,
		grabcursor: true,
		loop:true,
		spaceBetween:10,
		breakpoints:{
			0:{
			slidePerView:1,},
			700: {
				slidesPerView:2,
			},
			1050:{
				slidesPerView:3,
			},
		},
		autoplay:{
			delay:5000,
			disableOnInteraction:false,
		}
	});
	
  



		
