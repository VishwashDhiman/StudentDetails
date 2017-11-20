function add()
{
    //Creating a body tag to insert new row in it.

    let body = document.getElementById("body");

    //Creating new elements inserted in row.

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

    //checking if any checkbox is checked for collapsing.

    check1.onclick=function()
    {
        qq();
    }
    let icon=document.createElement("a");
    icon.className="glyphicon glyphicon-trash";

    //Performing delete operation

    icon.onclick = function() {
        if(confirm('Do you want to delete')){
       let n=this.parentNode.parentNode.childNodes[0].firstChild.nodeValue;
       this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        }
      }

    let edit=document.createElement("a");
    edit.className="edit glyphicon-pencil";

    //Performs Edit operation

    edit.onclick=function(){
        fun(this);
    }
      
    let ename=document.getElementById("name").value;
    let eroll=document.getElementById("roll").value;
    let eyear=document.getElementById("year").value;
    let ebranch=document.getElementById("branch").value;

    //Validates the enrties

    if(ename=='' || ename==' ' || !(/^[a-zA-Z]*$/g).test(ename))
    alert('Enter correct name ');
    else if(isNaN(eroll) || eroll=='' || eroll==' ')
    alert('Enter valid roll number');
    else if(isNaN(eyear) || eyear=='' || eyear==' ')
    alert('Enter valid year');
    else if(ebranch=='' || ebranch==' ' || !(/^[a-zA-Z]*$/g).test(ename))
    alert('Enter valid branch');
    else{
    let tname=document.createTextNode(ename);
    let troll=document.createTextNode(eroll);
    let tyear=document.createTextNode(eyear);
    let tbranch=document.createTextNode(ebranch);

    //Setting default values to zero

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
    }
}

//Checks the insert collapsing

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

//Performs Edit operations

function fun(k)
{
    const a=document.getElementById('demo');
    a.style.display = a.style.display=="none"?"none":"none";
    const b=document.getElementById("demo1");
    b.style.display = a.style.display=="none"?"block":"none";

    let ename=document.getElementById("name1").value;
    let eroll=document.getElementById("roll1").value;
    let eyear=document.getElementById("year1").value;
    let ebranch=document.getElementById("branch1").value;

    //Validates the enrties

    if(ename=='' || ename==' ' || !(/^[a-zA-Z]*$/g).test(ename))
    alert('Enter correct name ');
    else if(isNaN(eroll) || eroll=='' || eroll==' ')
    alert('Enter valid roll number');
    else if(isNaN(eyear) || eyear=='' || eyear==' ')
    alert('Enter valid year');
    else if(ebranch=='' || ebranch==' ' || !(/^[a-zA-Z]*$/g).test(ename))
    alert('Enter valid branch');
    else{

    k.parentNode.parentNode.childNodes[0].firstChild.nodeValue=ename;
    k.parentNode.parentNode.childNodes[1].firstChild.nodeValue=eroll;
    k.parentNode.parentNode.childNodes[2].firstChild.nodeValue=eyear;
    k.parentNode.parentNode.childNodes[3].firstChild.nodeValue=ebranch;

    document.getElementById("name1").value="";
    document.getElementById("roll1").value="";
    document.getElementById("year1").value="";
    document.getElementById("branch1").value="";
    }

}

//Checks the edit buttons collapsing

function EDIT()
{
    if(document.getElementById("demo").style.display=="none")
    {
    const a1=document.getElementById('demo1');
    a1.style.display=a1.style.display=="none"?"block":"none";
    }
    else
    {
        const a1=document.getElementById('demo1');
         a1.style.display=a1.style.display=="none"?"block":"none";
         const a2=document.getElementById("demo").style.display="none";
    }
}

//Checks if any check box is checked or not

function qq()
{
    const a=document.getElementsByClassName("checkbox");
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

//Performs multidelete operations

function Delete()
{
    const a=document.getElementsByClassName("checkbox");
    for(let i=0;i<a.length;i++)
    {
        if(a[i].checked)
        {
             document.getElementById("body").deleteRow(i);
            i=0;
            Delete();
            document.getElementById('dd').style.display="none";    
        }
    }
}

