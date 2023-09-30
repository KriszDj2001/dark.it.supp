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




var darkModeButton; // Deklaráljuk a változót itt, így globálissá válik

// Várjuk meg az oldal teljes betöltését, mielőtt hozzáadjuk a gombot
document.addEventListener('DOMContentLoaded', function() {
    addDarkModeButton();
});

// Függvény a dark mode állapotának kezelésére
function toggleDarkMode() {
    var stylesheet = document.querySelector('#dark-mode-stylesheet');

    // Ellenőrizzük, hogy a stíluslap jelenleg be van-e kapcsolva
    if (stylesheet) {
        // Ha be van kapcsolva, akkor kikapcsoljuk
        stylesheet.remove();
        darkModeButton.textContent = '🌙'; // Visszaállítjuk a gomb szövegét
    } else {
        // Ha ki van kapcsolva, akkor bekapcsoljuk
        var link = document.createElement('link');
        link.id = 'dark-mode-stylesheet';
        link.rel = 'stylesheet';
        link.href = 'dark.css';
        document.head.appendChild(link);
        darkModeButton.textContent = '☀️'; // Változtatjuk a gomb szövegét
    }
    // Hozzáadjuk az animációt a gombhoz
    darkModeButton.classList.add('animate-button');

    // Figyeljük az animáció végét, és távolítsuk el az osztályt
    darkModeButton.addEventListener('animationend', function() {
        darkModeButton.classList.remove('animate-button');
    });
}

// Függvény a gomb hozzáadásához
function addDarkModeButton() {
    var header = document.querySelector('#header');

    // Ellenőrizzük, hogy a #header elem létezik-e
    if (header) {
        darkModeButton = document.createElement('button'); // Globális változóként hozzuk létre
        // Ellenőrizzük, hogy a dark módot használjuk-e, és ennek megfelelően állítjuk a gomb szövegét
        darkModeButton.textContent = document.querySelector('#dark-mode-stylesheet') ? '☀️' : '🌙';
        darkModeButton.id = 'darkThemeButton'; // Azonosító hozzáadása
        darkModeButton.addEventListener('click', toggleDarkMode);

        // Adjuk hozzá a gombot a #header elemhez
        header.appendChild(darkModeButton);
    }
}
