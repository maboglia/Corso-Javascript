```html
<!DOCTYPE html>

<html lang="en">
<head>
    <title>Capitolo 6, Esempio 1</title>
</head>
    <body>
        <script>
            var values = prompt("Please enter a set of comma separated values.",
                "Apples,Oranges,Bananas");

            function splitAndReverseText(csv) {
                var parts = csv.split(",");
                parts.reverse();

                var reversedString = parts.join(",");

                alert(reversedString);
            }

            splitAndReverseText(values);
        </script>
    </body>
</html>
```

```html


<!DOCTYPE html>

<html lang="en">
<head>
    <title>Capitolo 6, Esempio 2</title>
</head>
<body>
    <script>
        var input = prompt("Please enter a pass phrase.", "");

        function isValid(text) {
            var myRegExp = /[^a-z\d ]/i;
            return !(myRegExp.test(text));
        }

        if (isValid(input)) {
            alert("Your passphrase contains only valid characters");
        } else {
            alert("Your passphrase contains one or more invalid characters");
        }
    </script>
</body>
</html>
```

```html


<!DOCTYPE html>

<html lang="en">
<head>
    <title>Capitolo 6, Esempio 3</title>
</head>
<body>
    <script>
        var myListString = "apple, 0.99, banana, 0.50, peach, 0.25, orange, 0.75";
        var theRegExp = /[^a-z]+/i;
        var myFruitArray = myListString.split(theRegExp);

        document.write(myFruitArray.join("<br />"));
    </script>
</body>
</html>
```

```html


<!DOCTYPE html>

<html lang="en">
<head>
    <title>Capitolo 6, Esempio 4</title>
</head>
<body>
    <script>
        var text = "He then said 'My Name is O'Connerly, yes " +
                   "that's right, O'Connerly'";

        document.write("Original: " + text + "<br/>");

        var myRegExp = /\B'|'\B/g;
        text = text.replace(myRegExp, '"');

        document.write("Corrected: " + text);
    </script>
</body>
</html>
```

```html


<!DOCTYPE html>

<html lang="en">
<head>
    <title>Capitolo 6, Esempio 5</title>
</head>
    <body>
        <div id="output"></div>
        <script>
            var html = "<h2>Hello World!</h2>" +
                "<p>We love JavaScript!</p>";

            var regex = /<[^>\r\n]+>|[^<>\r\n]+/g;
            var results = html.match(regex);

            document.getElementById("output").innerText = results.join("\r\n");
        </script>
    </body>
</html>
```

```html


<!DOCTYPE html>

<html lang="en">
<head>
    <title>Capitolo 6, Esempio 6</title>
</head>
    <body>
        <script src="ch6_Esempio6.js"></script>
        <script>
            var phoneNumber = prompt("Please enter a phone number.", "");
            
            if (isValidTelephoneNumber(phoneNumber)) {
                alert("Valid Phone Number");
            } else {
                alert("Invalid Phone Number");
            }

            var postalCode = prompt("Please enter a postal code.", "");

            if (isValidPostalCode(postalCode)) {
                alert("Valid Postal Code");
            } else {
                alert("Invalid Postal Code");
            }

            var email = prompt("Please enter an email address.", "");

            if (isValidEmail(email)) {
                alert("Valid Email Address");
            } else {
                alert("Invalid Email Address");
            }
        </script>
    </body>
</html>
```