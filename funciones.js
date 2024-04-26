window.addEventListener("load", function() {
document.getElementById('BStars').addEventListener("click", function() {
		alert("no es pocible manipular la imagen");
	})
})

var counter=1;
setInterval(function(){
document.getElementById('radio' + counter).checked=true;
counter++;
if(counter > 4 ){
	counter = 1;
}
},5000);