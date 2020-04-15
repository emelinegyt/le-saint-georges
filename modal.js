// create references to the modal...
    var modal = document.getElementById('myModal');
    // to all images -- note I'm using a class!
    var pictures = document.getElementsByClassName('myImages');
    // the image in the modal
    var modalImg = document.getElementById("img01");
    // and the caption in the modal
    var captionText = document.getElementById("caption");
  
    // Go through all of the images with our custom class
    for (var i = 0; i < pictures.length; i++) {
      var img = pictures[i];
      // and attach our click listener for this image.
      img.onclick = function (evt) {
        console.log(evt);
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
    }
  
    var span = document.getElementsByClassName("close")[0];
  
    span.onclick = function () {
      modal.style.display = "none";
    }
