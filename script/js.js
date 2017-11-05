let index=1;

function add()
{
    let body = document.getElementById("body");

    let row = document.createElement("tr");
    
    let name=document.createElement("td");
    let roll=document.createElement("td");
    let year=document.createElement("td");
    let branch=document.createElement("td");
    let check=document.createElement("td");
    check.className="kite";
    let check1 = document.createElement("input");
    check1.type = "checkbox";
    check1.className="checkbox";
    check1.onclick=function()
    {
        qq();
       
    }
    let icon=document.createElement("a");
    icon.className="glyphicon glyphicon-trash";  
   
    icon.onclick = function() {
       let n=this.parentNode.parentNode.childNodes[0].firstChild.nodeValue;
       this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
       let index=name1.indexOf(n);
      }

    let edit=document.createElement("a");
    edit.className="edit glyphicon-pencil";
    edit.onclick=function(){
        let gg=fun(this);
    }
      
    let tname=document.createTextNode(document.getElementById("name").value);
    let troll=document.createTextNode(document.getElementById("roll").value);
    let tyear=document.createTextNode(document.getElementById("year").value);
    let tbranch=document.createTextNode(document.getElementById("branch").value);

    document.getElementById("name").value="";
    document.getElementById("roll").value="";
    document.getElementById("year").value="";
    document.getElementById("branch").value="";

    name.appendChild(tname);
    roll.appendChild(troll);
    year.appendChild(tyear);
    branch.appendChild(tbranch);
    check.appendChild(icon);
    check.appendChild(edit);
    check.appendChild(check1);

    row.appendChild(name);
    row.appendChild(roll);
    row.appendChild(year);
    row.appendChild(branch);
    row.appendChild(check);  

    body.appendChild(row);

    index++;
}

function insert1()
{
    if(document.getElementById("demo1").style.display=="none")
    {
    let a1=document.getElementById('demo');
    a1.style.display=a1.style.display=="none"?"block":"none";
    }
    else
    {
        let a1=document.getElementById('demo');
         a1.style.display=a1.style.display=="none"?"block":"none";
         let a2=document.getElementById("demo1").style.display="none";
    }
}
function fun(k)
{
    let a=document.getElementById('demo');
    a.style.display = a.style.display=="none"?"none":"none";
    let b=document.getElementById("demo1");
    b.style.display = a.style.display=="none"?"block":"none";
    k.parentNode.parentNode.childNodes[0].firstChild.nodeValue=document.getElementById("name1").value;
    k.parentNode.parentNode.childNodes[1].firstChild.nodeValue=document.getElementById("roll1").value;
    k.parentNode.parentNode.childNodes[2].firstChild.nodeValue=document.getElementById("year1").value;
    k.parentNode.parentNode.childNodes[3].firstChild.nodeValue=document.getElementById("branch1").value;

    document.getElementById("name1").value="";
    document.getElementById("roll1").value="";
    document.getElementById("year1").value="";
    document.getElementById("branch1").value="";

}
function EDIT()
{
    if(document.getElementById("demo").style.display=="none")
    {
    let a1=document.getElementById('demo1');
    a1.style.display=a1.style.display=="none"?"block":"none";
    }
    else
    {
        let a1=document.getElementById('demo1');
         a1.style.display=a1.style.display=="none"?"block":"none";
         let a2=document.getElementById("demo").style.display="none";
}
}
function qq()
{
    let a=document.getElementsByClassName("checkbox");
    let c=-1;
    for (let x of a){
       if(x.checked)
       c=1;
    }
    let a1=document.getElementById('dd');
    if(c!=-1)
    a1.style.display="block";  
    else
    a1.style.display="none";
}
function Delete()
{
    let a=document.getElementsByClassName("checkbox");
    for(let i=0;i<a.length;i++)
    {
        if(a[i].checked)
     {
         console.log(i);
         document.getElementById("body").deleteRow(i);
         i=0;
         Delete();
         document.getElementById('dd').style.display="none";
         
    }
    }
  
}
