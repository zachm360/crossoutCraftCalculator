let scrapValue100;
let wiresValue100;
let batteryValue100;
let copperValue100;
let plasticValue100;
let electronicValue100;
let uraniumValue100;

document.getElementById("factions").addEventListener("change", updateItemOptions);
document.getElementById("rarity").addEventListener("change", updateItemOptions);
document.getElementById("type").addEventListener("change", updateItemOptions);

// Function to update the item options based on selected values
function updateItemOptions() {
    let faction = document.getElementById("factions").value;
    let rarity = document.getElementById("rarity").value;
    let type = document.getElementById("type").value;
    let itemDropdown = document.getElementById("item");
    // Clear previous options
    itemDropdown.innerHTML = "";
    // Add item options based on selected values
    if (faction === "engineers" && rarity === "common" && type === "weapons") {
        addItemOption("chord", "Chord");
        addItemOption("lupara", "Lupara");
        addItemOption("avenger", "Avenger");
    }
    if (faction === "engineers" && rarity === "rare" && type === "weapons") {
        addItemOption("littleBoy", "Little Boy");
        addItemOption("spitfire", "Spitfire");
    }
    if (faction === "engineers" && rarity === "common" && type === "cabin") {
        addItemOption("sprinterCabin", "Sprinter");
        addItemOption("huntsman", "Huntsman");
        addItemOption("docker", "Docker");
        addItemOption("wwt1", "WWT1");
    }
    if (faction === "engineers" && rarity === "common" && type === "hardware") {
        addItemOption("carJack", "Car Jack");
        addItemOption("radio", "Radio");
        addItemOption("r1Breeze", "R1 Breeze");
        addItemOption("ruby", "Ruby");
        addItemOption("fuelBarrel", "Fuel Barrel");
        addItemOption("aviator", "Aviator");
    }
    if (faction === "engineers" && rarity === "common" && type === "movementParts") {
        addItemOption("smallWheel", "Small Wheel");
        addItemOption("smallWheelSt", "Small Wheel St");
        addItemOption("mediumWheel", "Medium Wheel");
        addItemOption("mediumWheelSt", "Medium Wheel St");
    }

    // Add more conditions for other item options
    // Helper function to add an option to the item dropdown
    function addItemOption(value, text) {
        let option = document.createElement("option");
        option.value = value;
        option.textContent = text;
        itemDropdown.appendChild(option);
    }
    // Hide item dropdown if no options are available
    if (itemDropdown.options.length === 0) {
        itemDropdown.style.display = "none";
    } else {
        itemDropdown.style.display = "block";
    }
}
// Call the updateItemOptions function initially to populate the item dropdown
updateItemOptions();

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("resourceMarketValues").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission and page refresh
        // Get the values
        scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        wiresValue100 = parseFloat(document.getElementById("wireValue").value);
        batteryValue100 = parseFloat(document.getElementById("batteryValue").value);
        copperValue100 = parseFloat(document.getElementById("copperValue").value);
        plasticValue100 = parseFloat(document.getElementById("plasticValue").value);
        electronicValue100 = parseFloat(document.getElementById("electronicValue").value);
        uraniumValue100 = parseFloat(document.getElementById("uraniumValue").value);

        // Use the values as needed
        console.log("Scrap value:", scrapValue100);
        console.log("Wires value:", wiresValue100);
        console.log("Batteries value:", batteryValue100);
        console.log("Copper value:", copperValue100);
        console.log("Plastic value:", plasticValue100);
        console.log("Electroincsvalue:", electronicValue100);
        console.log("Uranium value:", uraniumValue100);
        // Reset the form if desired event.target.reset();
    });
});
// Update rareWorkBenchCoupon based on selected option
let rareWorkBenchCoupon = 3;
let specialWorkBenchCoupon = 6;
let epicWorkBenchCoupon = 15;
let legendaryWorkbenchCoupon = 75;

function updateWorkbenchCoupons() {
    let workbenchOption = document.getElementById("workbenchOption").value;
    if (workbenchOption === "free") {
        rareWorkBenchCoupon = 0;
        specialWorkBenchCoupon = 0;
        epicWorkBenchCoupon = 0;
        legendaryWorkbenchCoupon = 0;
    } else if (workbenchOption === "discounted") {
        rareWorkBenchCoupon = 2;
        specialWorkBenchCoupon = 4.5;
        epicWorkBenchCoupon = 11;
        legendaryWorkbenchCoupon = 56;
    } else if (workbenchOption === "full") {
        rareWorkBenchCoupon = 3;
        specialWorkBenchCoupon = 6;
        epicWorkBenchCoupon = 15;
        legendaryWorkbenchCoupon = 75;
    }
}

//xbox Live workbench discounts
//Rare 2 instead of 3 Special 4.50 instead of 6 Epic 11 instead of 15 Legendary 56 instead of 75

