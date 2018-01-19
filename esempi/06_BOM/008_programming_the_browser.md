```html
<!DOCTYPE html>

<html lang="en">
<head>
    <title>Capitolo 8, Esempio 1</title>
</head>
    <body>
        <script>
            function geoSuccess(position) {
                var coords = position.coords;
                var latitude = coords.latitude;
                var longitude = coords.longitude;

                var message = "You're at " + latitude + ", " + longitude

                alert(message);
            }

            function geoError(errorObj) {
                alert(errorObj.message);
            }

            navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
        </script>
    </body>
</html>
```

```html

<!DOCTYPE html>

<html lang="en">
<head>
    <title>Capitolo 8, Esempio 2</title>
</head>
    <body>
        <script>
            var colorDepth = window.screen.colorDepth;

            switch (colorDepth) {
                case 1:
                case 4:
                    document.bgColor = "white";
                    break;
                case 8:
                case 15:
                case 16:
                    document.bgColor = "blue";
                    break;
                case 24:
                case 32:
                    document.bgColor = "skyblue";
                    break;
                default:
                    document.bgColor = "white";
            }

            document.write("Your screen supports " + colorDepth +
                              "bit color");
        </script>
    </body>
</html>
```

```html

<!DOCTYPE html>

<html lang="en">
<head>
    <title>Capitolo 8, Esempio 3</title>
</head>
<body>
    <img src="" width="200" height="150" alt="My Image" />
    <script>
        var myImages = [
            "usa.gif",
            "canada.gif",
            "jamaica.gif",
            "mexico.gif"
        ];

        var imgIndex = prompt("Enter a number from 0 to 3", "");

        document.images[0].src = myImages[imgIndex];
    </script>
</body>
</html>
```

```html

<!DOCTYPE html>

<html lang="en">
<head>
    <title>Capitolo 8, Esempio 4</title>
</head>
    <body>
        <script>
            function geoSuccess(position) {
                var coords = position.coords;
                var latitude = coords.latitude;
                var longitude = coords.longitude;

                var message = "You're at " + latitude + ", " + longitude

                alert(message);
            }

            function geoError(errorObj) {
                alert(errorObj.message);
            }

            if (typeof navigator.geolocation != "undefined") {
                navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
            } else {
                alert("This page uses geolocation, and your browser doesn't support it.");
            }
        </script>
    </body>
</html>
```

```html

<!DOCTYPE html>

<html lang="en">
<head>
    <title>Capitolo 8, Esempio 5</title>
</head>
<body>
    <script>
        function getBrowserName() {
            var lsBrowser = navigator.userAgent;

            if (lsBrowser.indexOf("MSIE") >= 0) {
                return "MSIE";
            } else if (lsBrowser.indexOf("Firefox") >= 0) {
                return "Firefox";
            } else if (lsBrowser.indexOf("Chrome") >= 0) {
                return "Chrome";
            } else if (lsBrowser.indexOf("Safari") >= 0) {
                return "Safari";
            } else if (lsBrowser.indexOf("Opera") >= 0) {
                return "Opera";
            } else {
                return "UNKNOWN";
            }
        }

        function getBrowserVersion() {
            var ua = navigator.userAgent;
            var browser = getBrowserName();
            var findIndex = ua.indexOf(browser) + browser.length + 1;
            var browserVersion = parseFloat(ua.substring(findIndex, findIndex + 3));

            return browserVersion;
        }

        var browserName = getBrowserName();
        var browserVersion = getBrowserVersion();

        if (browserName == "MSIE") {
            if (browserVersion < 9) {
                document.write("Your version of Internet Explorer is too old");
            } else {
                document.write("Your version of Internet Explorer is fully supported");
            }
        } else if (browserName == "Firefox") {
            document.write("Firefox is fully supported");
        } else if (browserName == "Safari") {
            document.write("Safari is fully supported");
        } else if (browserName == "Chrome") {
            document.write("Chrome is fully supported");
        } else if (browserName == "Opera") {
            document.write("Opera is fully supported");
        } else {
            document.write("Sorry this browser version is not supported.");
        }
    </script>
</body>
</html>
```