let button=document.getElementById('enter');
let input=document.getElementById('userinput');
let ul=document.querySelector("ul");
function inputLength(){
	return input.value.length;

}
function createListElement(){
	     let li=document.createElement("li");
	     li.appendChild(document.createTextNode(input.value));
	     ul.appendChild(li);
	     input.value="";

}
    function addListafterclick(){
    	if (inputLength()>0) {
        createListElement();
	}

    }
     function addlistafterKeypress(event){
     	if (inputLength()>0 && event.keyCode===13) {
        createListElement();
	}

     }
    button.addEventListener("click", addListafterclick);
    input.addEventListener("keypress",addlistafterKeypress);