//tao slideshow cho mainbanner
function background_slideshow(){
	document.querySelector('.Main-Banner .bg-slide').style.display = "none";
	function slider(){
	setTimeout(function(){
		document.querySelector('.Main-Banner').style.backgroundImage = "url('image/Layer 9.jpg')";
	}, 0000);
	//
	setTimeout(function(){
		document.querySelector('.Main-Banner').style.backgroundImage = "url('image/img-banner-1.jpg')";
	}, 3000);
	
	//
	setTimeout(function(){
		document.querySelector('.Main-Banner').style.backgroundImage = "url('image/img-banner-2.jpg')";
	}, 6000);
	};
	slider();
	setInterval(function() { // repeat

    slider();

  	}, 9000);
	
}
	background_slideshow();//goi ham slideshow de chay



//tao slideshow popup cho made-with-love
var slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function openModal(){
	document.getElementById("myModal").style.display = "block";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  } 
  slides[slideIndex-1].style.display = "block";
}
// nhan vao overlay de thoat
var modal  = document.querySelector('#myModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//kiem tra du lieu cho form input
function checkInputForm(){
	var inputs = document.getElementsByClassName('form-control1');
	var name = inputs[0].value;
	var email = inputs[1].value.trim();
	var message  =document.getElementsByClassName('form-control')[0].value;
	if(name == null || name == ""){
		alert('Ban can nhap ten');
		return false;
	}
	else{ 
		if(email == null || email == ""){
			alert("Ban can nhap email");
			return false;
		}
		else{ 
			if( (/^[a-z][a-z0-9_]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4})$/).test(email) == false){// Dang cua email ...@gmail.com
				alert('Nhap sai email');
				return false;
			}
			else{ 
				if(message == null || message == ""){
				alert('Ban can nhap noi dung cho message');
				return false;
				}
			}
		}
	}
	alert('Chuc mung ban da nhap form dung');
	return true;
}





//tao active cho customer-review
function status1(x){							//non-active
	x.parentElement.style.margin = '20px 0px';
	x.firstElementChild.src = 'image/talk1.1.png';
	x.lastElementChild.style.color = 'black';
	x.style.backgroundImage = "url('image/talk1.png')";
	x.style.height = '280px';
	x.style.zIndex = 0;
}

function status2(x){							//active
	x.parentElement.style.margin = ' 0px';
	x.firstElementChild.src = 'image/talk2.2.png';
	x.lastElementChild.style.color = 'white';
	x.style.height = '320px';
	x.style.backgroundImage = "url('image/talk2.png')";
	x.style.zIndex = 1;
}

function changeActive(selector1, selector2, selector3){
	var s1 = document.querySelector(selector1);
	var s2 = document.querySelector(selector2);
	var s3 = document.querySelector(selector3);
	if(s1.style.zIndex == 0){
		status2(s1);
		status1(s2);
		status1(s3);
	}
	else{
		status1(s1);
	}
}

//





