# spread operator (...)

lo spread operator (...) serve per indicare un numero imprecisato di argomenti:

```javascript
function addPrefisso(prefisso, ...parole) {

for(let i=0; i<parole.length; i++) {
          prefissoedParole[i] = prefisso + parole[i];
       }
return prefissoedParole;

}
addPrefisso("ITS-", "Mobile", "BackEnd"); // ["ITS-Mobile", "ITS-BackEnd"]
```
