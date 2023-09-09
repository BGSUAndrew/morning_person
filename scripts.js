function submitButton() {
    var goalone = document.getElementById('item1').value;
    var goaltwo = document.getElementById('item2').value;
    var goalthree = document.getElementById('item3').value;
    console.log(goalone);
    console.log(goaltwo);
    console.log(goalthree);
    localStorage.setItem("itemOne",goalone);
    localStorage.setItem("itemTwo",goaltwo);
    localStorage.setItem("itemThree",goalthree);

}

var storedValue = localStorage.getItem("itemOne");
var displayOne = document.getElementById('goalone');
displayOne.innerHTML = storedValue;

var storedValueTwo = localStorage.getItem("itemTwo");
var displayTwo = document.getElementById('goaltwo');
displayTwo.innerHTML = storedValueTwo;

var storedValueThree = localStorage.getItem("itemThree");
var displayThree = document.getElementById('goalthree');
displayThree.innerHTML = storedValueThree;

function waterSelection() {
    if (document.getElementById('water_yes').checked) {
        document.getElementById("water_result").style.display="block";
        document.getElementById("waterYes").style.display="block";
        document.getElementById("waterNo").style.display="none";
    } else if(document.getElementById('water_no').checked) {
        document.getElementById('water_result').style.display="block";
        document.getElementById("waterYes").style.display="none";
        document.getElementById("waterNo").style.display="block";
    }
}