---

JS può modificare il contenuto HTML
```
*   JS può modificare gli attributi HTML
*   JS può modificare gli stili CSS / HTML
*   JS può validare i dati

###dove scrivere JS
    *   JS in head o body
    *   JS in un file esterno: vantaggi
---

## Aggiungere JavaScript alla tua pagina web

```html
<html>
<head>
    <title>La mia pagina web</title>
    <script>
   
    var sayHello = function(){
        alert("Hello there!");
    };

    </script>
</head>
<body>
    <h1>La mia pagina web</h1>  
    <button onclick="sayHello()">Cliccami!</button>
</body>
</html>
```

---

## Chiedere informazioni all'utente

```html
<html>
<head>
    <meta charset="UTF-8">
    <title>La mia pagina web</title>
    <script>
   
    var saluta = function(){
        var name = prompt("Come ti chiami?");
        alert("Piacere di conoscerti, " + name);
    };

    </script>
</head>
<body>
    <h1>La mia pagina web</h1>
    <button onclick="saluta()">Cliccami!</button>
</body>
</html>
```
