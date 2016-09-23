/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.addEventListener("load", function ()
{
    TaskOne();
    TaskTwo();
    TaskThree();
    TaskFour();
    TaskFive();
    TaskSix();
    console.log("asdasd");
});



function Person(f, l, p, m)
{
    this.firstName = f;
    this.lastName = l;
    this.phone = p;
    this.mail = m;
}

function TaskOne()
{
    var containerDiv = document.getElementById("divWrapper1");
    var list = containerDiv.getElementsByTagName("div");
    for (var i = 0; i < list.length; i++)
    {
        list[i].style.backgroundColor = "red";
    }
}

function TaskTwo()
{

    var PersonsArray = [new Person("John", "Arne", 56462763, "Ja@johnarne.ja"), new Person("Not", "John", 6685646, "nj@notjohn.nj")];
    PersonsArray.push(new Person("aPerson", "Jensen", 123456789, "ApJ@gmail.com"));

    var tp = document.getElementById("TablePers").getElementsByTagName("tbody")[0];

    for (var i = 0; i < PersonsArray.length; i++)
    {

        var newRow = tp.insertRow(i);
        var CellFName = newRow.insertCell(0);
        var CellLName = newRow.insertCell(1);
        var CellPhone = newRow.insertCell(2);
        var CellMail = newRow.insertCell(3);

        CellFName.innerHTML = PersonsArray[i].firstName;
        CellLName.innerHTML = PersonsArray[i].lastName;
        CellPhone.innerHTML = PersonsArray[i].phone;
        CellMail.innerHTML = PersonsArray[i].mail;

    }

}

function TaskThree()
{

    var containerDiv = document.getElementById("divWrapper2");
    var innerDivs = containerDiv.getElementsByTagName("div");
    for (var i = 0; i < innerDivs.length; i++)
    {

        innerDivs[i].style.width = "100px";
        innerDivs[i].style.height = "100px";

        if (i === 0)
        {
            innerDivs[i].style.backgroundColor = "red";
            innerDivs[i].addEventListener("click", function () {
                alert("Div1");
            });
        } else if (i === 1)
        {
            innerDivs[i].style.backgroundColor = "green";
            innerDivs[i].addEventListener("click", function () {
                alert("Div2");
            });
        } else
        {
            innerDivs[i].style.backgroundColor = "blue";
            innerDivs[i].addEventListener("click", function () {
                alert("Div3");
            });
        }
    }

}


function TaskFour()
{

    var containerDiv = document.getElementById("divWrapper3");
    var innerDiv = containerDiv.getElementsByTagName("div");

    for (var i = 0; i < innerDiv.length; i++)
    {
        innerDiv[i].style.width = "200px";
        innerDiv[i].style.height = "200px";

        if (i === 0)
        {
            innerDiv[i].style.backgroundColor = "red";
            innerDiv[i].addEventListener("mouseover", function () {
                alert("Div1");
            });
            innerDiv[i].addEventListener("mouseout", function () {
                this.parentElement.removeChild(this);
            });
        } else if (i === 1)
        {
            innerDiv[i].style.backgroundColor = "green";
            innerDiv[i].addEventListener("mouseover", function () {
                alert("Div2");
            });
            innerDiv[i].addEventListener("mouseout", function () {
                this.parentElement.removeChild(this);
            });
        } else
        {
            innerDiv[i].style.backgroundColor = "blue";
            innerDiv[i].addEventListener("mouseover", function () {
                alert("Div3");
            });
            innerDiv[i].addEventListener("mouseout", function () {
                this.parentElement.removeChild(this);
            });
        }
    }

}

// TASK 5
function TaskFive()
{
    document.getElementById("myForm").addEventListener("submit", appsend);
    document.getElementById("myForm").style.backgroundColor = "cyan";
}

function appsend(e)
{
 
    console.log(this.getElementsByTagName("input")[0].value);
    console.log(this.getElementsByTagName("input")[1].value);
    var gender = "not selected";

    if (document.getElementById('maleCheck').checked) {
        gender = "male";
    } else if (document.getElementById('femaleCheck').checked) {
        gender = "female";
    }
    console.log(gender);
    
    if (this.getElementsByTagName("input")[4].checked)
    {
        var spamCheck = "wants lovely spam.";
    } else
    {
        var spamCheck = "does not want spam right now.";
    }
    console.log(spamCheck);

    e.preventDefault();
}
// ------

function TaskSix()
{
    var list = document.getElementsByTagName("li");
    for (var i = 0; i < list.length; i++)
    {
        !function (i)
        {
            if ((i + 1) % 2 === 0)
            {
                list[i].style.backgroundColor = "red";
            } else
            {
                list[i].style.backgroundColor = "white";
            }
            
            list[i].addEventListener("mouseover", function () {
                list[i].style.fontSize = "x-large";
            });
            
            list[i].addEventListener("mouseout", function () {
                list[i].style.fontSize = "medium";
            });

            list[i].addEventListener("click", function () {
                console.log("Hello " + list[i].innerHTML);
            });

        }(i);
    }
}
