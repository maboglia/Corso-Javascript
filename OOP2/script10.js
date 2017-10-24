var output = "<table>";
var numRighe = 10;
var numColonne = 10;


	for (var i = 1; i <= numRighe; i++) {

		output += "<tr>";

			for (var j = 1; j <= numColonne; j++) {
				
			output +=	"<td>" + (i * j) + "</td>"  ;
				
			};


		output += "</tr>";
	};


output += "</table>";

document.body.style.backgroundColor = "white";
document.body.innerHTML = output;

