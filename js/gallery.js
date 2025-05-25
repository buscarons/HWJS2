/*Name this external file gallery.js*/

function upDate(previewPic){
    let previewImage = document.getElementById("image")
    previewImage.style.backgroundImage = 'url(' + previewPic.src + ')'
    previewImage.innerHTML = previewPic.alt
	}

	function unDo(){
    let previewImage = document.getElementById("image")
    previewImage.style.backgroundImage = 'url()'
	previewImage.innerHTML = 'Hover over an image below to display here.'	
	}