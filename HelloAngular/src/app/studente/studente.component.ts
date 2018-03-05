import { Component, OnInit } from '@angular/core';
import { Studente } from '../studente';
import { STUDENTI } from '../elenco_studenti';
@Component({
  selector: 'app-studente',
  templateUrl: './studente.component.html',
  styleUrls: ['./studente.component.css']
})
export class StudenteComponent implements OnInit {

  studente: Studente {
    matricola: 0,
    nome : 'Brygli'

  };
  studenti = STUDENTI;
  studenteSelezionato: Studente;
  onSelect(studente: Studente): void {
    this.studenteSelezionato = studente;
  }

  constructor() { }

  ngOnInit() {
  }

}
