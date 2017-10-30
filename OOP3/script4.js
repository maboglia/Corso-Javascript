var studenti = [   
		{nome: "bryan", cognome: "folleco",year: 1999},
		{nome: "igli", cognome: "balliu",year: 1998},
		{nome: "artur", cognome: "holobut",year: 1992},
		{nome: "ludovica", cognome: "magnano",year: 1993},
		{nome: "alexandru", cognome: "boaca",year: 1994},

		{nome: "dario", cognome: "d'abbiero",year: 1990},
		{nome: "giuseppe", cognome: "minniti",year: 1995},
		{nome: "simone", cognome: "marzorati",year: 1997},
		{nome: "danut", cognome: "andres",year: 1995},
		{nome: "alberto", cognome: "tito",year: 1990},
		{nome: "andrei", cognome: "tasca",year: 1991},

		{nome: "cristiano", cognome: "maffeis",year: 1995},
		{nome: "marco", cognome: "de palma", year:1996},
		{nome: "denilson", cognome: "vargas",year: 1992},
		{nome: "daniele", cognome: "spada",year: 1988},
		{nome: "fabio", cognome: "caccia",year: 1997},
		{nome: "davide", cognome: "tacchino",year: 1995}
  ];

  for (var i = 0; i < studenti.length; i++) {
  	console.log(studenti[i].nome + (2017 - studenti[i].year ) );

  };