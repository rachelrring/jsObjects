const myObjs = [];
function saveMyData(){
    let newObj = {}
    Object.assign(newObj, myObjs)
    let oname = document.getElementById("name").value;
    let olname = document.getElementById("surname").value;
    let oyear = document.getElementById("year").value;
    let ocourse = document.getElementById("course").value;
    newObj.name = oname;
    newObj.surname = olname;
    newObj.year = oyear;
    newObj.course = ocourse;
    myObjs.push(newObj);
    console.log(myObjs);
}
function writeP(){
    pa = document.getElementById("myp");
    pa.innerHTML = "";
    for(p of myObjs){
        pa.innerHTML += "Hello "+p.name+" "+p.surname+", welcome to year "+p.year
        +" of the "+p.course+" programme at TU Dublin in Tallaght!<br />";
    }
}

