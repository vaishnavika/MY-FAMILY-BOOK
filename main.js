var photos=["amydad.jpg","amymom.jpg","amy2.jpeg","amybro.jpg"];
var members=["Amith","Vineetha","Me","Vaishnav"];
var i=0;
function next()
{
document.getElementById("i1").src=photos[i];
document.getElementById("f1").innerHTML=members[i];
i++;
if(i==4)
    i=0;
}

function previous()
{
document.getElementById("i1").src=photos[i];
document.getElementById("f1").innerHTML=members[i];
i--;
if(i==0)
    i=3;
}
