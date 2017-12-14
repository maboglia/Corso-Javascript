// More on Control Flow in JS 5/14
var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  case 'yellow':
      console.log("makes me think of parasols in spring");
      break;  
  default:
    console.log("I don't think that's a primary color!");
}
