document.addEventListener("DOMContentLoaded", function () {
    console.log("TechFlow App Loaded Successfully.");

    const calcButton = document.getElementById("calc-btn");

    if (calcButton) {
        calcButton.addEventListener("click", function () {
            console.log("კალკულატორის ღილაკზე დაჭერა დაფიქსირდა...");

            const planSelectElement = document.getElementById("plan-select"); 
            const planPrice = parseFloat(planSelectElement.value);

            const userCountInput = document.getElementById("user-count");
            const userCount = parseInt(userCountInput.value, 10);

            const monthCountInput = document.getElementById("month-count");
            const monthCount = parseInt(monthCountInput.value, 10);

            const resultDisplay = document.getElementById("total-price-display");

            if (isNaN(planPrice) || isNaN(userCount) || isNaN(monthCount)) {
                resultDisplay.innerText = "$ --";
                return;
            }

            const totalCost = planPrice * userCount * monthCount;
            resultDisplay.innerText = "$" + totalCost;
        });
    }
});
