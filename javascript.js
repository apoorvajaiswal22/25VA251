<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>JAVA SCRIPT</h2>
   


    <script>
        //js variables (containers for data values) dynamically typed languade declaring - var ,let , const//
        //using var keyword(participate in hosting face not others )
        var myName="Apoorva";//global
        var hell=243;
        document.write(myName); //the document is the global object that represents the web page loaded in the browser
        console.log(myName);//o/p on console window
        //js execution and scope in js (Global and local[block])
        function hello(){
            var msg="Thanks to visit!";
            console.log(msg);//local or block
        }
        hello();
        //variable declaration using let and const
        let myRollno=12345;
        console.log(myRollno);

       // let myRollno=54321;
        console.log(myRollno);


        const myPhone=8005010138;
        console.log("my contact no is"+myPhone);



         
    </script>
</body>
</html>