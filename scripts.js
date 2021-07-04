const dishList = document.querySelectorAll(".dish");
let total = 0;


function checkDish(dishName, isDishChecked, dishToCheck, dishPrice) {
    if (dishName === dishToCheck) {
        if (isDishChecked === true) {
            total += dishPrice;
        } else {
            total -= dishPrice;
        }
    }
};

function alertHandler() {
    alert(`Your order was submitted successfully. Your total is: $${parseFloat(total).toFixed(2)}`)
};

dishList.forEach(function (dishElement) {
    dishElement.addEventListener("click", function () {
        const dishListData = [{
                name: "Bourak",
                price: 5.99
            },
            {
                name: "Maakouda",
                price: 3.99
            },
            {
                name: "Mahjouba",
                price: 4.99
            },
            {
                name: "Couscous",
                price: 14.99
            },
            {
                name: "Shorba",
                price: 13.99
            },
            {
                name: "Tajine",
                price: 11.99
            },
            {
                name: "Makroud",
                price: 2.25
            },
            {
                name: "Baklawa",
                price: 3.00
            },
            {
                name: "Basbousa",
                price: 1.25
            }
        ];
        dishListData.forEach(function (dish) {
            checkDish(dishElement.name, dishElement.checked, dish.name, dish.price);
        })
    })
})