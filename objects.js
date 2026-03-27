<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object in JS</title>
</head>
<body>
    <script >
        //object-collection(pair) of keys and its values


        //create an object using literal way 
      //object (kwta ,objects, arrays,functions)
        let student={
            name:"GAURI garg",
            age:18,
            isMarried:false,
            address:{
              //
            },
            course:"btech",
            branch:"cse",
            year:2025,
            getInfo:function(){
                return "My Education details are "+ student.branch+" "+student.year;
            },
            subjects:["Maths","English"],
            examDone:null

        };
        //to access objects's key or property
       //
        console.log(student.getInfo);
        console.log(student);
        console.log(typeof(student));

        //find length
        let keysLength=Object.keys(student)
        console.log(keysLength.length);

        //iterate objects key
        for(let i=0;i<keysLength.length;i++)
        console.log(student[keysLength]);

        //iterate objects key using for loop
        for(let x in student)
        {
            console.log(student[x]);
        }

        //create an object using new keyword
        let myInfo=new Object();
        myInfo.name="Gauri";
        myInfo.age=23;


        //access objects's keyusing[]
        console.log(myInfo['name']);
    </script>
</body>
</html>