


var x = window.matchMedia("(min-width: 1200px)");
var y = document.getElementById("menu");
var z = document.getElementById("menuButton");
function myFunction(x) {
    if (x.matches) 
	{ 
        y.classList.remove('dropdown-menu');
		y.classList.remove('dropdown-menu-right');
		y.classList.add('desktopMenu');
		$(z).hide();
	}else
	{
		y.classList.add('dropdown-menu');
		y.classList.add('dropdown-menu-right');
		y.classList.remove('desktopMenu');	
		$(z).show();
	}
}

myFunction(x) 
x.addListener(myFunction) 