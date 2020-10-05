function GetNumber()
{
    a=document.getElementById("num1").value;
    b=document.getElementById("num2").value;
}
function Add()
{   GetNumber();
     document.getElementById('Result').innerHTML = +a + +b;
}

function Sub()
{
    GetNumber();
     document.getElementById('Result').innerHTML = (a - b);
}

function Multiplcation()
{
    GetNumber();
     document.getElementById('Result').innerHTML = a*b;
}

function Division()
{
    GetNumber();
    
    if(b===0)
    {
        console.log("b value cannot be zero ");
    }
else
    { 
     document.getElementById('Result').innerHTML = a/b;
    }

    
    
}


