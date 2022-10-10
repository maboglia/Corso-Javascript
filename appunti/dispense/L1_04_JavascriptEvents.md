# Events

## Event Handling

```html
<a href="http://www.google.com" id="mylink">My link</a>
```

```javascript

function myEventHandler() {
    alert("Event triggered");
}

var mylink = document.getElementById("mylink");
mylink.onclick = myEventHandler;


mylink.onclick = null;



```

---

```javascript

mylink.addEventListener("click", myEventHandler, false);

mylink.removeEventListener("click", myEventHandler, false);
```

### Event Object

```javascript
function myEventHandler(e) {
    if (!e) var e = window.event;
}

console.log(e.type); // "click"

console.log(e.target.tagName); // "A"

var target = e.target || e.srcElement;


```

---

### Event Propagation

```html
<div id="outer">Outer element
    <p id="inner">Inner element</div>
</div>
```

```javascript
var inner = document.getElementById("inner");
inner.onclick = function() { alert("Inner"); }
var outer = document.getElementById("outer");
outer.onclick = function() { alert("Outer"); }

//bubbling e capturing
outer.addEventListener("click",function() {console.log('1';)}, true);
inner.addEventListener("click",function() {console.log('2';)}, true);
inner.addEventListener("click",function() {console.log('3';)}, false);
outer.addEventListener("click",function() {console.log('4';)}, false);
```

---

### DOM Events

* onClick 
* onLoad 
* onMouseOver 
* onMouseOut 
* onSubmit
* onFocus 
* onBlur 

