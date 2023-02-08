function ChangeMoney() {
    let Amount = document.getElementById("Amount").value;
    let FromA = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;


    if (FromA == "USD" && To == "VND") {
        Result = "Result: " + (Amount * 23000) + " Đ";
    }
    else if (FromA == "VND"&& To =="USD"){
        Result = "Result: "+ (Amount / 23000) + " $";
    }
    else if (FromA == "VND") {
        Result = "Result: " + Amount + " Đ"
    } else {
        Result = "Result: " + Amount + " $"
    }

    document.getElementById("Result").innerHTML = Result;
}
