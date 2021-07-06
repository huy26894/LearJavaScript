/* <script src="https://code.jquery.com/jquery-latest.js"></script>

$(function light(){
    $('p').click(function(){
        var clicked = click();
        if(clicked)
        {
            document.getElementById("picture").innerHTML="<img src='anh/densang.png'/>";
        }
        else
        {
            document.getElementById("picture").innerHTML="<img src='anh/dentat.jpg'/>";
        }
    });
}); */

function lighton() 
{
    document.getElementById("picture").innerHTML="<img src='anh/densang.png'/>";
}

function lightoff() 
{
    document.getElementById("picture").innerHTML="<img src='anh/dentat.png'/>";
}