
```html
<!DOCTYPE html>

<html lang="en">

<head>
    <title>Capitolo 5, Esempio 1</title>
</head>

<body>
    <script>
        var myString = "Welcome to Wrox books. " +
            "The Wrox website is www.wrox.com. " +
            "Visit the Wrox website today. Thanks for buying Wrox";

        var foundAtPosition = 0;
        var wroxCount = 0;

        while (foundAtPosition != -1) {
            foundAtPosition = myString.indexOf("Wrox", foundAtPosition);

            if (foundAtPosition != -1) {
                wroxCount++;
                foundAtPosition++;
            }
        }

        document.write("There are " + wroxCount + " occurrences of the word Wrox");
    </script>
</body>

</html>
```

```html
<!DOCTYPE html>

<html lang="en">

<head>
    <title>Capitolo 5, Esempio 2</title>
</head>

<body>
    <script>
        function checkCharType(charToCheck) {
            var returnValue = "O";
            var charCode = charToCheck.charCodeAt(0);

            if (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0)) {
                returnValue = "U";
            } else if (charCode >= "a".charCodeAt(0) &&
                charCode <= "z".charCodeAt(0)) {
                returnValue = "L";
            } else if (charCode >= "0".charCodeAt(0) &&
                charCode <= "9".charCodeAt(0)) {
                returnValue = "N";
            }

            return returnValue;
        }

        var myString = prompt("Enter some text", "Hello World!");

        switch (checkCharType(myString)) {
            case "U":
                document.write("First character was upper case");
                break;
            case "L":
                document.write("First character was lower case");
                break;
            case "N":
                document.write("First character was a number");
                break;
            default:
                document.write("First character was not a character or a number");
        }
    </script>
</body>

</html>
```


```html
<!DOCTYPE html>

<html lang="en">

<head>
    <title>Capitolo 5, Esempio 3</title>
</head>

<body>
    <script>
        var myShopping = ["Eggs", "Milk", "Potatoes", "Cereal", "Banana"];

        var ord = prompt("Enter 1 for alphabetical order, " +
            "and -1 for reverse order", 1);

        if (ord == 1) {
            myShopping.sort();
            document.write(myShopping.join("<br />"));
        } else if (ord == -1) {
            myShopping.sort();
            myShopping.reverse();
            document.write(myShopping.join("<br />"));
        } else {
            document.write("That is not a valid input");
        }
    </script>
</body>

</html>
```


```html
<!DOCTYPE html>

<html lang="en">

<head>
    <title>Capitolo 5, Esempio 4</title>
</head>

<body>
    <script>
        var myNumber = prompt("Enter the number to be rounded", "");

        document.write("<h3>The number you entered was " + myNumber + "</h3>");
        document.write("<p>The rounding results for this number are</p>");
        document.write("<table width='150' border='1'>");
        document.write("<tr><th>Method</th><th>Result</th></tr>");
        document.write("<tr><td>parseInt()</td><td>" + parseInt(myNumber, 10) + "</td></tr>");
        document.write("<tr><td>ceil()</td><td>" + Math.ceil(myNumber) + "</td></tr>");
        document.write("<tr><td>floor()</td><td>" + Math.floor(myNumber) + "</td></tr>");
        document.write("<tr><td>round()</td><td>" + Math.round(myNumber) + "</td></tr>");
        document.write("</table>");
    </script>
</body>

</html>
```


```html
<!DOCTYPE html>

<html lang="en">

<head>
    <title>Capitolo 5, Esempio 5</title>
</head>

<body>
    <script>
        function fix(fixNumber, decimalPlaces) {
            var div = Math.pow(10, decimalPlaces);
            fixNumber = Math.round(fixNumber * div) / div;
            return fixNumber;
        }

        var number1 = prompt("Enter the number with decimal places you " +
            "want to fix", "");

        var number2 = prompt("How many decimal places do you want?", "");

        document.write(number1 + " fixed to " + number2 + " decimal places is: ");
        document.write(fix(number1, number2));
    </script>
</body>

</html>
```

```html
<!DOCTYPE html>

<html lang="en">

<head>
    <title>Capitolo 5, Esempio 6</title>
</head>

<body>
    <script>
        var months = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];

        var dateNow = new Date();
        var yearNow = dateNow.getFullYear();
        var monthNow = months[dateNow.getMonth()];
        var dayNow = dateNow.getDate();
        var daySuffix;

        switch (dayNow) {
            case 1:
            case 21:
            case 31:
                daySuffix = "st";
                break;
            case 2:
            case 22:
                daySuffix = "nd";
                break;
            case 3:
            case 23:
                daySuffix = "rd";
                break;
            default:
                daySuffix = "th";
                break;
        }

        document.write("It is the " + dayNow + daySuffix + " day ");
        document.write("in the month of " + monthNow);
        document.write(" in the year " + yearNow);
    </script>
</body>

</html>
```


```html
<!DOCTYPE html>

<html lang="en">

<head>
    <title>Capitolo 5, Esempio 7</title>
</head>

<body>
    <script>
        var greeting;

        var nowDate = new Date();
        var nowHour = nowDate.getHours();
        var nowMinute = nowDate.getMinutes();
        var nowSecond = nowDate.getSeconds();

        if (nowMinute < 10) {
            nowMinute = "0" + nowMinute;
        }

        if (nowSecond < 10) {
            nowSecond = "0" + nowSecond;
        }

        if (nowHour < 12) {
            greeting = "Good Morning";
        } else if (nowHour < 17) {
            greeting = "Good Afternoon";
        } else {
            greeting = "Good Evening";
        }

        document.write("<h4>" + greeting + " and welcome to my website</h4>");
        document.write("According to your clock the time is ");
        document.write(nowHour + ":" + nowMinute + ":" + nowSecond);
    </script>
</body>

</html>
```

```html
<!DOCTYPE html>

<html lang="en">

<head>
    <title>Capitolo 5, Esempio 8</title>
</head>

<body>
    <script>
        function createPerson(firstName, lastName) {
            return {
                firstName: firstName,
                lastName: lastName,
                getFullName: function() {
                    return this.firstName + " " + this.lastName
                },
                greet: function(person) {
                    alert("Hello, " + person.getFullName() +
                        ". I'm " + this.getFullName());
                }
            };
        }

        var johnDoe = createPerson("John", "Doe");
        var janeDoe = createPerson("Jane", "Doe");

        johnDoe.greet(janeDoe);
    </script>
</body>

</html>
```
