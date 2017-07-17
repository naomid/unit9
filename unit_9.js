//Problem #1

var elem = document.getElementsByTagName('strong');

for (var i = 0; i < elem.length; i++) {
	elem[i].addEventListener('mouseover', function(event){
		event.target.style.color = "red";
	}, false);
}

for (var i = 0; i < elem.length; i++) {
	elem[i].addEventListener('mouseout', function(event){
		event.target.style.color = "black";
	}, false);
}


