$(document).ready(function() {
    
	$('.sliders').slick({
		autplay: true,
		prevArrow : `
			<button type="button" class="slider-arrow-left">
				<i class="fa-solid fa-chevron-left"></i>
			</button>
		`,
		nextArrow : `
			<button type="button" class="slider-arrow-right">
				<i class="fa-solid fa-chevron-right"></i>
			</button>
		`
	});
	
	
});

$('#popularProducts').owlCarousel({
	loop: true,
	margin: 3,
	nav: true,
	dots: false,
	items: 6,
})
$('#popularProducts2').owlCarousel({
	loop: true,
	margin: 3,
	nav: true,
	dots: false,
	items: 4,
})




// $('#popularProducts').slick({
// 	dots: false,
// 	infinite: true,
// 	speed: 300,
// 	prevArrow : `
// 		<button type="button" class="slider-arrow-left">
// 			<i class="fa-solid fa-chevron-left"></i>
// 		</button>
// 	`,
// 	nextArrow : `
// 		<button type="button" class="slider-arrow-right">
// 			<i class="fa-solid fa-chevron-right"></i>
// 		</button>
// 	`,
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
//   });


var target_date = new Date().getTime() + (1000*3600*48); 
var hours, minutes, seconds; 

var countdown = document.getElementById("tiles"); 

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;


		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	if (countdown ) {
		countdown.innerHTML = "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
	}
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

    window.onscroll = function(){
 	let header = document.querySelector('.bottom-header')

 	if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
 		header.classList.add('sticky-header')
 	}
 	else{
 		header.classList.remove('sticky-header')
 	}
 }

-

//isotope 



// $('.selling-item').isotope({
// 	itemSelector: '.item',
// 	layoutMode: 'fitRows'
// });

$('.selling-menu ul li').click(function(){
	$('.selling-menu ul li').removeClass('active1');
	$(this).addClass('active1');

	var selector = $(this).attr('data-filter');
	$('.selling-item').isotope({
		filter: selector
	});
	return false;
	
})



let categoryToggleBtn = document.querySelector(".drpdwn-category");


categoryToggleBtn.addEventListener("click", () => {
  let categoryMenu = $(".category-menu");
  categoryMenu.slideToggle();
})

mybutton = document.getElementById("myBtn");


window.onscroll = () => stickyHeader();


let header = document.querySelector(".bottom-header");
let sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



  var loader = document.getElementById('loading')
  var site = document.getElementById('best-site')

  function Loader() {
	loader.style.display = 'none'
	site.style.display = 'block'
  }
 
  setTimeout(() => {
	Loader()
  }, 3000);


  
  