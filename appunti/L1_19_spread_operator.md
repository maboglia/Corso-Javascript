# spread operator (...)

lo spread operator (...) serve per indicare un numero imprecisato di argomenti:

```javascript
function aggiungiEstensione(estensione, ...parole) {
    let pathImmagine;
    
for(let i=0; i<parole.length; i++) {
          pathImmagine[i] = parole[i] + estensione;
       }
return pathImmagine;

}
aggiungiEstensione(".jpg", "Mobile", "BackEnd"); // ["Mobile.jpg", "BackEnd.jpg"]
```
