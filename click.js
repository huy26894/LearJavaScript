
    function hello(){
        var a = document.getElementById("tb1").value; 

        if (a == "") 
        {
            alert("Welcome to JavaScript");
        }
        else 
        {
            alert("Welcome to " + a);
        }               
    }
