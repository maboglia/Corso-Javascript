document.write("<table>");

for (var i = 1; i <= 10; i++) {
	document.write("<tr>");
	
		for (var j = 1; j <= 10; j++) {
			if (i % 2 == 0)
			document.write("<td style='border:1px solid #ccc; color:red;'>");
			else
			document.write("<td style='border:1px solid #ccc'>");
			document.write( i *  j);
			document.write("</td>");
			
		}

	document.write("</tr>");
}

document.write("</table>");