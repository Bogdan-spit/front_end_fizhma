//alert("не");
function guess()
{
    var num = prompt("Чаго");
    var daNum = 10;

    if (num == daNum) {
        return alert("Харош лучший");
    }
    else if (num > daNum) {
        alert("Кто ты воин");
        return guess();
    }
    else {
        alert("Фижма");
        return guess();
    }
}
//guess();

function fizma() {
    window.close();
}
setTimeout(fizma, 5000);