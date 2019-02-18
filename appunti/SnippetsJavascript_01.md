# Snippets Javascript

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
---
## Modificare la pagina

```html
<h1 id="name"></h1>
```


```javascript
document.getElementById("name").innerHTML = "Piacere di conoscerti, " + name;
```

---
## Modificare la pagina

```html
<html>
<head>
    <meta charset="UTF-8">
    <title>La mia pagina web</title>
    <script>
   
    var saluta = function(){
        var name = prompt("Come ti chiami?");
        document.getElementById("name").innerHTML = "Piacere di conoscerti, " + name;
    };

    </script>
</head>
<body>
    <h1>La mia pagina web</h1>
    <button onclick="saluta()">Click me!</button>
    <h1 id="name"></h1>
</body>
</html>
```

---
## Creare un semplice form per gestire i dati

```html
<html>
<head>
    <meta charset="UTF-8">
    <title>La mia prima pagina Web</title>
    <script>
    var etaInAnniCanini = function(){
        var eta = document.getElementById("eta").value;
        var etaInAnniCanini = eta * 7;
        document.getElementById("anniCanini").innerHTML = "In anni  canini, tu hai " + etaInAnniCanini + "";
    }
    </script>
</head>
<body>
    <h1>La mia prima pagina Web</h1>
    <input id="eta"/>
    <button onclick="etaInAnniCanini()">La mia eta in Dog Years</button>
    <h2 id="anniCanini"></h2>
</body>
</html>
```

---
## Validare Input

```javascript
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Validate Input</h1>

<p>Inserisci un numero tra 1 e 10:</p>

<input id="numb" type="number">

<button type="button" onclick="myFunction()">Invia</button>

<p id="demo"></p>

<script>
function myFunction() {
    var x, text;

    // Riceve il  valore del campo input con id="numb"
    x = document.getElementById("numb").value;

    // Se x è Nan (Not a Number) o minore di 1 o maggiore di 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input non valido";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html> 
```

---
## Banner a rotazione

```javascript
<script>
    var img_width = "468";
    var img_height = "60";
    var img_title = "Click Here";

    var ad = new Array()
        // inserire qui le immagini sorgente
    ad[0] = 'images / Banner01.jpg';
    ad[1] = 'images / Banner01.jpg';
    ad[2] = 'images / Banner01.jpg';
    ad[3] = 'images / Banner01.jpg';

    var links = new Array()
        // inserire qui i link
    links[0] = 'http: //www.link01.com';
    links[1] = 'http: //www.ink02.com';
    links[2] = 'http: //www.ink03.com';
    links[3] = 'http: //www.ink04.com';
    var xy = Math.floor(Math.random() * ad.length);

    document.write(' < a href = ' + links[xy] + '+
        'target = "_blank" > < img src = ' + ad[xy] + '+
        'width = "' + img_width + '"' +
        'height = "' + img_height + '"' +
        'alt = "' + img_title + '"' +
        'border = "0" > < /a>');
</script>
```
---
## Navigator Object

```javascript
<html>
<head><title>Navigator Object</title></head>
<body>
  <big>
    <script type="text/javascript">
      for(var property in navigator){
         str="navigator"+"."+ property;
         document.write(property+ "&nbsp;&nbsp;<em>"+   
               str+"</em><br />");   
       }
    </script>
  </big>
</body>
</html>	
```
---
## The Browser

```javascript

<html><head><title>The Navigator Object</title></head>
<body>
<h2>About The Browser</h2>
<script language="JavaScript">
    var BrowserName= navigator.appName;
    var BrowserVersion = navigator.appVersion;
    var BrowserAgent= navigator.userAgent;
    var platform=navigator.platform;
    document.write("<font size='+1'>");
    document.write("<b>The Browser's name  is:</b> " +
                    BrowserName + "<br>");
    document.write("<b>The Browser version is:</b> " +
                    BrowserVersion + "<br>");
    document.write("<b>The Browser's \"user agent\" is:</b> " +
                    BrowserAgent + "<br>");
    document.write("<b>The Browser's platform is:</b> " +
                    platform + "<br>");
    document.write("</font>");
</script>
</body>
</html>

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
