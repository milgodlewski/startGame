
function oblicz(){
  var wartoscA = document.getElementById("wartoscA").value;
  var wartoscB = document.getElementById("wartoscB").value;
  var dodawanie = new Number(wartoscA) + new Number(wartoscB);
  var odejmowanie = new Number(wartoscA) - new Number(wartoscB);
  var mnozenie = new Number(wartoscA) * new Number(wartoscB);
  var dzielenie = new Number(wartoscA) / new Number(wartoscB);
 
  var dzialanie = document.getElementById("dzialanie").value;
  var wynik = document.getElementById("wynik");
  
	 
	  
  if(dzialanie === "+") {
	wynik.value = dodawanie;
	alert(dodawanie);
  } else if(dzialanie === "-") {
	wynik.value = odejmowanie;
	alert(odejmowanie);
  } else if(dzialanie === "/") {
	wynik.value = dzielenie;
	alert(dzielenie);
  } else if(dzialanie === "*") {
	wynik.value = mnozenie;
	alert(mnozenie);
  } else {
	wynik.value = "Niepoprawne działanie";
  }

    
}

