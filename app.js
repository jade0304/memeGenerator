const button = document.querySelector('#button')


function uploadOrNot() {
  if (document.querySelector("input[type=file]").files[0]){
    let input = document.querySelector("input[type=file]");
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        display(e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }
  } else if (document.querySelector("input[type=text]").value){
     display(document.querySelector("input[type=text]").value);
  }
}

function display(res) {
	let img = document.createElement("IMG");
	img.src=res;
  let topInput = document.getElementById("meme_textTop");
  let bottomInput = document.getElementById("meme_textBottom");

  topInput.innerText = topText.value
  memeTopText = topInput.innerText
  bottomInput.innerText = bottomText.value
  memeBottomText = bottomInput.innerText
  
	document.querySelector("#result").append(img);  
  document.querySelector("#result").append(topInput);
  document.querySelector("#result").append(bottomInput);
  
}

