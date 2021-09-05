function thisdate(){
    var dd = Number(document.getElementById('date').value);
    var mm = Number(document.getElementById("month").value);
    var yy = Number(document.getElementById("year").value);
} 
function datevalidation(){
if (isNaN(dd) || dd < 1 || dd > 31);
alert("invalid date")
document.getElementById("date")
}