var pizze = [

	{pizza:"Margherita", ingredienti: "", prezzo: 4.00},
	{pizza:"Napoli", ingredienti: "acciughe", prezzo: 5.00},
	{pizza:"Greca", ingredienti: "olive", prezzo: 5.50},
	{pizza:"Salsiccia Bra", ingredienti: "salsiccia", prezzo: 6.50}

];
var ordine = [];
var conto = 0;

$.each(pizze, function (i,e) {
	let riga = $("<tr>");
	let nome = $("<td class='col-md-4'>").text(e.pizza);
	let ingr = $("<td class='col-md-4'>").text("pomodoro, mozzarella, " + e.ingredienti);
	let prezzo = $("<td>").text(e.prezzo);
	let input = $("<input class='form-control form-control-sm' type='number' name='q_"+i+"'>");
	let cellaInput=$("<td>").html(input);
	riga.append(nome).append(ingr).append(prezzo).append(cellaInput);
	//riga.append(nome).appendTo($("#menu"));
	$("#menu").append(riga);

	console.log(e);
});

$("#menu").append("<button class='btn btn-primary' id='ordina'>ordina</button>");
$("#ordina").click(function (argument) {
		
	$("#menu").find("tr").each(function (i,e) {
		let quantePizze = $(e).find("input").val();

		if (quantePizze > 0 ) {
			let totalePizza = quantePizze * pizze[i].prezzo;
			ordine.push(pizze[i].pizza + " " + quantePizze + ": " +  totalePizza);

			conto = conto + totalePizza;		
		}


	});

	emettiRicevuta();

});

function emettiRicevuta() {
	$.each(ordine, function (i,e) {
		let riga = $("<tr>");
		let cella = $("<td>").text(e);
		riga.append(cella).appendTo($("#ricevuta"));

	});

	let riga = $("<tr>");
	let cella = $("<td>").text(conto);
	riga.append(cella).appendTo($("#ricevuta"));
}


