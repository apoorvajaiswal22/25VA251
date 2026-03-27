<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Function in JS</title>
</head>
<body>
    <script>
        //function-block of code , design to perform the specific task
        //types-with , without and default parameter
        //synchronous and asynchronous
        //normal function

        function demo(){
            console.log("Hello JS");
        }

        demo(); //function calling 

        //function with parameter
        function demo1(text){
            console.log("Hello " + text);
        }

        demo1("React");

        //function with default parameter
        function add(a,b=4){//parameter

            var num1=a;
            var num2=b;
            var res=num1+num2;
            console.log("Addition of two no. is "+res);

            //default values is given to last var so for no issue in over-writing
        }
        add(2,3);//arguments

        //by default function;s nature is synchronous

        function calculation(){

            function add(a,b){
                console.log("Addition is "+(a+b));
            }
            function sub(x,y){
                console.log("Subtraction is "+(x-y));
            }
            function mul(p,q){
                console.log("Multiplication is "+(p*q));
            }
         mul(3,5);
        add(2,7);
        sub(9,5);

        }

        calculation();

        //anonymous function-function that does not have identifier(name) associated
       let msg=function(){
            console.log("Hello ABES");


       }
       msg();

       //short code for above function i.e arrow function
          let msg1=()=>console.log("Hello React");
          msg1();
       
    
        //arrow function with multiple lines
        let msg2=(age)=>{
            if(age>=18){
                console.log("Valid Age");
            }
        }
        msg2(23);

        //call back function-function passed as an argument in another function
        function cal(a,b,callback){
            var num1=a;
            console.log("FIRST NO. IS "+num1);
            var num2=b;
            console.log("Second no. is "+ num2);

            var res=num1+num2;
            callback(res);

        }
        function display(res){
            console.log("Result is "+res);
        }
        cal(3,4,display);

        //callback using SetTimeout API
        function greeting(){
           document.writeln("Hello Student");

        }
        function loading(){
            document.writeln("Data Loading...");

        }
        loading();
        setTimeout(greeting,2000);

        //call by hell
        //promises-part of advance JS (needs to much practice)
        //promises stages-pending ,rejected, fulfilled

        let promise=new Promise(function(resolve,reject){
            let myAge=23;
            if(myAge>=18){
                resolve("Valid age");
            }
                else{
                    reject("Wait for next year");
                }
            
        });
        promise.then(result=>console.log(result)).catch(error=>console.log(error));
        //then-true and catch=false return 

        //fetch API

        async function userData(){
            let userResponse=await fetch('https://fakestoreapi.com/products');
            let userDataRes=await userResponse.json();
            console.log(userResponse);
        }
        userData();

        //async await using try catch
        async function productDetail(){
            try{
                let proRes=await fetch('https://fakestoreapi.com/products');
                let proResData=await proRes.json();
                console.log(proResData);
               
            }
            catch(error){
                console.log("Not Valid data "+error);
            }
        }
        productDetail(); 
        
        //IIFE 
        (function(){
            console.log("hello IIFE");
        })();

        (msg=>console.log("IIFE"))();
        console.log(typeof(msg));

        //local storage
        let myInfo={
            name:"Apoorva",
            age:19,
            mobno:9555750,
            course:"B.tech",
            year:1,
            College:"ABES",
        }
        //convert object into JSON string
        let myInfoData=JSON.stringify(myInfo);

        //set the data
        localStorage.setItem('prefrences',myInfoData);

       //get data and retereive the data
        let myPrefrence=localStorage.getItem('prefrences');

         //retrieve the data and convert into JSON object
         let myInfoPre=JSON.parse(myPrefrence);

         //acess data
         console.log(myInfoPre.name);

         //Hight order function -many functions 
         //to make the code reusable ,readable 
         //map-returns new array

         let num=[1,2,3,4,5,56];
         let result=num.map(n=>n*2);
         console.log(result);

         //reduce-returns single value
         let sum=num.reduce((total,n)=>total+n);
         console.log(sum);

         //filter-creates nwe array that passes test templates
         let sorting=num.filter(n=>n>3);
         console.log(sorting);
         
         //forEach
        let answer= num.forEach((n=>n*n));
        // console.log(answer);
        console.log(`updated array is ${num}`);




    
        
    </script>
</body>
</html>