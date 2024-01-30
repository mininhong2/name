let win=null;


function displayElementValue(id, text)
{
    var element = document.getElementById(id);
    element.value = text;
}

function getElementValue(id)
{
    var element = document.getElementById(id);
    return element.value;
}

function displayContactNotFound()
{
    alert("Not found");
}

function doSave() 
{
    if(win == null || win.closed)
	win = window.open("", "outWin", "width=100,height=50");
    let legend = document.getElementById("srcText");
    win.document.open();
    win.document.write(legend.value);
    win.document.close();
   
}

function doFind()
{
    var name = getElementValue("name");
    if(name=="Rob Miles")
    {
        displayElementValue("address", "");
        displayElementValue("phone", "");
    }
    else {
        displayContactNotFound();
    }
}