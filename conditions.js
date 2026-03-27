<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>conditions in JS</title>
</head>
<body>
   <script>
    //conditional statement is the control flow of execution allowing program to perform different actions based in true or false 

    //if
    let age=23;
    if(age<18){
        console.log("Eligible for vote casting");
    }
    console.log("Eligible for vote casting");

    //if else
    let myAge=24;
    if(myAge>=18){
        console.log("YOU CAN DO VOTE CASTING");
    }
    else{
        CONSOLE.LOG("wait for next time");
    }

    //switch statment
    let grade='c';
    switch(grade)
    {
    case'a':
    result="First Division";
    break;
    case'b':
    result="second division";
    break;
    default:result="fail";
    }
     console.log(result);

     //else if statement
     let marks=32;
      if(marks>33 && marks<60){
        console.log("grade first");
     
     
     }
     else if(marks<=33){
        console.log("Grade second");
     }
     else{
        console.log("grade third")
     }



   </script> 
</body>
</html>