function calculateCost(){

    let rate =
    parseFloat(document.getElementById("service").value);

    let hours =
    parseFloat(document.getElementById("hours").value);

    if(isNaN(hours) || hours <= 0){

        alert("Please enter valid hours");
        return;
    }

    let monthlyCost = rate * hours;
    let yearlyCost = monthlyCost * 12;

    document.getElementById("monthlyCost").innerHTML =
    "Monthly Cost: $" + monthlyCost.toFixed(2);

    document.getElementById("yearlyCost").innerHTML =
    "Yearly Cost: $" + yearlyCost.toFixed(2);
}