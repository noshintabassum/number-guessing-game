var num = prompt("enter a number from 1 to 5 : ");
var ranNum = Math.floor(Math.random() * 5 + 1);
if (num == ranNum) {
    document.write("you guessed : " + num + "<br>");
    document.write("winning number was:" + ranNum + "<br>");
    document.write("so," + "<br>")
    document.write("you win!!!!!!!!!!!!!!!!!");
} else {

    document.write("you guessed : " + num + "<br>");
    document.write("winning number was:" + ranNum + "<br>");
    document.write("so," + "<br>")
    document.write("you lost!!!!!!!!!!!!!!!!!");
}