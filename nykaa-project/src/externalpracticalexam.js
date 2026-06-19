<!DOCTYPE html>
<html>
<head>
    <title>Even and Odd Number Checker</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            margin-top: 100px;
        }

        .container {
            width: 350px;
            margin: auto;
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px gray;
        }

        h2 {
            color: #333;
        }

        input {
            width: 80%;
            padding: 10px;
            margin: 10px 0;
        }

        button {
            padding: 10px 20px;
            background-color: blue;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: darkblue;
        }

        #result {
            margin-top: 15px;
            font-size: 20px;
            font-weight: bold;
        }
    </style>
</head>

<body>

    <div class="container">
        <h2>Even and Odd Number Checker</h2>

        <input type="number" id="num" placeholder="Enter a Number">
        <br>

        <button onclick="checkNumber()">Check</button>

        <p id="result"></p>
    </div>

    <script>
        function checkNumber() {
            let num = document.getElementById("num").value;

            if (num === "") {
                document.getElementById("result").innerHTML =
                "Please enter a number!";
            }
            else if (num % 2 == 0) {
                document.getElementById("result").innerHTML =
                num + " is an Even Number";
            }
            else {
                document.getElementById("result").innerHTML =
                num + " is an Odd Number";
            }
        }
    </script>

</body>
</html>