function submitCraftingCost() {
    let selectedItem = document.getElementById("item").value;

    if (selectedItem === "chord") {
        getChordCost();
    } else if (selectedItem === "carJack") {
        getCarJackCost();
    } else if (selectedItem === "sprinterCabin") {
        getSprinterCabCost();
    } else if (selectedItem === "smallWheel") {
        getSmallWheelCost();
    } else if (selectedItem === "smallWheelSt") {
        getSmallWheelStCost();
    } else if (selectedItem === "huntsman") {
        getHuntsmanCost();
    } else if (selectedItem === "lupara") {
        getLuparaCost();
    } else if (selectedItem === "radio") {
        getRadioCost();
    } else if (selectedItem === "r1Breeze") {
        getR1BreezeCost();
    } else if (selectedItem === "ruby") {
        getRubyCost();
    } else if (selectedItem === "avenger") {
        getAvengerCost();
    } else if (selectedItem === "docker") {
        getDockerCost();
    } else if (selectedItem === "mediumWheel") {
        getMediumWheelCost();
    } else if (selectedItem === "mediumWheelSt") {
        getMediumWheelStCost();
    } else if (selectedItem === "fuelBarrel") {
        getFuelBarrelCost();
    } else if (selectedItem === "aviator") {
        getAviatorCost();
    } else if (selectedItem === "wwt1") {
        getWwt1Cost();
    } else if (selectedItem === "littleBoy") {
        getLittleBoyCost();
    } else if (selectedItem === "spitfire") {
        getSpitfireCost();
    }
    //                   Common Item Crafting Cost                                     //
    // Chord Craft Cost //

    function getChordCost() {
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let chordScrap = scrapValue100 * .30;
        let chordCopper = copperValue100 * .06;
        let chordCost = chordScrap + chordCopper;
        let chordMarketValue = parseFloat(prompt("What is the current market price of a Chord Machine Gun?"));
        console.log("The cost to craft a Chord is " + chordCost);
        let chordMarketValueElement = document.getElementById("chordMarketValue");
        chordMarketValueElement.textContent = "The current Buy Price of the Chord " + chordMarketValue + " coin.";
        let chordCostElement = document.getElementById("chordCost");
        chordCostElement.textContent = " The cost to craft a Chord is " + chordCost + " coin.";
        let chordRecommendationElement = document.getElementById("chordRecommendation");
        chordRecommendationElement.textContent = chordRecommendation;
        let chordInfoElement = document.getElementById("chordInfo");

        if (isNaN(chordCost)) {
            chordRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (chordCost >= chordMarketValue) {
            chordRecommendationElement.textContent = "Buy the Chord for an estimated savings of " + (chordCost - chordMarketValue) + " coin";
        } else {
            chordRecommendationElement.textContent = "Craft the Chord for an estimated savings of " + (chordMarketValue - chordCost) + " coin";
        }
        chordInfoElement.style.display = "block";
    }
    // Car Jack Craft Cost
    function getCarJackCost() {
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let carJackScrap = scrapValue100 * .20;
        let carJackCopper = copperValue100 * .04;
        let carJackCost = carJackScrap + carJackCopper;
        let carJackMarketValue = parseFloat(prompt("What is the current market price of a Car jack?"));
        console.log("The cost to craft a Car jack is " + carJackCost);
        let carJackMarketValueElement = document.getElementById("carJackMarketValue");
        carJackMarketValueElement.textContent = "The current Buy Price of the CarJack is " + carJackMarketValue + " coin.";
        let carJackCostElement = document.getElementById("carJackCost");
        carJackCostElement.textContent = " The cost to craft a Carjack is " + carJackCost + " coin.";
        let carJackRecommendationElement = document.getElementById("carJackRecommendation");
        carJackRecommendationElement.textContent = carJackRecommendation;
        let carJackInfoElement = document.getElementById("carJackInfo");
        if (isNaN(carJackCost)) {
            carJackRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (carJackCost >= carJackMarketValue) {
            carJackRecommendationElement.textContent = "Buy the Car jack for an estimated savings of " + (carJackCost - carJackMarketValue) + " coin";
        } else {
            carJackRecommendationElement.textContent = "Craft the Car Jack for an estimated savings of " + (carJackMarketValue - carJackCost) + " coin";
        }
        carJackInfoElement.style.display = "block";
    }
    // Sprinter Cabin Craft Cost //
    function getSprinterCabCost() {
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let sprinterCabScrap = scrapValue100 * .75;
        let sprinterCabCopper = copperValue100 * .15;
        let sprinterCabCost = sprinterCabScrap + sprinterCabCopper;
        let sprinterCabMarketValue = parseFloat(prompt("What is the current market price of a Sprinter Cabin?"));
        console.log("The cost to craft a Sprinter Cabin is " + sprinterCabCost);
        let sprinterCabMarketValueElement = document.getElementById("sprinterCabMarketValue");
        sprinterCabMarketValueElement.textContent = "The current Buy Price of the sprinter Cab is " + sprinterCabMarketValue + " coin.";
        let sprinterCabCostElement = document.getElementById("sprinterCabCost");
        sprinterCabCostElement.textContent = " The cost to craft a sprinterCab is " + sprinterCabCost + " coin.";
        let sprinterCabRecommendationElement = document.getElementById("sprinterCabRecommendation");
        sprinterCabRecommendationElement.textContent = sprinterCabRecommendation;
        let sprinterCabInfoElement = document.getElementById("sprinterCabInfo");
        if (isNaN(sprinterCabCost)) {
            sprinterCabRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (sprinterCabCost >= sprinterCabMarketValue) {
            sprinterCabRecommendationElement.textContent = "Buy the Sprinter Cabin for an estimated savings of " + (sprinterCabCost - sprinterCabMarketValue) + " coin";
        } else {
            sprinterCabRecommendationElement.textContent = "Craft the Sprinter Cabin for an estimated savings of " + (sprinterCabMarketValue - sprinterCabCost) + " coin";
        }
        sprinterCabInfoElement.style.display = "block";
    }
    // Small Wheel Cost //
    function getSmallWheelCost() {
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let smallWheelScrap = scrapValue100 * .15;
        let smallWheelCopper = copperValue100 * .03;
        let smallWheelCost = smallWheelScrap + smallWheelCopper;
        let smallWheelMarketValue = parseFloat(prompt("What is the current market price of a Small Wheel?") * 2);
        console.log("The cost to craft a Small Wheel is " + smallWheelCost);
        let smallWheelMarketValueElement = document.getElementById("smallWheelMarketValue");
        smallWheelMarketValueElement.textContent = "The current Buy Price of the Small Wheel is " + smallWheelMarketValue + " coin.";
        let smallWheelCostElement = document.getElementById("smallWheelCost");
        smallWheelCostElement.textContent = " The cost to craft a Small Wheel is " + smallWheelCost + " coin.";
        let smallWheelRecommendationElement = document.getElementById("smallWheelRecommendation");
        smallWheelRecommendationElement.textContent = smallWheelRecommendation;
        let smallWheelInfoElement = document.getElementById("smallWheelInfo");

        if (isNaN(smallWheelCost)) {
            smallWheelRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (smallWheelCost >= smallWheelMarketValue) {
            smallWheelRecommendationElement.textContent = "Buy the Small Wheel for an estimated savings of " + (smallWheelCost - smallWheelMarketValue) + " coin";
        } else {
            smallWheelRecommendationElement.textContent = "Craft the Small Wheel for an estimated savings of " + (smallWheelMarketValue - smallWheelCost) + " coin";
        }
        smallWheelInfoElement.style.display = "block";
    }
    // Huntsman Craft Cost //
    function getHuntsmanCost() {
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let huntsmanScrap = scrapValue100 * .75;
        let huntsmanCopper = copperValue100 * .15;
        let huntsmanCost = huntsmanScrap + huntsmanCopper
        let huntsmanMarketValue = parseFloat(prompt("What is the current market price of a Huntsman Cabin?"));
        console.log("The cost to craft a Huntsman Cabin is " + huntsmanCost);
        let huntsmanMarketValueElement = document.getElementById("huntsmanMarketValue");
        huntsmanMarketValueElement.textContent = "The current Buy Price of the Huntsman Cabin is " + huntsmanMarketValue + " coin.";
        let huntsmanCostElement = document.getElementById("huntsmanCost");
        huntsmanCostElement.textContent = " The cost to craft a Huntsman Cabin is " + huntsmanCost + " coin.";
        let huntsmanRecommendationElement = document.getElementById("huntsmanRecommendation");
        huntsmanRecommendationElement.textContent = huntsmanRecommendation;
        let huntsmanInfoElement = document.getElementById("huntsmanInfo");

        if (isNaN(huntsmanCost)) {
            huntsmanRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (huntsmanCost >= huntsmanMarketValue) {
            huntsmanRecommendationElement.textContent = "Buy the Huntsman for an estimated savings of " + (huntsmanCost - huntsmanMarketValue) + " coin";
        } else {
            huntsmanRecommendationElement.textContent = "Craft the Huntsman for an estimated savings of " + (huntsmanMarketValue - huntsmanCost) + " coin";
        }
        huntsmanInfoElement.style.display = "block";
    }
    // Lupara Cost //
    function getLuparaCost() {
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let luparaScrap = scrapValue100 * .30;
        let luparaCopper = copperValue100 * .06;
        let luparaCost = luparaScrap + luparaCopper;
        let luparaMarketValue = parseFloat(prompt("What is the current market price of a lupara?"));
        console.log("The cost to craft a lupara Cabin is " + luparaCost);
        let luparaMarketValueElement = document.getElementById("luparaMarketValue");
        luparaMarketValueElement.textContent = "The current Buy Price of the lupara Cabin is " + luparaMarketValue + " coin.";
        let luparaCostElement = document.getElementById("luparaCost");
        luparaCostElement.textContent = " The cost to craft a lupara Cabin is " + luparaCost + " coin.";
        let luparaRecommendationElement = document.getElementById("luparaRecommendation");
        luparaRecommendationElement.textContent = luparaRecommendation;
        let luparaInfoElement = document.getElementById("luparaInfo");
        if (isNaN(luparaCost)) {
            luparaRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (luparaCost >= luparaMarketValue) {
            luparaRecommendationElement.textContent = "Buy the Lupara Shotgun for an estimated savings of " + (luparaCost - luparaMarketValue) + " coin";
        } else {
            luparaRecommendationElement.textContent = "Craft the Lupara Shotgun for an estimated savings of " + (luparaMarketValue - luparaCost) + " coin";
        }
        luparaInfoElement.style.display = "block";
    }
    // Small Wheel St Cost //
    function getSmallWheelStCost() {
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let smallWheelStScrap = scrapValue100 * .15;
        let smallWheelStCopper = copperValue100 * .03;
        let smallWheelStCost = smallWheelStScrap + smallWheelStCopper;
        let smallWheelStMarketValue = parseFloat(prompt("What is the current market price of a Small Wheel St?") * 2);
        console.log("The cost to craft a Small Wheel is " + smallWheelStCost);
        let smallWheelStMarketValueElement = document.getElementById("smallWheelStMarketValue");
        smallWheelStMarketValueElement.textContent = "The current Buy Price of the Small Wheel St is " + smallWheelStMarketValue + " coin.";
        let smallWheelStCostElement = document.getElementById("smallWheelStCost");
        smallWheelStCostElement.textContent = " The cost to craft a Small Wheel St is " + smallWheelStCost + " coin.";
        let smallWheelStRecommendationElement = document.getElementById("smallWheelStRecommendation");
        smallWheelStRecommendationElement.textContent = smallWheelStRecommendation;
        let smallWheelStInfoElement = document.getElementById("smallWheelStInfo");
        if (isNaN(smallWheelStCost)) {
            smallWheelStRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (smallWheelStCost >= smallWheelStMarketValue) {
            smallWheelStRecommendationElement.textContent = "Buy the Small Wheel St for an estimated savings of " + (smallWheelStCost - smallWheelStMarketValue) + " coin";
        } else {
            smallWheelStRecommendationElement.textContent = "Craft the Small Wheel St for an estimated savings of " + (smallWheelStMarketValue - smallWheelStCost) + " coin";
        }
        smallWheelStInfoElement.style.display = "block";
    }
    // Radio Cost //
    function getRadioCost() {
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let radioScrap = scrapValue100 * .20;
        let radioCopper = copperValue100 * .04;
        let radioCost = radioScrap + radioCopper;
        let radioMarketValue = parseFloat(prompt("What is the current market price of a Radio?"));
        console.log("The cost to craft a Radio is " + radioCost);
        let radioMarketValueElement = document.getElementById("radioMarketValue");
        radioMarketValueElement.textContent = "The current Buy Price of the Radio is " + radioMarketValue + " coin.";
        let radioCostElement = document.getElementById("radioCost");
        radioCostElement.textContent = " The cost to craft a Radio is " + radioCost + " coin.";
        let radioRecommendationElement = document.getElementById("radioRecommendation");
        radioRecommendationElement.textContent = radioRecommendation;
        let radioInfoElement = document.getElementById("radioInfo");
        if (isNaN(radioCost)) {
            radioRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (radioCost >= radioMarketValue) {
            radioRecommendationElement.textContent = "Buy the Radio for an estimated savings of " + (radioCost - radioMarketValue) + " coin";
        } else {
            radioRecommendationElement.textContent = "Craft the Radio for an estimated savings of " + (radioMarketValue - radioCost) + " coin";
        }
        radioInfoElement.style.display = "block";
    }
    // R1Breeze Cost //
    function getR1BreezeCost() {
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let r1BreezeScrap = scrapValue100 * .20;
        let r1BreezeCopper = copperValue100 * .04;
        let r1BreezeCost = r1BreezeScrap + r1BreezeCopper;
        let r1BreezeMarketValue = parseFloat(prompt("What is the current market price of a R1 Breeze?"));
        console.log("The cost to craft a R1 Breeze is " + r1BreezeCost);
        let r1BreezeMarketValueElement = document.getElementById("r1BreezeMarketValue");
        r1BreezeMarketValueElement.textContent = "The current Buy Price of the R1 Breeze  is " + r1BreezeMarketValue + " coin.";
        let r1BreezeCostElement = document.getElementById("r1BreezeCost");
        r1BreezeCostElement.textContent = " The cost to craft a R1 Breeze is " + r1BreezeCost + " coin.";
        let r1BreezeRecommendationElement = document.getElementById("r1BreezeRecommendation");
        r1BreezeRecommendationElement.textContent = r1BreezeRecommendation;
        let r1BreezeInfoElement = document.getElementById("r1BreezeInfo");
        if (isNaN(r1BreezeCost)) {
            r1BreezeRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (r1BreezeCost >= r1BreezeMarketValue) {
            r1BreezeRecommendationElement.textContent = "Buy the R1 Breeze for an estimated savings of " + (r1BreezeCost - r1BreezeMarketValue) + " coin";
        } else {
            r1BreezeRecommendationElement.textContent = "Craft the R1 Breeze for an estimated savings of " + (r1BreezeMarketValue - r1BreezeCost) + " coin";
        }
        r1BreezeInfoElement.style.display = "block";
    }
    // RS-1 Ruby Cost //
    function getRubyCost() {
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let rubyScrap = scrapValue100 * .35;
        let rubyCopper = copperValue100 * .08;
        let rubyCost = rubyScrap + rubyCopper;
        let rubyMarketValue = parseFloat(prompt("What is the current market price of a RS-1 Ruby?"));
        console.log("The cost to craft a RS-1 Ruby is " + rubyCost);
        let rubyMarketValueElement = document.getElementById("rubyMarketValue");
        rubyMarketValueElement.textContent = "The current Buy Price of the RS-1 Ruby  is " + rubyMarketValue + " coin.";
        let rubyCostElement = document.getElementById("rubyCost");
        rubyCostElement.textContent = " The cost to craft a RS-1 Ruby is " + rubyCost + " coin.";
        let rubyRecommendationElement = document.getElementById("rubyRecommendation");
        rubyRecommendationElement.textContent = rubyRecommendation;
        let rubyInfoElement = document.getElementById("rubyInfo");
        if (isNaN(rubyCost)) {
            rubyRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (rubyCost >= rubyMarketValue) {
            rubyRecommendationElement.textContent = "Buy the Ruby Radar for an estimated savings of " + (rubyCost - rubyMarketValue) + " coin";
        } else {
            rubyRecommendationElement.textContent = "Craft the Ruby Radar for an estimated savings of " + (rubyMarketValue - rubyCost) + " coin";
        }
        rubyInfoElement.style.display = "block";
    }
    // Avenger Cost //
    function getAvengerCost() {
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let avengerScrap = scrapValue100 * .30;
        let avengerCopper = copperValue100 * .06;
        let avengerCost = avengerScrap + avengerCopper;
        let avengerMarketValue = parseFloat(prompt("What is the current market price of a Avenger?"));
        console.log("The cost to craft a Avenger is " + avengerCost);
        let avengerMarketValueElement = document.getElementById("avengerMarketValue");
        avengerMarketValueElement.textContent = "The current Buy Price of the Avengeris " + avengerMarketValue + " coin.";
        let avengerCostElement = document.getElementById("avengerCost");
        avengerCostElement.textContent = " The cost to craft a Avenger is " + avengerCost + " coin.";
        let avengerRecommendationElement = document.getElementById("avengerRecommendation");
        avengerRecommendationElement.textContent = avengerRecommendation;
        let avengerInfoElement = document.getElementById("avengerInfo");
        if (isNaN(avengerCost)) {
            avengerRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (avengerCost >= avengerMarketValue) {
            avengerRecommendationElement.textContent = "Buy the Avenger Canon for an estimated savings of " + (avengerCost - avengerMarketValue) + " coin";
        } else {
            avengerRecommendationElement.textContent = "Craft the Avenger for an estimated savings of " + (avengerMarketValue - avengerCost) + " coin";
        }
        avengerInfoElement.style.display = "block";
    }
    //Docker Cost //
    function getDockerCost() {
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let dockerScrap = scrapValue100 * .75;
        let dockerCopper = copperValue100 * .15;
        let dockerCost = dockerScrap + dockerCopper;
        let dockerMarketValue = parseFloat(prompt("What is the current market price of a Docker Cabin?"));
        console.log("The cost to craft a Docker Cabin is " + dockerCost);
        let dockerMarketValueElement = document.getElementById("dockerMarketValue");
        dockerMarketValueElement.textContent = "The current Buy Price of the Docker Cabin " + dockerMarketValue + " coin.";
        let dockerCostElement = document.getElementById("dockerCost");
        dockerCostElement.textContent = " The cost to craft a Docker Cabin is " + dockerCost + " coin.";
        let dockerRecommendationElement = document.getElementById("dockerRecommendation");
        dockerRecommendationElement.textContent = dockerRecommendation;
        let dockerInfoElement = document.getElementById("dockerInfo");

        if (isNaN(dockerCost)) {
            dockerRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (dockerCost >= dockerMarketValue) {
            dockerRecommendationElement.textContent = "Buy the Docker Cabin for an estimated savings of " + (dockerCost - dockerMarketValue) + " coin";
        } else {
            dockerRecommendationElement.textContent = "Craft the Docker Cabin  for an estimated savings of " + (dockerMarketValue - dockerCost) + " coin";
        }
        dockerInfoElement.style.display = "block";
    }
    // Medium Wheel Cost //
    function getMediumWheelCost() {
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let mediumWheelScrap = scrapValue100 * .15;
        let mediumWheelCopper = copperValue100 * .03;
        let mediumWheelCost = mediumWheelScrap + mediumWheelCopper;
        let mediumWheelMarketValue = parseFloat(prompt("What is the current market price of a Medium Wheel?") * 2)
        console.log("The cost to craft a Medium Wheel is " + mediumWheelCost);
        let mediumWheelMarketValueElement = document.getElementById("mediumWheelMarketValue");
        mediumWheelMarketValueElement.textContent = "The current Buy Price of the Medium Wheel " + mediumWheelMarketValue + " coin.";
        let mediumWheelCostElement = document.getElementById("mediumWheelCost");
        mediumWheelCostElement.textContent = " The cost to craft a Medium Wheel is " + mediumWheelCost + " coin.";
        let mediumWheelRecommendationElement = document.getElementById("mediumWheelRecommendation");
        mediumWheelRecommendationElement.textContent = mediumWheelRecommendation;
        let mediumWheelInfoElement = document.getElementById("mediumWheelInfo");

        if (isNaN(mediumWheelCost)) {
            mediumWheelRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (mediumWheelCost >= mediumWheelMarketValue) {
            mediumWheelRecommendationElement.textContent = "Buy the Medium Wheel for an estimated savings of " + (mediumWheelCost - mediumWheelMarketValue) + " coin";
        } else {
            mediumWheelRecommendationElement.textContent = "Craft the Medium Wheel for an estimated savings of " + (mediumWheelMarketValue - mediumWheelCost) + " coin";
        }
        mediumWheelInfoElement.style.display = "block";
    }
    function getMediumWheelStCost() {
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let mediumWheelStScrap = scrapValue100 * .15;
        let mediumWheelStCopper = copperValue100 * .03;
        let mediumWheelStCost = mediumWheelStScrap + mediumWheelStCopper;
        let mediumWheelStMarketValue = parseFloat(prompt("What is the current market price of a Medium Wheel St?") * 2)
        console.log("The cost to craft a Medium Wheel is " + mediumWheelStCost);
        let mediumWheelStMarketValueElement = document.getElementById("mediumWheelStMarketValue");
        mediumWheelStMarketValueElement.textContent = "The current Buy Price of the Medium Wheel St " + mediumWheelStMarketValue + " coin.";
        let mediumWheelStCostElement = document.getElementById("mediumWheelStCost");
        mediumWheelStCostElement.textContent = " The cost to craft a Medium Wheel St is " + mediumWheelStCost + " coin.";
        let mediumWheelStRecommendationElement = document.getElementById("mediumWheelStRecommendation");
        mediumWheelStRecommendationElement.textContent = mediumWheelStRecommendation;
        let mediumWheelStInfoElement = document.getElementById("mediumWheelStInfo");

        if (isNaN(mediumWheelStCost)) {
            mediumWheelStRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (mediumWheelStCost >= mediumWheelStMarketValue) {
            mediumWheelStRecommendationElement.textContent = "Buy the Medium Wheel for St an estimated savings of " + (mediumWheelStCost - mediumWheelStMarketValue) + " coin";
        } else {
            mediumWheelStRecommendationElement.textContent = "Craft the Medium Wheel St for an estimated savings of " + (mediumWheelStMarketValue - mediumWheelStCost) + " coin";
        }
        mediumWheelStInfoElement.style.display = "block";
    }

    // Fuel Barrel Cost //
    function getFuelBarrelCost() {
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let fuelBarrelScrap = scrapValue100 * .60;
        let fuelBarrelCopper = copperValue100 * .12;
        let fuelBarrelCost = fuelBarrelScrap + fuelBarrelCopper;

        let fuelBarrelMarketValue = parseFloat(prompt("What is the current market price of a Fuel Barrel ?"))
        console.log("The cost to craft a Fuel Barrel is " + fuelBarrelCost);
        let fuelBarrelMarketValueElement = document.getElementById("fuelBarrelMarketValue");
        fuelBarrelMarketValueElement.textContent = "The current Buy Price of the Fuel Barrel " + fuelBarrelMarketValue + " coin.";
        let fuelBarrelCostElement = document.getElementById("fuelBarrelCost");
        fuelBarrelCostElement.textContent = " The cost to craft a Fuel Barrel is " + fuelBarrelCost + " coin.";
        let fuelBarrelRecommendationElement = document.getElementById("fuelBarrelRecommendation");
        fuelBarrelRecommendationElement.textContent = fuelBarrelRecommendation;
        let fuelBarrelInfoElement = document.getElementById("fuelBarrelInfo");

        if (isNaN(fuelBarrelCost)) {
            fuelBarrelRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (fuelBarrelCost >= fuelBarrelMarketValue) {
            fuelBarrelRecommendationElement.textContent = "Buy the Fuel Barrel for an estimated savings of " + (fuelBarrelCost - fuelBarrelMarketValue) + " coin";
        } else {
            fuelBarrelRecommendationElement.textContent = "Craft the Fuel Barrel for an estimated savings of " + (fuelBarrelMarketValue - fuelBarrelCost) + " coin";
        }
        fuelBarrelInfoElement.style.display = "block";
    }

    // B-1 Aviator Cost //
    function getAviatorCost() {
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let aviatorScrap = scrapValue100 * .55;
        let aviatorCopper = copperValue100 * .11;
        let aviatorCost = aviatorScrap + aviatorCopper;
        let aviatorMarketValue = parseFloat(prompt("What is the current market price of a Aviator?"));
        console.log("The cost to craft a Aviator is " + aviatorCost);
        let aviatorMarketValueElement = document.getElementById("aviatorMarketValue");
        aviatorMarketValueElement.textContent = "The current Buy Price of the Aviator " + aviatorMarketValue + " coin.";
        let aviatorCostElement = document.getElementById("aviatorCost");
        aviatorCostElement.textContent = " The cost to craft a Aviator is " + aviatorCost + " coin.";
        let aviatorRecommendationElement = document.getElementById("aviatorRecommendation");
        aviatorRecommendationElement.textContent = aviatorRecommendation;
        let aviatorInfoElement = document.getElementById("aviatorInfo");

        if (isNaN(aviatorCost)) {
            aviatorRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (aviatorCost >= aviatorMarketValue) {
            aviatorRecommendationElement.textContent = "Buy the Aviator for an estimated savings of " + (aviatorCost - aviatorMarketValue) + " coin";
        } else {
            aviatorRecommendationElement.textContent = "Craft the Aviator for an estimated savings of " + (aviatorMarketValue - aviatorCost) + " coin";
        }
        aviatorInfoElement.style.display = "block";
    }
    // WWT1 Craft Cost //
    function getWwt1Cost() {
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let wwt1Scrap = scrapValue100 * .75;
        let wwt1Copper = copperValue100 * .15;
        let wwt1Cost = wwt1Scrap + wwt1Copper;
        let wwt1MarketValue = parseFloat(prompt("What is the current market price of a WWT1 Cabin?"));
        console.log("The cost to craft a WWT1 Cabin is " + wwt1Cost);
        let wwt1MarketValueElement = document.getElementById("wwt1MarketValue");
        wwt1MarketValueElement.textContent = "The current Buy Price of the WWT1 Cabin " + wwt1MarketValue + " coin.";
        let wwt1CostElement = document.getElementById("wwt1Cost");
        wwt1CostElement.textContent = " The cost to craft a WWT1 Cabin is " + wwt1Cost + " coin.";
        let wwt1RecommendationElement = document.getElementById("wwt1Recommendation");
        wwt1RecommendationElement.textContent = wwt1Recommendation;
        let wwt1InfoElement = document.getElementById("wwt1Info");

        if (isNaN(wwt1Cost)) {
            wwt1RecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (wwt1Cost >= wwt1MarketValue) {
            wwt1RecommendationElement.textContent = "Buy the WWT1 Cabin for an estimated savings of " + (wwt1Cost - wwt1MarketValue) + " coin";
        } else {
            wwt1RecommendationElement.textContent = "Craft the WWT1 Cabin for an estimated savings of " + (wwt1MarketValue - wwt1Cost) + " coin";
        }
        wwt1InfoElement.style.display = "block";
    }
    // Engineerers Rare Item Craft Cost //
    // Little Boy 6LB Craft Cost //   
    function getLittleBoyCost() {
        updateWorkbenchCoupons()
        let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
        let copperValue100 = parseFloat(document.getElementById("copperValue").value);
        let littleBoyScrap = scrapValue100 * 6.5;
        let littleBoyCopper = copperValue100 * 1.3;
        let fuelBarrelScrap = scrapValue100 * .60;
        let fuelBarrelCopper = copperValue100 * .12;
        let fuelBarrelCost = fuelBarrelScrap + fuelBarrelCopper;
        let avengerScrap = scrapValue100 * .30;
        let avengerCopper = copperValue100 * .06;
        let avengerCost = avengerScrap + avengerCopper;
        let littleBoyCost = littleBoyScrap + littleBoyCopper + avengerCost + fuelBarrelCost + rareWorkBenchCoupon;
        let littleBoyMarketValue = parseFloat(prompt("What is the current market price of a Little Boy?"));
        console.log("The cost to craft a Little Boy is " + littleBoyCost);
        let littleBoyMarketValueElement = document.getElementById("littleBoyMarketValue");
        littleBoyMarketValueElement.textContent = "The current Buy Price of the Little Boy " + littleBoyMarketValue + " coin.";
        let littleBoyCostElement = document.getElementById("littleBoyCost");
        littleBoyCostElement.textContent = " The cost to craft a Little Boy is " + littleBoyCost + " coin.";
        let littleBoyRecommendationElement = document.getElementById("littleBoyRecommendation");
        littleBoyRecommendationElement.textContent = littleBoyRecommendation;
        let littleBoyInfoElement = document.getElementById("littleBoyInfo");

        if (isNaN(littleBoyCost)) {
            littleBoyRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
        } else if (littleBoyCost >= littleBoyMarketValue) {
            littleBoyRecommendationElement.textContent = "Buy the Little Boy for an estimated savings of " + (littleBoyCost - littleBoyMarketValue) + " coin";
        } else {
            littleBoyRecommendationElement.textContent = "Craft the Little Boy for an estimated savings of " + (littleBoyMarketValue - littleBoyCost) + " coin";
        }
        littleBoyInfoElement.style.display = "block";
    }
}

// Spitfire Craft Cost //
function getSpitfireCost() {
    let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
    let copperValue100 = parseFloat(document.getElementById("copperValue").value);
    let spitfireScrap = scrapValue100 * 6.5;
    let spitfireCopper = copperValue100 * 1.3;

    let aviatorScrap = scrapValue100 * .55;
    let aviatorCopper = copperValue100 * .11;
    let aviatorCost = aviatorScrap + aviatorCopper;

    let luparaScrap = scrapValue100 * .30;
    let luparaCopper = copperValue100 * .06;
    let luparaCost = luparaScrap + luparaCopper;

    let spitfireCost = spitfireScrap + spitfireCopper + luparaCost + aviatorCost + rareWorkBenchCoupon;
    let spitfireMarketValue = parseFloat(prompt("What is the current market price of a Spitfire?"));
    console.log("The cost to craft a Spitfire is " + spitfireCost);
    let spitfireMarketValueElement = document.getElementById("spitfireMarketValue");
    spitfireMarketValueElement.textContent = "The current Buy Price of the Spitfire " + spitfireMarketValue + " coin.";
    let spitfireCostElement = document.getElementById("spitfireCost");
    spitfireCostElement.textContent = " The cost to craft a Spitfire is " + spitfireCost + " coin.";
    let spitfireRecommendationElement = document.getElementById("spitfireRecommendation");
    spitfireRecommendationElement.textContent = spitfireRecommendation;
    let spitfireInfoElement = document.getElementById("spitfireInfo");

    if (isNaN(spitfireCost)) {
        spitfireRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
    } else if (spitfireCost >= spitfireMarketValue) {
        spitfireRecommendationElement.textContent = "Buy the Spitfire for an estimated savings of " + (spitfireCost - spitfireMarketValue) + " coin";
    } else {
        spitfireRecommendationElement.textContent = "Craft the Spitfire for an estimated savings of " + (spitfireMarketValue - spitfireCost) + " coin";
    }
    spitfireInfoElement.style.display = "block";
}

// AC43 Rapier Craft Cost //
function getRapierCost() {
    let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
    let copperValue100 = parseFloat(document.getElementById("copperValue").value);
    let rapierScrap = scrapValue100 * 6.5;
    let rapierCopper = copperValue100 * 1.3;
    let rapierCost = rapierScrap + rapierCopper + chordCost + aviatorCost + rareWorkBenchCoupon;
    let rapierMarketValue = prompt("What is the current market price of a Rapier?")
    if (rapierCost >= rapierMarketValue) alert("You should buy the rapier")
    else alert("You should craft a Rapier Auto Canon")
    console.log("The cost to craft a Rapier Auto Canon is " + rapierCost);
}
// R-2 Chill //
function getR2ChillCost() {
    let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
    let copperValue100 = parseFloat(document.getElementById("copperValue").value);
    let r2ChillScrap = scrapValue100 * 6.5;
    let r2ChillCopper = copperValue100 * 1.3;
    let r2ChillCost = r2ChillScrap + r2ChillCopper + radioCost + r1BreezeCost + rareWorkBenchCoupon;

    let r2ChillMarketValue = prompt("What is the current market price of a R-2 Chill?")
    if (r2ChillCost >= r2ChillMarketValue) alert("You should buy the R-2 Chilr")
    else alert("You should craft a R-2 Chill")
    console.log("The cost to craft a R-2 Chill is " + r2ChillCost);
}
// CS Taymyr Cooler //
function getTaymyrCost() {
    let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
    let copperValue100 = parseFloat(document.getElementById("copperValue").value);
    let taymyrScrap = scrapValue100 * 6.5;
    let taymyrCopper = copperValue100 * 1.3;
    let taymyrCost = taymyrScrap + taymyrCopper + r1BreezeCost + huntsmanCost + rareWorkBenchCoupon;
    let taymyrMarketValue = prompt("What is the current market price of a CS Taymyr Cooler?")
    if (taymyrCost >= taymyrMarketValue) alert("You should buy the CS Taymyr Cooler")
    else alert("You should craft a CS Taymyr Cooler")
    console.log("The cost to craft a CS Taymyr Cooler is " + taymyrCost);
}
// Lunatic Rare Items //
// Blastoff//
function getBlastoffCost() {
    let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
    let copperValue100 = parseFloat(document.getElementById("copperValue").value);
    let blastoffScrap = scrapValue100 * 6.5;
    let blastoffCopper = copperValue100 * 1.3;
    let blastoffCost = blastoffScrap + blastoffCopper + aviatorCost + rubyCost + rareWorkBenchCoupon;
    let blastoffMarketValue = prompt("What is the current market price of a Blastoff?")
    if (blastoffCost >= blastoffMarketValue) alert("You should buy the Blastoff")
    else alert("You should craft a Blastoff")
    console.log("The cost to craft a Blastoff is " + blastoffCost);
}
// Studded Wheel //
function getStuddedWheelCost() {
    let studdedWheelScrap = scrapValue100 * 6;
    let studdedWheelCopper = copperValue100 * 1.3;
    let studdedWheelCost = studdedWheelScrap + studdedWheelCopper + mediumWheelCost + smallWheelCost + rareWorkBenchCoupon;
    let studdedWheelMarketValue = prompt("What is the current market price of a Studded Wheel?")
    if (studdedWheelCost >= studdedWheelMarketValue) alert("You should buy the Studded Wheel")
    else alert("You should craft a Studded Wheel")
    console.log("The cost to craft a Studded Wheel is " + studdedWheelCost);
}
// Hardcore Engine //
function getHardcoreCost() {
    let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
    let copperValue100 = parseFloat(document.getElementById("copperValue").value);
    let hardcoreScrap = scrapValue100 * .5;
    let hardcoreCopper = copperValue100 * 1;
    let hardcoreWires = wiresValue100 * 1;
    let hardcorePlastic = plasticValue100 * .5;
    let hardcoreCost = hardcoreScrap + hardcoreCopper + hardcoreWires + hardcorePlastic + blastoffCost + taymyrCost + specialWorkBenchCoupon;
    let hardcoreMarketValue = prompt("What is the current market price of a Hardcore Engine?")
    if (hardcoreCost >= hardcoreMarketValue) alert("You should buy the Hardcore Engine")
    else alert("You should craft a Hardcore Engine")
    console.log("The cost to craft a Hardcore Engine is " + hardcoreCost);
}
