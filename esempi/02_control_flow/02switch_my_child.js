// More on Control Flow in JS 8/14

var child = prompt("Which child are you?");

switch (child) {
    case 'Ayo':
        console.log("Hello my first born");
        break;
    case 'Tunde':
        console.log("Hello my son");
        break;
    case 'Nunu':
        console.log("Hello my little baby");
        break;
    default:
        console.log("I do not think I have a chld named " + child);
}
