# Document Object Model



---

## DOM Nodes

### Selecting Nodes

* `var mydiv = document.getElementById("mydiv");`
* `var mydivs = document.getElementsByTagName("div");`
* `var myclasses = document.getElementsByClassName("myclass");`
* `var myelements = document.body.getElementsByTagName("*");`
* `var mynode = document.querySelector(".myclass");`
* `var mynodes = document.querySelectorAll(".myclass");`

---

### Traversing DOM Tree

```html
<ul id="mylist">
<li>First</li>
<li>Second</li>
<li>Third</li>
</ul>
```

```javascript
var mylist = document.getElementById("mylist");

var first = mylist.children[0];
first = mylist.firstElementChild;

var third = mylist.children[2];
third = mylist.lastElementChild;

//firstChild, lastChild, nextSibling, previousSibling
var second = first.nextElementSibling;
second = third.previousElementSibling;
mylist = first.parentNode;
```

---

```javascript
mylist.childNodes[0]; // whitespace text node
mylist.childNodes[1]; // li node
mylist.childNodes[2]; // whitespace text node

mylist.childNodes[0].nodeName; // #text
mylist.childNodes[1].nodeName; // LI
mylist.childNodes[2].nodeName; // #text


```

---

### Creating Nodes

```javascript
var myitem = document.createElement('li');
var mytext = document.createTextNode("New list item");

myitem.appendChild(mytext);

mylist.appendChild(myitem);

mylist.insertBefore(myitem, mylist.children[0]);

var newitem = myitem.cloneNode(false);

mylist.appendChild(newitem);

newitem.innerHTML = "<b>Another</b> new list item";

ewitem.textContent; // "Another new list item"
newitem.innerHTML; // "<b>Another</b> new list item"

```

---

### Removing Nodes

```javascript
var removedNode = mylist.removeChild(mylist.lastElementChild);

mylist.replaceChild(removedNode, mylist.firstElementChild);


```

---

## Attribute Nodes

```html
<p id="myid">My paragraph</p>
```

```javascript
var mypara = document.getElementById("myid");

mypara.setAttribute("class","myclass");
if (mypara.hasAttribute("class"))
console.log(mypara.getAttribute("class")); // "myclass"

console.log(mypara.id);
// "myid"
console.log(mypara.className); // "myclass"

mypara.setAttribute("style", "background-color: yellow;");

mypara.style.backgroundColor = "yellow";



```

