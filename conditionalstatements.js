<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
     <h2>check your age to cast the vote</h2>
    <form action="">
        <input type="number" placeholder="Enter your age" name="age" id="age"/>
        <input type="submit" onclick="result()" value="submit">
    </form>
   <script>
   
    function result(){
        let myAge=document.getElementById('age').value;
        if(myAge>=18){
            alert("Eligible");

        }
        else{
            alert("not eligible");
        }
    }
    console.log(result);
   </script> 
</body>
</html>