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


var UDVelement = document.getElementById('leftMenuBarTD');
var firstChild = UDVelement.firstElementChild;
//const pacsi = document.createTextNode(', pacsi!');
//firstChild.appendChild(pacsi);
firstChild.innerHTML += '<span style="font-weight: 100;">, pacsi!</span>';





document.addEventListener("DOMContentLoaded", function() {
  var leftMenuBarTDElement = document.getElementById("leftMenuBarTD");

  if (leftMenuBarTDElement) {
    var leftMenuBarTDWidth = leftMenuBarTDElement.offsetWidth;

    var imageElements = document.querySelectorAll('img[src*="templates/images/bg/2023_12_07_14_36_302.jpg"]');
    
    imageElements.forEach(function(imageElement) {
      imageElement.style.width = "calc(100vw - " + leftMenuBarTDWidth + "px)";
    });
  }
});


function addScript(src, callback) {
  var script = document.createElement('script');
  script.src = src;
  script.type = 'text/javascript';
  script.onload = callback;
  document.head.appendChild(script);
}

addScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', function() {
  addScript('https://unpkg.com/tilt.js@1.1.21/dest/tilt.jquery.min.js', function() {
    var image = document.querySelector('img[src*="templates/images/bg/2023_12_07_14_36_302.jpg"]');

    if (image) {
      var divElement = document.createElement('div');

      divElement.className = 'tilt tilt-movie';

      divElement.setAttribute('data-tilt', '');
      divElement.setAttribute('data-tilt-glare', 'true');
      divElement.setAttribute('data-tilt-scale', '1.1');

      image.parentNode.appendChild(divElement);

      divElement.appendChild(image);

      $(divElement).tilt({
      });
    }
  });
});





  // Betöltéskor lefut
  (function() {
    // Paraméterek
    function checkURL() {
      const urlParams = new URLSearchParams(window.location.search);
      const routeParam = urlParams.get('route');
      const listParam = urlParams.get('list');

      // Route és List értékek
      if (routeParam === 'tickets' && listParam === 'new') {
        setInterval(function() {
          location.reload();
        }, 5000);
      }
    }

    // betöltéskor meghívja
    checkURL();
  })();






document.addEventListener("DOMContentLoaded", function() {
  // Létrehozzuk a szükséges HTML struktúrát
  var cursorHtml = `
    <div id="cursor" class="cursor">
      <div class="ring">
          <div><!--Border--></div>
      </div>
      <div class="ring">
          <div><!--Pointer--></div>		
      </div>
    </div>`;

  // Hozzáadjuk a HTML-t a dokumentum végéhez
  document.body.insertAdjacentHTML('beforeend', cursorHtml);

  // jQuery script hozzáadása
  var script = document.createElement('script');
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js";
  document.body.appendChild(script);
});
$(window).mousemove(function (e) {
	$(".ring").css(
		"transform",
		`translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
	);
});
