// Basic code for resize and initial load //



// document.getElementById('image-container').addEventListener('load', detectAspectRatio);
window.addEventListener('load', detectAspectRatio);
window.addEventListener('resize', detectAspectRatio);

function detectAspectRatio() {
  var imageContainer = document.getElementById('image-container');

  //all variables below are for determining ratios between images, screen sizes and the figure container

  var isWidth = document.getElementById('image-swap').clientWidth;
  var isHeight = document.getElementById('image-swap').clientHeight;
  var isRatio = isWidth/isHeight;

  var figWidth = document.getElementById('text-container').clientWidth;
  var figHeight = document.getElementById('text-container').clientHieght;

  var contWidth = isWidth + figWidth;
  var contRatio = contWidth/figHeight;

  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;
  var winRatio = winWidth/winHeight;

  console.log(`${isRatio} and ${docRatio} and ${contWidth}`);

  if(contRatio>=1){
    if(winRatio>isRatio){
      imageContainer.classList.remove('wide');
      imageContainer.classList.add('tall');
    }else{
      imageContainer.classList.remove('tall');
      imageContainer.classList.add('wide');
    }
  }else{
    imageContainer.classList.remove('tall');
    imageContainer.classList.add('wide');
  }
	
	// var descriptionSide = document.getElementById('description-side');
	// var imageSide = document.getElementById('image-side');
	// var changeoutText = document.getElementById('changeout-text');
	// var changeoutImage = document.getElementById('changeout-image');
	// var para = changeoutText.querySelector('p');
	
	// var windowRatio = docWidth/docHeight;
	// var windowRatioModified = windowRatio - .35;
	// var imageRatio = imgWidth/imgHeight;
	
	// if(windowRatioModified >= imageRatio) {
	// 	imageSide.style.height = '90%';
	// 	imageSide.style.width = '60%';
	// 	changeoutText.style.textAlign = 'right';
	// 	changeoutText.style.paddingLeft = '70%';
	// 	changeoutText.style.paddingTop = '';
	// 	para.style.textAlign = 'right';
	// }else {
	// 	imageSide.style.height = '67%';
	// 	imageSide.style.width = '86%';
	// 	changeoutText.style.textAlign = 'left';
	// 	changeoutText.style.paddingLeft = '';
	// 	changeoutText.style.paddingTop = document.getElementById('image-side').clientHeight + 5 + 'px';
	// 	para.style.textAlign = 'left';
	// }
	// console.log(windowRatioModified + ' ' + imageRatio);
}

function openImageBox(el) {
	var imgBox =document.getElementById('dark-box');
	var elName = this.id;
	
	var cross = document.getElementById('cross');
	var footerTag = document.getElementById('footer');
	var htmlTag = document.getElementById('html');
	var mainDiv = document.getElementById('main');
  
  //the code below hides the x button on mobile so the back button doesn't interfere with navigation
	if(/Android/i.test(navigator.userAgent)){
		location.hash = '#image-open';
		cross.style.display = 'none';
	}
		 
	for (var i=0; i<images.length; ++i){
		var imageName = images[i].name;
		
		var changeoutText = document.getElementById('changeout-text');
		var changeoutImage = document.getElementById('changeout-image');
		
		if (imageName.match(elName)){
			if (elName === imageName){
				if (window.outerWidth > 610){
					changeoutImage.src = images[i].sourceSmall;
				}else{
					changeoutImage.src = images[i].source;
				}
				changeoutText.innerHTML = images[i].title + images[i].description;
			}else {
				changeoutImage.src = brokenLink.source;
				changeoutText.innerHTML = brokenLink.description;
			}
		}
	}
	
	mainDiv.style.pointerEvents = 'none';
	footerTag.style.pointerEvents = 'none';
	htmlTag.style.overflow = 'hidden';
	imgBox.style.display = 'flex';
	imgBox.className = 'fade-in';
}