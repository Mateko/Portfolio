

/* NAVBAR */
var x = window.matchMedia("(min-width: 1200px)");
var y = document.getElementById("menu");
var z = document.getElementById("menuButton");
/*Blocx*/
var k = document.getElementsByClassName("intrestedThings");
var a = document.getElementsByClassName("intrestedThingsParagraph");
var d = document.getElementsByClassName("material-icons");
/* NAVBAR */
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

/*Blocx*/

/*
$(k).mouseover(function(){
    $(a).children().hide();
	$(d).show();
});
$(k).mouseout(function(){
    $(a).children().show();
	$(d).hide();
});
*/
$(k).mouseover(function(){
  $(this).find(a).hide();
	$(this).find(d).show();
});
$(k).mouseout(function(){
	$(this).find(d).hide();
	$(this).find(a).show();
});
	
$(".btnCV").click(function() {
	if (confirm("Czy chcesz przejsc do pliku cv?")) {
    	window.location = "cv.pdf";
	} else {
	}    
});
	
	
	
	
	
	
	
	
	

	