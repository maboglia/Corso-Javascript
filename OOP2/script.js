var lingua = "Italiano";
var nome;
var eta = 20;


document.write("lingua " + lingua);
document.write("nome " + nome);
document.write(typeof nome);

document.write("<hr>");

document.write("eta + eta "  + eta + eta);
document.write("<hr>");
document.write(eta + eta +"eta + eta ");
document.write("eta"  + eta);

document.write("<hr>");

//operatore unario di post-incremento
document.write("eta++"  +   (eta++)   );
document.write("eta"  + eta);

document.write("<hr>");

//operatore unario di pre-incremento
document.write("++eta"  +    (++eta)   );
document.write("eta"  + eta);


