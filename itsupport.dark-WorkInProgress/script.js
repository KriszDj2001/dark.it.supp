// 1. Create the button
//var button = document.createElement("button");
//button.innerHTML = "Dark/Light";

// 2. Append somewhere
//var body = document.getElementsByTagName("body")[0];
//body.appendChild(button);

// 3. Add event handler
//button.addEventListener ("click", function() {
//  alert("Dark On");
//});


if (window.location.href.indexOf("ticket=") != -1) {
	var css = '#tabs-1 > table >tbody > tr > td {background-color: transparent!important;}',
	    head = document.head || document.getElementsByTagName('head')[0],
	    style = document.createElement('style');
	
	head.appendChild(style);
	
	style.type = 'text/css';
	if (style.styleSheet){
	  // This is required for IE8 and below.
	  style.styleSheet.cssText = css;
	} else {
	  style.appendChild(document.createTextNode(css));
	}
}

const para = document.createElement("p");
const node = document.createTextNode("Dark mode by: @magyar.krisz.dj");
para.setAttribute("id", "headerTag");
para.appendChild(node);

const element = document.getElementById("header");
element.appendChild(para);