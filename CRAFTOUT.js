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
        addItemOption("rapier", "Rapier");

    }
    if (faction === "engineers" && rarity === "common" && type === "cabin") {
        addItemOption("sprinterCabin", "Sprinter");
        addItemOption("huntsman", "Huntsman");
        addItemOption("docker", "Docker");
        addItemOption("wwt1", "WWT1");
    }
    if (faction === "engineers" && rarity === "rare" && type === "hardware") {
        addItemOption("r2Chill", "R-2 Chill");
        addItemOption("taymyr", "Taymyr");
        addItemOption("ammoPack", "Ammo Pack");
        addItemOption("fuelTank", "Fuel Tank");
        addItemOption("horizon", "Horizon");
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
    if (faction === "engineers" && rarity === "rare" && type === "movementParts") {
        addItemOption("balloonTyre", "Balloon Tyre");
        addItemOption("balloonTyreSt", "Balloon TyreSt");

    }
    if (faction === "lunatics" && rarity === "rare" && type === "hardware") {
        addItemOption("blastoff", "Blastoff");
        addItemOption("bigG", "Big G");
    }
    if (faction === "lunatics" && rarity === "rare" && type === "cabin") {
        addItemOption("growl", "Growl");
    }
    if (faction === "lunatics" && rarity === "rare" && type === "movementParts") {
        addItemOption("studdedWheel", "Studded Wheel");
        addItemOption("studdedWheelSt", "Studded Wheel St");
        addItemOption("chainedWheel", "Chained Wheel");
        addItemOption("chainedWheelSt", "Chained Wheel St");
    }
    if (faction === "lunatics" && rarity === "rare" && type === "weapons") {
        addItemOption("sledgehammer", "Sledgehammer");
        addItemOption("wasp", "Wasp");
    }
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
    } else if (selectedItem === "rapier") {
        getRapierCost();
    } else if (selectedItem === "r2Chill") {
        getR2ChillCost();
    } else if (selectedItem === "taymyr") {
        getTaymyrCost();
    } else if (selectedItem === "ammoPack") {
        getAmmoPackCost();
    } else if (selectedItem === "fuelTank") {
        getFuelTankCost();
    } else if (selectedItem === "horizon") {
        getHorizonCost();
    } else if (selectedItem === "balloonTyre") {
        getBalloonTyreCost();
    } else if (selectedItem === "balloonTyreSt") {
        getBalloonTyreStCost();
    } else if (selectedItem === "blastoff") {
        getBlastoffCost();
    } else if (selectedItem === "studdedWheel") {
        getStuddedWheelCost();
    } else if (selectedItem === "studdedWheelSt") {
        getStuddedWheelStCost();
    } else if (selectedItem === "sledgehammer") {
        getSledgehammerCost();
    } else if (selectedItem === "wasp") {
        getWaspCost();
    } else if (selectedItem === "growl") {
        getGrowlCost();
    } else if (selectedItem === "bigG") {
        getBigGCost();
    } else if (selectedItem === "chainedWheel") {
        getChainedWheelCost();
    } else if (selectedItem === "chainedWheelSt") {
        getChainedWheelStCost();
        //                   Common Item Crafting Cost                                     //
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
    }
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
}
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
    let mediumWheelStMarketValue = parseFloat(prompt("What is the current market price of a Medium Wheel St?"))
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
function getLittleBoyCost() {
    updateWorkbenchCoupons()
    let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
    let copperValue100 = parseFloat(document.getElementById("copperValue").value);
    let littleBoyScrap = scrapValue100 * 6.5;
    let littleBoyCopper = copperValue100 * 1.3;
    let fuelBarrelScrap = scrapValue100 * .60;
    let fuelBarrelCopper = copperValue100 * .12;
    let fuelBarrelCost = fuelBarrelScrap + fuelBarrelCopper;
    let avengerScrap = scrapValue100 * 6.50;
    let avengerCopper = copperValue100 * 1.30;
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
function getRapierCost() {
    let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
    let copperValue100 = parseFloat(document.getElementById("copperValue").value);
    let rapierScrap = scrapValue100 * 6.5;
    let rapierCopper = copperValue100 * 1.3;

    let aviatorScrap = scrapValue100 * .55;
    let aviatorCopper = copperValue100 * .11;
    let aviatorCost = aviatorScrap + aviatorCopper;

    let chordScrap = scrapValue100 * .30;
    let chordCopper = copperValue100 * .06;
    let chordCost = chordScrap + chordCopper;


    let rapierCost = rapierScrap + rapierCopper + chordCost + aviatorCost + rareWorkBenchCoupon;
    let rapierMarketValue = parseFloat(prompt("What is the current market price of a Rapier?"));
    console.log("The cost to craft a Rapier is " + rapierCost);
    let rapierMarketValueElement = document.getElementById("rapierMarketValue");
    rapierMarketValueElement.textContent = "The current Buy Price of the Rapier " + rapierMarketValue + " coin.";
    let rapierCostElement = document.getElementById("rapierCost");
    rapierCostElement.textContent = " The cost to craft a Rapier is " + rapierCost + " coin.";
    let rapierRecommendationElement = document.getElementById("rapierRecommendation");
    rapierRecommendationElement.textContent = rapierRecommendation;
    let rapierInfoElement = document.getElementById("rapierInfo");

    if (isNaN(rapierCost)) {
        rapierRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
    } else if (rapierCost >= rapierMarketValue) {
        rapierRecommendationElement.textContent = "Buy the Rapier for an estimated savings of " + (rapierCost - rapierMarketValue) + " coin";
    } else {
        rapierRecommendationElement.textContent = "Craft the rapier for an estimated savings of " + (rapierMarketValue - rapierCost) + " coin";
    }
    rapierInfoElement.style.display = "block";
}
function getR2ChillCost() {
    let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
    let copperValue100 = parseFloat(document.getElementById("copperValue").value);

    let radioScrap = scrapValue100 * .20;
    let radioCopper = copperValue100 * .04;
    let radioCost = radioScrap + radioCopper;

    let r1BreezeScrap = scrapValue100 * .20;
    let r1BreezeCopper = copperValue100 * .04;
    let r1BreezeCost = r1BreezeScrap + r1BreezeCopper;

    let r2ChillScrap = scrapValue100 * 6.5;
    let r2ChillCopper = copperValue100 * 1.3;
    let r2ChillCost = r2ChillScrap + r2ChillCopper + radioCost + r1BreezeCost + rareWorkBenchCoupon;
    let r2ChillMarketValue = parseFloat(prompt("What is the current market price of a R-2 Chill?"));
    console.log("The cost to craft a R-2 Chill is " + r2ChillCost);
    let r2ChillMarketValueElement = document.getElementById("r2ChillMarketValue");
    r2ChillMarketValueElement.textContent = "The current Buy Price of the R-2 Chill " + r2ChillMarketValue + " coin.";
    let r2ChillCostElement = document.getElementById("r2ChillCost");
    r2ChillCostElement.textContent = " The cost to craft a R-2 Chill is " + r2ChillCost + " coin.";
    let r2ChillRecommendationElement = document.getElementById("r2ChillRecommendation");
    r2ChillRecommendationElement.textContent = r2ChillRecommendation;
    let r2ChillInfoElement = document.getElementById("r2ChillInfo");

    if (isNaN(r2ChillCost)) {
        r2ChillRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
    } else if (r2ChillCost >= r2ChillMarketValue) {
        r2ChillRecommendationElement.textContent = "Buy the R-2 Chill for an estimated savings of " + (r2ChillCost - r2ChillMarketValue) + " coin";
    } else {
        r2ChillRecommendationElement.textContent = "Craft the R-2 Chill for an estimated savings of " + (r2ChillMarketValue - r2ChillCost) + " coin";
    }
    r2ChillInfoElement.style.display = "block";
}
function getTaymyrCost() {
    let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
    let copperValue100 = parseFloat(document.getElementById("copperValue").value);
    let huntsmanScrap = scrapValue100 * .75;
    let huntsmanCopper = copperValue100 * .15;
    let huntsmanCost = huntsmanScrap + huntsmanCopper
    let r1BreezeScrap = scrapValue100 * .20;
    let r1BreezeCopper = copperValue100 * .04;
    let r1BreezeCost = r1BreezeScrap + r1BreezeCopper;
    let taymyrScrap = scrapValue100 * 6.5;
    let taymyrCopper = copperValue100 * 1.3;
    let taymyrCost = taymyrScrap + taymyrCopper + r1BreezeCost + huntsmanCost + rareWorkBenchCoupon;
    let taymyrMarketValue = parseFloat(prompt("What is the current market price of a Taymyr?"));
    console.log("The cost to craft a Taymyr is " + taymyrCost);
    let taymyrMarketValueElement = document.getElementById("taymyrMarketValue");
    taymyrMarketValueElement.textContent = "The current Buy Price of the Taymyr " + taymyrMarketValue + " coin.";
    let taymyrCostElement = document.getElementById("taymyrCost");
    taymyrCostElement.textContent = " The cost to craft a Taymyr is " + taymyrCost + " coin.";
    let taymyrRecommendationElement = document.getElementById("taymyrRecommendation");
    taymyrRecommendationElement.textContent = taymyrRecommendation;
    let taymyrInfoElement = document.getElementById("taymyrInfo");
    if (isNaN(taymyrCost)) {
        taymyrRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
    } else if (taymyrCost >= taymyrMarketValue) {
        taymyrRecommendationElement.textContent = "Buy the Taymyr for an estimated savings of " + (taymyrCost - taymyrMarketValue) + " coin";
    } else {
        taymyrRecommendationElement.textContent = "Craft the Taymyr for an estimated savings of " + (taymyrMarketValue - taymyrCost) + " coin";
    }
    taymyrInfoElement.style.display = "block";
}
function getAmmoPackCost() {
    let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
    let copperValue100 = parseFloat(document.getElementById("copperValue").value);
    let carJackScrap = scrapValue100 * .20;
    let carJackCopper = copperValue100 * .04;
    let carJackCost = carJackScrap + carJackCopper;
    let radioScrap = scrapValue100 * .20;
    let radioCopper = copperValue100 * .04;
    let radioCost = radioScrap + radioCopper;
    let ammoPackScrap = scrapValue100 * 6.5;
    let ammoPackCopper = copperValue100 * 1.3;
    let ammoPackCost = ammoPackScrap + ammoPackCopper + radioCost + carJackCost + rareWorkBenchCoupon;
    let ammoPackMarketValue = parseFloat(prompt("What is the current market price of a Ammo Pack?"));
    console.log("The cost to craft a ammoPack is " + ammoPackCost);
    let ammoPackMarketValueElement = document.getElementById("ammoPackMarketValue");
    ammoPackMarketValueElement.textContent = "The current Buy Price of the Ammo Pack " + ammoPackMarketValue + " coin.";
    let ammoPackCostElement = document.getElementById("ammoPackCost");
    ammoPackCostElement.textContent = " The cost to craft a Ammo Pack is " + ammoPackCost + " coin.";
    let ammoPackRecommendationElement = document.getElementById("ammoPackRecommendation");
    ammoPackRecommendationElement.textContent = ammoPackRecommendation;
    let ammoPackInfoElement = document.getElementById("ammoPackInfo");

    if (isNaN(ammoPackCost)) {
        ammoPackRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
    } else if (ammoPackCost >= ammoPackMarketValue) {
        ammoPackRecommendationElement.textContent = "Buy the ammoPack for an estimated savings of " + (ammoPackCost - ammoPackMarketValue) + " coin";
    } else {
        ammoPackRecommendationElement.textContent = "Craft the ammoPack for an estimated savings of " + (ammoPackMarketValue - ammoPackCost) + " coin";
    }
    ammoPackInfoElement.style.display = "block";
}
function getFuelTankCost() {
    let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
    let copperValue100 = parseFloat(document.getElementById("copperValue").value);

    let fuelBarrelScrap = scrapValue100 * .60;
    let fuelBarrelCopper = copperValue100 * .12;
    let fuelBarrelCost = fuelBarrelScrap + fuelBarrelCopper;

    let dockerScrap = scrapValue100 * .75;
    let dockerCopper = copperValue100 * .15;
    let dockerCost = dockerScrap + dockerCopper;

    let fuelTankScrap = scrapValue100 * 6.5;
    let fuelTankCopper = copperValue100 * 1.3;
    let fuelTankCost = fuelTankScrap + fuelTankCopper + dockerCost + fuelBarrelCost + rareWorkBenchCoupon;
    let fuelTankMarketValue = parseFloat(prompt("What is the current market price of a Fuel Tank?"));
    console.log("The cost to craft a fuelTank is " + fuelTankCost);
    let fuelTankMarketValueElement = document.getElementById("fuelTankMarketValue");
    fuelTankMarketValueElement.textContent = "The current Buy Price of the Fuel Tank " + fuelTankMarketValue + " coin.";
    let fuelTankCostElement = document.getElementById("fuelTankCost");
    fuelTankCostElement.textContent = " The cost to craft a Fuel Tank is " + fuelTankCost + " coin.";
    let fuelTankRecommendationElement = document.getElementById("fuelTankRecommendation");
    fuelTankRecommendationElement.textContent = fuelTankRecommendation;
    let fuelTankInfoElement = document.getElementById("fuelTankInfo");

    if (isNaN(fuelTankCost)) {
        fuelTankRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
    } else if (fuelTankCost >= fuelTankMarketValue) {
        fuelTankRecommendationElement.textContent = "Buy the fuelTank for an estimated savings of " + (fuelTankCost - fuelTankMarketValue) + " coin";
    } else {
        fuelTankRecommendationElement.textContent = "Craft the Fuel Tank for an estimated savings of " + (fuelTankMarketValue - fuelTankCost) + " coin";
    }
    fuelTankInfoElement.style.display = "block";
}
function getHorizonCost() {
    let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
    let copperValue100 = parseFloat(document.getElementById("copperValue").value);

    let smallWheelScrap = scrapValue100 * .60;
    let smallWheelCopper = copperValue100 * .12;
    let smallWheelCost = smallWheelScrap + smallWheelCopper;

    let radioScrap = scrapValue100 * .2;
    let radioCopper = copperValue100 * .04;
    let radioCost = radioScrap + radioCopper;

    let horizonScrap = scrapValue100 * 6.5;
    let horizonCopper = copperValue100 * 1.3;
    let horizonCost = horizonScrap + horizonCopper + radioCost + smallWheelCost + rareWorkBenchCoupon;
    let horizonMarketValue = parseFloat(prompt("What is the current market price of a Horizon?"));
    console.log("The cost to craft a horizon is " + horizonCost);
    let horizonMarketValueElement = document.getElementById("horizonMarketValue");
    horizonMarketValueElement.textContent = "The current Buy Price of the Horizon " + horizonMarketValue + " coin.";
    let horizonCostElement = document.getElementById("horizonCost");
    horizonCostElement.textContent = " The cost to craft a Horizon is " + horizonCost + " coin.";
    let horizonRecommendationElement = document.getElementById("horizonRecommendation");
    horizonRecommendationElement.textContent = horizonRecommendation;
    let horizonInfoElement = document.getElementById("horizonInfo");

    if (isNaN(horizonCost)) {
        horizonRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
    } else if (horizonCost >= horizonMarketValue) {
        horizonRecommendationElement.textContent = "Buy the horizon for an estimated savings of " + (horizonCost - horizonMarketValue) + " coin";
    } else {
        horizonRecommendationElement.textContent = "Craft the Horizon for an estimated savings of " + (horizonMarketValue - horizonCost) + " coin";
    }
    horizonInfoElement.style.display = "block";
}
function getBalloonTyreCost() {
    let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
    let copperValue100 = parseFloat(document.getElementById("copperValue").value);

    let mediumWheelScrap = scrapValue100 * .60;
    let mediumWheelCopper = copperValue100 * .12;
    let mediumWheelCost = mediumWheelScrap + mediumWheelCopper;

    let balloonTyreScrap = scrapValue100 * 6.5;
    let balloonTyreCopper = copperValue100 * 1.3;
    let balloonTyreCost = balloonTyreScrap + balloonTyreCopper + (mediumWheelCost * 2) + rareWorkBenchCoupon;
    let balloonTyreMarketValue = parseFloat(prompt("What is the current market price of a Balloon Tyre?") * 2);
    console.log("The cost to craft a Balloon Tyre is " + balloonTyreCost);
    let balloonTyreMarketValueElement = document.getElementById("balloonTyreMarketValue");
    balloonTyreMarketValueElement.textContent = "The current Buy Price of the Balloon Tyre " + balloonTyreMarketValue + " coin.";
    let balloonTyreCostElement = document.getElementById("balloonTyreCost");
    balloonTyreCostElement.textContent = " The cost to craft a Balloon Tyre is " + balloonTyreCost + " coin.";
    let balloonTyreRecommendationElement = document.getElementById("balloonTyreRecommendation");
    balloonTyreRecommendationElement.textContent = balloonTyreRecommendation;
    let balloonTyreInfoElement = document.getElementById("balloonTyreInfo");

    if (isNaN(balloonTyreCost)) {
        balloonTyreRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
    } else if (balloonTyreCost >= balloonTyreMarketValue) {
        balloonTyreRecommendationElement.textContent = "Buy the Balloon Tyre for an estimated savings of " + (balloonTyreCost - balloonTyreMarketValue) + " coin";
    } else {
        balloonTyreRecommendationElement.textContent = "Craft the Balloon Tyre for an estimated savings of " + (balloonTyreMarketValue - balloonTyreCost) + " coin";
    }
    balloonTyreInfoElement.style.display = "block";
}
function getBalloonTyreStCost() {
    let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
    let copperValue100 = parseFloat(document.getElementById("copperValue").value);

    let smallWheelStScrap = scrapValue100 * .60;
    let smallWheelStCopper = copperValue100 * .12;
    let smallWheelStCost = smallWheelStScrap + smallWheelStCopper;


    let balloonTyreStScrap = scrapValue100 * 6.5;
    let balloonTyreStCopper = copperValue100 * 1.3;
    let balloonTyreStCost = balloonTyreStScrap + balloonTyreStCopper + (smallWheelStCost * 2) + rareWorkBenchCoupon;
    let balloonTyreStMarketValue = parseFloat(prompt("What is the current market price of a Balloon Tyre?") * 2);
    console.log("The cost to craft a Balloon Tyre is " + balloonTyreStCost);
    let balloonTyreStMarketValueElement = document.getElementById("balloonTyreStMarketValue");
    balloonTyreStMarketValueElement.textContent = "The current Buy Price of the Balloon Tyre " + balloonTyreStMarketValue + " coin.";
    let balloonTyreStCostElement = document.getElementById("balloonTyreStCost");
    balloonTyreStCostElement.textContent = " The cost to craft a Balloon Tyre is " + balloonTyreStCost + " coin.";
    let balloonTyreStRecommendationElement = document.getElementById("balloonTyreStRecommendation");
    balloonTyreStRecommendationElement.textContent = balloonTyreStRecommendation;
    let balloonTyreStInfoElement = document.getElementById("balloonTyreStInfo");

    if (isNaN(balloonTyreStCost)) {
        balloonTyreStRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
    } else if (balloonTyreStCost >= balloonTyreStMarketValue) {
        balloonTyreStRecommendationElement.textContent = "Buy the Balloon Tyre for an estimated savings of " + (balloonTyreStCost - balloonTyreStMarketValue) + " coin";
    } else {
        balloonTyreStRecommendationElement.textContent = "Craft the Balloon Tyre for an estimated savings of " + (balloonTyreStMarketValue - balloonTyreStCost) + " coin";
    }
    balloonTyreStInfoElement.style.display = "block";
}
// Lunatic Rare Items //
function getBlastoffCost() {
    let scrapValue100 = parseFloat(document.getElementById("scrapValue").value);
    let copperValue100 = parseFloat(document.getElementById("copperValue").value);
    let blastoffScrap = scrapValue100 * 6.5;
    let blastoffCopper = copperValue100 * 1.3;
    let aviatorScrap = scrapValue100 * .55;
    let aviatorCopper = copperValue100 * .11;
    let aviatorCost = aviatorScrap + aviatorCopper;
    let rubyScrap = scrapValue100 * .35;
    let rubyCopper = copperValue100 * .08;
    let rubyCost = rubyScrap + rubyCopper;
    let blastoffCost = rubyCost + aviatorCost + blastoffScrap + blastoffCopper + rareWorkBenchCoupon;
    let blastoffMarketValue = parseFloat(prompt("What is the current market price of a Blastoff?"));
    console.log("The cost to craft a Blastoff is " + blastoffCost);
    let blastoffMarketValueElement = document.getElementById("blastoffMarketValue");
    blastoffMarketValueElement.textContent = "The current Buy Price of the Blastoff " + blastoffMarketValue + " coin.";
    let blastoffCostElement = document.getElementById("blastoffCost");
    blastoffCostElement.textContent = " The cost to craft a Blastoff is " + blastoffCost + " coin.";
    let blastoffRecommendationElement = document.getElementById("blastoffRecommendation");
    blastoffRecommendationElement.textContent = blastoffRecommendation;
    let blastoffInfoElement = document.getElementById("blastoffInfo");
    if (isNaN(blastoffCost)) {
        blastoffRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
    } else if (blastoffCost >= blastoffMarketValue) {
        blastoffRecommendationElement.textContent = "Buy the Blastoff for an estimated savings of " + (blastoffCost - blastoffMarketValue) + " coin";
    } else {
        blastoffRecommendationElement.textContent = "Craft the Blastoff for an estimated savings of " + (blastoffMarketValue - blastoffCost) + " coin";
    }
    blastoffInfoElement.style.display = "block";
}
function getStuddedWheelCost() {
    let studdedWheelScrap = scrapValue100 * 6;
    let studdedWheelCopper = copperValue100 * 1.3;
    let smallWheelScrap = scrapValue100 * .15;
    let smallWheelCopper = copperValue100 * .03;
    let smallWheelCost = smallWheelScrap + smallWheelCopper;
    let mediumWheelScrap = scrapValue100 * .15;
    let mediumWheelCopper = copperValue100 * .03;
    let mediumWheelCost = mediumWheelScrap + mediumWheelCopper;
    let studdedWheelCost = mediumWheelCost + smallWheelCost + studdedWheelScrap + studdedWheelCopper + rareWorkBenchCoupon;
    let studdedWheelMarketValue = parseFloat(prompt("What is the current market price of a studdedWheel?"));
    console.log("The cost to craft a studdedWheel is " + studdedWheelCost);
    let studdedWheelMarketValueElement = document.getElementById("studdedWheelMarketValue");
    studdedWheelMarketValueElement.textContent = ("The current Buy Price of the Studded Wheel " + studdedWheelMarketValue * 2 + " coin.");
    let studdedWheelCostElement = document.getElementById("studdedWheelCost");
    studdedWheelCostElement.textContent = " The cost to craft a Studded Wheel is " + studdedWheelCost + " coin.";
    let studdedWheelRecommendationElement = document.getElementById("studdedWheelRecommendation");
    studdedWheelRecommendationElement.textContent = studdedWheelRecommendation;
    let studdedWheelInfoElement = document.getElementById("studdedWheelInfo");
    if (isNaN(studdedWheelCost)) {
        studdedWheelRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
    } else if (studdedWheelCost >= studdedWheelMarketValue * 2) {
        studdedWheelRecommendationElement.textContent = "Buy the Studded Wheel for an estimated savings of " + (studdedWheelCost - studdedWheelMarketValue * 2) + " coin";
    } else {
        studdedWheelRecommendationElement.textContent = "Craft the Studded Wheel for an estimated savings of " + (studdedWheelMarketValue * 2 - studdedWheelCost) + " coin";
    }
    studdedWheelInfoElement.style.display = "block";

}
function getChainedWheelCost() {
    let chainedWheelScrap = scrapValue100 * 6;
    let chainedWheelCopper = copperValue100 * 1.3;
    let smallWheelScrap = scrapValue100 * .15;
    let smallWheelCopper = copperValue100 * .03;
    let smallWheelCost = smallWheelScrap + smallWheelCopper;
    let mediumWheelScrap = scrapValue100 * .15;
    let mediumWheelCopper = copperValue100 * .03;
    let mediumWheelCost = mediumWheelScrap + mediumWheelCopper;
    let chainedWheelCost = mediumWheelCost + smallWheelCost + chainedWheelScrap + chainedWheelCopper + rareWorkBenchCoupon;
    let chainedWheelMarketValue = parseFloat(prompt("What is the current market price of a chainedWheel?"));
    console.log("The cost to craft a chainedWheel is " + chainedWheelCost);
    let chainedWheelMarketValueElement = document.getElementById("chainedWheelMarketValue");
    chainedWheelMarketValueElement.textContent = ("The current Buy Price of the Chained Wheel " + chainedWheelMarketValue * 2 + " coin.");
    let chainedWheelCostElement = document.getElementById("chainedWheelCost");
    chainedWheelCostElement.textContent = " The cost to craft a Chained Wheel is " + chainedWheelCost + " coin.";
    let chainedWheelRecommendationElement = document.getElementById("chainedWheelRecommendation");
    chainedWheelRecommendationElement.textContent = chainedWheelRecommendation;
    let chainedWheelInfoElement = document.getElementById("chainedWheelInfo");
    if (isNaN(chainedWheelCost)) {
        chainedWheelRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
    } else if (chainedWheelCost >= chainedWheelMarketValue * 2) {
        chainedWheelRecommendationElement.textContent = "Buy the Chained Wheel for an estimated savings of " + (chainedWheelCost - chainedWheelMarketValue * 2) + " coin";
    } else {
        chainedWheelRecommendationElement.textContent = "Craft the Chained Wheel for an estimated savings of " + (chainedWheelMarketValue * 2 - chainedWheelCost) + " coin";
    }
    chainedWheelInfoElement.style.display = "block";

}
function getChainedWheelStCost() {
    let chainedWheelStScrap = scrapValue100 * 6;
    let chainedWheelStCopper = copperValue100 * 1.3;
    let smallWheelStScrap = scrapValue100 * .15;
    let smallWheelStCopper = copperValue100 * .03;
    let smallWheelStCost = smallWheelStScrap + smallWheelStCopper;
    let mediumWheelStScrap = scrapValue100 * .15;
    let mediumWheelStCopper = copperValue100 * .03;
    let mediumWheelStCost = mediumWheelStScrap + mediumWheelStCopper;
    let chainedWheelStCost = mediumWheelStCost + smallWheelStCost + chainedWheelStScrap + chainedWheelStCopper + rareWorkBenchCoupon;
    let chainedWheelStMarketValue = parseFloat(prompt("What is the current market price of a chainedWheelSt?"));
    console.log("The cost to craft a chainedWheelSt is " + chainedWheelStCost);
    let chainedWheelStMarketValueElement = document.getElementById("chainedWheelStMarketValue");
    chainedWheelStMarketValueElement.textContent = ("The current Buy Price of the Chained Wheel St " + chainedWheelStMarketValue * 2 + " coin.");
    let chainedWheelStCostElement = document.getElementById("chainedWheelStCost");
    chainedWheelStCostElement.textContent = " The cost to craft a Chained Wheel St is " + chainedWheelStCost + " coin.";
    let chainedWheelStRecommendationElement = document.getElementById("chainedWheelStRecommendation");
    chainedWheelStRecommendationElement.textContent = chainedWheelStRecommendation;
    let chainedWheelStInfoElement = document.getElementById("chainedWheelStInfo");
    if (isNaN(chainedWheelStCost)) {
        chainedWheelStRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
    } else if (chainedWheelStCost >= chainedWheelStMarketValue * 2) {
        chainedWheelStRecommendationElement.textContent = "Buy the Chained Wheel St for an estimated savings of " + (chainedWheelStCost - chainedWheelStMarketValue * 2) + " coin";
    } else {
        chainedWheelStRecommendationElement.textContent = "Craft the Chained Wheel St for an estimated savings of " + (chainedWheelStMarketValue * 2 - chainedWheelStCost) + " coin";
    }
    chainedWheelStInfoElement.style.display = "block";
}
function getSledgehammerCost() {
    let sledgehammerScrap = scrapValue100 * 6;
    let sledgehammerCopper = copperValue100 * 1.3;
    let carJackScrap = scrapValue100 * .20;
    let carJackCopper = copperValue100 * .04;
    let carJackCost = carJackScrap + carJackCopper;
    let luparaScrap = scrapValue100 * .30;
    let luparaCopper = copperValue100 * .06;
    let luparaCost = luparaScrap + luparaCopper;
    let sledgehammerCost = luparaCost + carJackCost + sledgehammerScrap + sledgehammerCopper + rareWorkBenchCoupon;
    let sledgehammerMarketValue = parseFloat(prompt("What is the current market price of a sledgehammer?"));
    console.log("The cost to craft a sledgehammer is " + sledgehammerCost);
    let sledgehammerMarketValueElement = document.getElementById("sledgehammerMarketValue");
    sledgehammerMarketValueElement.textContent = ("The current Buy Price of the Sledgehammer " + sledgehammerMarketValue + " coin.");
    let sledgehammerCostElement = document.getElementById("sledgehammerCost");
    sledgehammerCostElement.textContent = " The cost to craft a Sledgehammer is " + sledgehammerCost + " coin.";
    let sledgehammerRecommendationElement = document.getElementById("sledgehammerRecommendation");
    sledgehammerRecommendationElement.textContent = sledgehammerRecommendation;
    let sledgehammerInfoElement = document.getElementById("sledgehammerInfo");
    if (isNaN(sledgehammerCost)) {
        sledgehammerRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
    } else if (sledgehammerCost >= sledgehammerMarketValue) {
        sledgehammerRecommendationElement.textContent = "Buy the Sledgehammer for an estimated savings of " + (sledgehammerCost - sledgehammerMarketValue) + " coin";
    } else {
        sledgehammerRecommendationElement.textContent = "Craft the Sledgehammer for an estimated savings of " + (sledgehammerMarketValue - sledgehammerCost) + " coin";
    }
    sledgehammerInfoElement.style.display = "block";
}
function getWaspCost() {
    let waspScrap = scrapValue100 * 6;
    let waspCopper = copperValue100 * 1.3;
    let avengerScrap = scrapValue100 * .30;
    let avengerCopper = copperValue100 * .06;
    let avengerCost = avengerScrap + avengerCopper;
    let fuelBarrelScrap = scrapValue100 * .60;
    let fuelBarrelCopper = copperValue100 * .12;
    let fuelBarrelCost = fuelBarrelScrap + fuelBarrelCopper;
    let waspCost = fuelBarrelCost + avengerCost + waspScrap + waspCopper + rareWorkBenchCoupon;
    let waspMarketValue = parseFloat(prompt("What is the current market price of a Wasp?"));
    console.log("The cost to craft a wasp is " + waspCost);
    let waspMarketValueElement = document.getElementById("waspMarketValue");
    waspMarketValueElement.textContent = ("The current Buy Price of the Wasp " + waspMarketValue + " coin.");
    let waspCostElement = document.getElementById("waspCost");
    waspCostElement.textContent = " The cost to craft a Wasp is " + waspCost + " coin.";
    let waspRecommendationElement = document.getElementById("waspRecommendation");
    waspRecommendationElement.textContent = waspRecommendation;
    let waspInfoElement = document.getElementById("waspInfo");
    if (isNaN(waspCost)) {
        waspRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
    } else if (waspCost >= waspMarketValue) {
        waspRecommendationElement.textContent = "Buy the Wasp for an estimated savings of " + (waspCost - waspMarketValue) + " coin";
    } else {
        waspRecommendationElement.textContent = "Craft the Wasp for an estimated savings of " + (waspMarketValue - waspCost) + " coin";
    }
    waspInfoElement.style.display = "block";
}
function getGrowlCost() {
    let growlScrap = scrapValue100 * 7;
    let growlCopper = copperValue100 * 1.3;
    let sprinterCabScrap = scrapValue100 * .75;
    let sprinterCabCopper = copperValue100 * .15;
    let sprinterCabCost = sprinterCabScrap + sprinterCabCopper;
    let luparaScrap = scrapValue100 * .30;
    let luparaCopper = copperValue100 * .06;
    let luparaCost = luparaScrap + luparaCopper;
    let growlCost = luparaCost + sprinterCabCost + growlScrap + growlCopper + rareWorkBenchCoupon;
    let growlMarketValue = parseFloat(prompt("What is the current market price of a growl?"));
    console.log("The cost to craft a growl is " + growlCost);
    let growlMarketValueElement = document.getElementById("growlMarketValue");
    growlMarketValueElement.textContent = ("The current Buy Price of the growl " + growlMarketValue + " coin.");
    let growlCostElement = document.getElementById("growlCost");
    growlCostElement.textContent = " The cost to craft a growl is " + growlCost + " coin.";
    let growlRecommendationElement = document.getElementById("growlRecommendation");
    growlRecommendationElement.textContent = growlRecommendation;
    let growlInfoElement = document.getElementById("growlInfo");
    if (isNaN(growlCost)) {
        growlRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
    } else if (growlCost >= growlMarketValue) {
        growlRecommendationElement.textContent = "Buy the Growl for an estimated savings of " + (growlCost - growlMarketValue) + " coin";
    } else {
        growlRecommendationElement.textContent = "Craft the Growl for an estimated savings of " + (growlMarketValue - growlCost) + " coin";
    }
    growlInfoElement.style.display = "block";
}
function getBigGCost() {
    let bigGScrap = scrapValue100 * 7;
    let bigGCopper = copperValue100 * 1.3;
    let avengerScrap = scrapValue100 * .30;
    let avengerCopper = copperValue100 * .06;
    let avengerCost = avengerScrap + avengerCopper;
    let aviatorScrap = scrapValue100 * .55;
    let aviatorCopper = copperValue100 * .11;
    let aviatorCost = aviatorScrap + aviatorCopper;
    let bigGCost = avengerCost + aviatorCost + bigGScrap + bigGCopper + rareWorkBenchCoupon;
    let bigGMarketValue = parseFloat(prompt("What is the current market price of a Big G?"));
    console.log("The cost to craft a bigG is " + bigGCost);
    let bigGMarketValueElement = document.getElementById("bigGMarketValue");
    bigGMarketValueElement.textContent = ("The current Buy Price of the Big G " + bigGMarketValue + " coin.");
    let bigGCostElement = document.getElementById("bigGCost");
    bigGCostElement.textContent = " The cost to craft a Big G is " + bigGCost + " coin.";
    let bigGRecommendationElement = document.getElementById("bigGRecommendation");
    bigGRecommendationElement.textContent = bigGRecommendation;
    let bigGInfoElement = document.getElementById("bigGInfo");
    if (isNaN(bigGCost)) {
        bigGRecommendationElement.textContent = "Invalid input. Please enter valid numeric values for resource market values.";
    } else if (bigGCost >= bigGMarketValue) {
        bigGRecommendationElement.textContent = "Buy the Big G for an estimated savings of " + (bigGCost - bigGMarketValue) + " coin";
    } else {
        bigGRecommendationElement.textContent = "Craft the Big G for an estimated savings of " + (bigGMarketValue - bigGCost) + " coin";
    }
    bigGInfoElement.style.display = "block";
}


