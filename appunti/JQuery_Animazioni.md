# ANIMAZIONI

L'uso di jquery per creare animazioni è stato spesso usato da
google per alcuni dei sui doodle .
Adesso animeremo una parte di un famoso doodle di google,
in particolare il leone dell'illustrazione.

## ANIMAZIONE: JQUERY E SPRITE
Al solito abbiamo bisogno della nostra libreria Jquery
```javascript
<script type="text/javascript" src="jquery.js"></script>
```
e un paio di immagini, di cui una sprite

## ANIMAZIONE: CODICE HTML

```html
<div style="margin:0 auto;text-
align:center;height:175px; overflow:hidden; position:relative; width:452px">
	<div style="background:url(sprite/sfondo.jpg) no-repeat 0 0px;height:141px;left:32px;top:32px;width:420px;position:absolute">
	</div>
	<div id="leone" style="background:url(sprite/leone.png) no-repeat 0
	0px;height:37px;left:137px;top:131px;width:70px;position:absolute; ">
	</div>
	<div id ="area_leone" style="height:37px;left:136px;top:131px;width:70px; position:absolute; ">
	</div> <!-- Leone -->
</div>
```

## ANIMAZIONE: CODICE JAVASCRIPT

```javascript
var t1=null; var frame = 0;
$(function(){
$('#area_leone').click(function(){
t1= setInterval('anima()',150);
});
})
function anima()
{ $('#area_leone').unbind('click');
var left = 70 * frame;
//$("#leone").css('backgroundPositionX','-'+left+'px');
$("#leone").css('background-position','-'+left+'px 0px');
frame++;
if(frame==10){ clearInterval(t1); }
}
```