// Basic code for resize and initial load //

document.getElementById('image-swap').addEventListener('load', detectAspectRatio);
window.addEventListener('resize', detectAspectRatio);
document.getElementById('cross').addEventListener('click', closeImageBox);
document.querySelectorAll('.preview-image').forEach(function(figure){
  figure.addEventListener('click', openImageBox);
});

function detectAspectRatio() {
  var imageContainer = document.getElementById('image-container');

  //all variables below are for determining ratios between images, screen sizes and the figure container

  var isWidth = document.getElementById('image-swap').naturalWidth;
  var isHeight = document.getElementById('image-swap').naturalHeight;
  var isRatio = isWidth/isHeight;

  var figWidth = document.getElementById('text-container').clientWidth;
  var figHeight = document.getElementById('text-container').clientHeight;

  var contWidth = document.getElementById('image-swap').clientWidth + 480; //number is minimum width I want the figcaption to be at .left
  var contRatio = contWidth/figHeight;

  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;
  var winRatio = winWidth/winHeight;

  console.log(`WinRatio ${winRatio} isRatio ${isRatio}`);
  console.log(`fWidth ${figWidth} cWidth ${contWidth} fHeight ${figHeight} fRatio ${contRatio}`);

  if(contRatio>=1){
   if(winRatio>(isRatio + .35)){  //.5 helps keep the figcaption a readable width
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
}

function openImageBox(el) {
	var drkBox =document.getElementById('dark-box');
	var imgId = this.id;
  
	var cross = document.getElementById('cross');
  
  //the code below hides the x button on mobile so the back button doesn't interfere with navigation
	if(/Android/i.test(navigator.userAgent)){
		location.hash = '#image-open';
		cross.style.display = 'none';
	}
		 
	for (var j=0; j<images.length; ++j){
    var i = images[j];
		var iName = images[j].name;
    
    console.log(iName);
    
    var changeH1 = document.getElementById('swap-h1');
    var changeP = document.getElementById('swap-p');
		var changeImage = document.getElementById('image-swap');
		
		if (iName.match(imgId)){
			if (imgId === iName){
        changeImage.src = 'images/'+iName + i.source;
        changeImage.srcset= 'images/'+iName + i.sourceSmall + ' 320w, ' + 'images/'+iName+i.sourcMedium + ' 530w '
        changeP.innerHTML = i.description;
        changeH1.innerHTML = i.title;
			}else {
				changeImage.src = brokenLink.source;
				changeText.innerHTML = brokenLink.description;
			}
		}
	}
	
	drkBox.classList.remove('hide');
}

function closeImageBox() {
	var drkBox = document.getElementById('dark-box');
	drkBox.classList.add('hide');
}

function handleBackButton(event){
	var drkBox =document.getElementById('dark-box');
	
	if(!location.hash){
		closeImageBox();
	}
}