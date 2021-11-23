
function compute()
    {
    var principal= document.getElementById("principal").value;
       //checks for less than zero and no input
    if(principal == "")
        {
            alert("Enter a positive number");
            document.getElementById("principal").focus();
            return;
        }
        else if(principal <= 0)
        {
            alert("Enter a positive number");
            document.getElementById("principal").focus();
            return;
        }
    
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
        //calculates the interest
    var interest = principal * years * rate /100;
 
    var year =  new Date().getFullYear()+parseInt(years);
    var resultCalc = document.getElementById("result");
    resultCalc.innerHTML = "If you deposit <mark>"+ principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"% </mark>\<br\>You will receive an amount of <mark>"+interest+" </mark>,\<br\>in the year <mark>"+year+" </mark>\<br\>";
        //Final display of results including highlights
}
    
function updateRate()
    {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval+"%"; 
            //added % to display when slider is moved
    }
        
