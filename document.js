<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


       <input type="text" placeholder="Enter your Name" id="inputData"/>
       <h2 id="text"></h2>
       <button onclick="changeColor()">Click on me</button>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita consequatur explicabo iste facilis reprehenderit voluptates? Repudiandae, porro temporibus repellendus, pariatur optio eum accusamus at esse consequuntur labore est vel. Animi.</p>
    <script>
        function changeColor(){
            let inputValue=document.getElementById("inputData").value;
            let inputText=document.getElementById("text");
            inputText.innerHTML=inputValue;

            inputText.style.color= "blue";

           inputText.style.backgroundColor="#"+ Math.floor(Math.random() * 16777215).toString(16);

          
        }
        let para=document.getElementsByTagName("p")[0];
          function changeColors(){
            para.style.color="orange";
            
          }
          para.addEventListener("mouseover",changeColors);
    </script>    
    
</body>
</html>