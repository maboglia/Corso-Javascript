
String.prototype.repeat=function(num){
    return new Array(num+1).join(this)
}
String.prototype.ucfirst=function(){
    return this.charAt(0).toUpperCase()+this.slice(1)
}

var Curso=new(function(){
    this.titulo='javascript básico'
    this.temas=[
        'Generalidades',
        'Estructura',
        'Variables',
        'Expresiones',
        'Declaraciones',
        'Objectos',
        'Arreglos',
        'Funciones',
        'Clases',
        'JSON'
    ]
    this.informacion={
        'inicio':new Date(2014,2,17,18,45),
        'duración':'2 semanas',
        'lugar':'Laboratorio 2',
        'costo':'70 Bs.',
        'instructor':'Carlos E. Caballero B.'
    }
    this.render=function(){
        var msg=this.titulo+'\n'+'='.repeat(this.titulo.length)
            +'\n\n'
        for(var j in this.informacion){
            msg+=j.ucfirst()+': '+this.informacion[j]+'\n'
        }
        msg+='\n'+'Temas:'+'\n'+'------'+'\n\n'
        for(var i=0;i<this.temas.length;i++){
            msg+='Día '+(i+1)+'. '+this.temas[i]+'\n'
        }
        console.log(msg)
    }
})()

Curso.render()

