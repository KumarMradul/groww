const switchToggle = document.getElementById('switch');
        switchToggle.addEventListener('change', function() {
            document.body.classList.toggle('dark-mode');
        });


// nifty stock price 
    var finalPrice = 22742.00; // Set initial final price
    var changeValue = 0; // Initial change value
    var percentageChange = 0; // Initial percentage change
    var stockInfoElement = document.getElementById('stockInfo');

function updateStockInfo() {
    finalPrice += Math.random() * 10 - 5; // Update final price randomly
    changeValue = finalPrice - 22742.00;
    percentageChange = (changeValue / 22742.00) * 100;

    stockInfoElement.innerHTML = `
        <p>${finalPrice.toFixed(2)}</p>
        <p>${changeValue.toFixed(2)}</p>
        <p>(${percentageChange.toFixed(2)}%)</p>
    `;
}

// Update stock info every second (1000 milliseconds)
setInterval(updateStockInfo, 1000);


function updateGraphInfo(finalPrice, changeValue, graphContainer) {
    finalPrice += Math.random() * 10 - 5;
    changeValue = finalPrice - changeValue;
    var percentageChange = (changeValue / finalPrice) * 100;

    graphContainer.innerHTML = `
        <p>${finalPrice.toFixed(2)}</p>
        <p>${changeValue.toFixed(2)}</p>
        <p>(${percentageChange.toFixed(2)}%)</p>
    `;
}

// sensex
var finalPriceGraph1 = 75010.00;
var changeValueGraph1 = 0;
var graph1Container = document.getElementById('graph1Container');
setInterval(function() {
    updateGraphInfo(finalPriceGraph1, 75010.00, graph1Container);
}, 1000);


// BankNifty
var finalPriceGraph2 = 48800.00;
var changeValueGraph2 = 0;
var graph2Container = document.getElementById('graph2Container');
setInterval(function() {
    updateGraphInfo(finalPriceGraph2, 48800.00, graph2Container);
}, 1000);

// Repeat the same pattern for other graphs



// Box graph

// var finalPriceGraph3 = 800; // Set initial final price for Graph 3
//         var changeValueGraph3 = 0; // Initial change value for Graph 3
//         var percentageChangeGraph3 = 0; // Initial percentage change for Graph 3

//         var graph3Container = document.getElementById('graph3Container');

//         function updateGraph3Info() {
//             finalPriceGraph3 += Math.random() * 10 - 5; // Update final price randomly for Graph 3
//             changeValueGraph3 = finalPriceGraph3 - 800;
//             percentageChangeGraph3 = (changeValueGraph3 / 800) * 100;

//             graph3Container.innerHTML = `
//                 <p>${finalPriceGraph3.toFixed(2)}</p>
//                 <p>${changeValueGraph3.toFixed(2)} (${percentageChangeGraph3.toFixed(2)}%)</p>
//             `;
//         }

//         // Update graph 3 info every second (1000 milliseconds)
//         setInterval(updateGraph3Info, 1000);

// // Graph 2
// var finalPriceGraph4 = 1200; // Set initial final price for Graph 4
// var changeValueGraph4 = 0; // Initial change value for Graph 4
// var percentageChangeGraph4 = 0; // Initial percentage change for Graph 4

// var graph4Container = document.getElementById('graph4Container');

// function updateGraph4Info() {
//     finalPriceGraph4 += Math.random() * 10 - 5; // Update final price randomly for Graph 4
//     changeValueGraph4 = finalPriceGraph4 - 1200;
//     percentageChangeGraph4 = (changeValueGraph4 / 1200) * 100;

//     graph4Container.innerHTML = `
//         <p>${finalPriceGraph4.toFixed(2)}</p>
//         <p>${changeValueGraph4.toFixed(2)} (${percentageChangeGraph4.toFixed(2)}%)</p>
//     `;
// }

// // Update graph 4 info every second (1000 milliseconds)
// setInterval(updateGraph4Info, 1000);


// // Graph3
// var finalPriceGraph5 = 1500; // Set initial final price for Graph 5
//         var changeValueGraph5 = 0; // Initial change value for Graph 5
//         var percentageChangeGraph5 = 0; // Initial percentage change for Graph 5

//         var graph5Container = document.getElementById('graph5Container');

//         function updateGraph5Info() {
//             finalPriceGraph5 += Math.random() * 10 - 5; // Update final price randomly for Graph 5
//             changeValueGraph5 = finalPriceGraph5 - 1500;
//             percentageChangeGraph5 = (changeValueGraph5 / 1500) * 100;

//             graph5Container.innerHTML = `
//                 <p>${finalPriceGraph5.toFixed(2)}</p>
//                 <p>${changeValueGraph5.toFixed(2)} (${percentageChangeGraph5.toFixed(2)}%)</p>
//             `;
//         }

//         // Update graph 5 info every second (1000 milliseconds)
//         setInterval(updateGraph5Info, 1000);

// // Graph 4
// var finalPriceGraph6 = 2000; // Set initial final price for Graph 6
//         var changeValueGraph6 = 0; // Initial change value for Graph 6
//         var percentageChangeGraph6 = 0; // Initial percentage change for Graph 6

//         var graph6Container = document.getElementById('graph6Container');

//         function updateGraph6Info() {
//             finalPriceGraph6 += Math.random() * 10 - 5; // Update final price randomly for Graph 6
//             changeValueGraph6 = finalPriceGraph6 - 2000;
//             percentageChangeGraph6 = (changeValueGraph6 / 2000) * 100;

//             graph6Container.innerHTML = `
//                 <p>${finalPriceGraph6.toFixed(2)}</p>
//                 <p>${changeValueGraph6.toFixed(2)} (${percentageChangeGraph6.toFixed(2)}%)</p>
//             `;
//         }

//         // Update graph 6 info every second (1000 milliseconds)
//         setInterval(updateGraph6Info, 1000);

function updateGraph(finalPrice, changeValue, percentageChange, graphContainer) {
    finalPrice += Math.random() * 10 - 5; // Update final price randomly
    changeValue = finalPrice - changeValue;
    percentageChange = (changeValue / finalPrice) * 100;

    graphContainer.innerHTML = `
        <p>${finalPrice.toFixed(2)}</p>
        <p>${changeValue.toFixed(2)}</p>
        <p>(${percentageChange.toFixed(2)}%)</p>
    `;
}

// Tata Steel 
var finalPriceGraph3 = 800;
var changeValueGraph3 = 0;
var graph3Container = document.getElementById('graph3Container');
setInterval(function() {
    updateGraph(finalPriceGraph3, 800, percentageChange, graph3Container);
}, 1000);

// Excide Industries
var finalPriceGraph4 = 1200;
var changeValueGraph4 = 0;
var graph4Container = document.getElementById('graph4Container');
setInterval(function() {
    updateGraph(finalPriceGraph4, 1200, percentageChange, graph4Container);
}, 1000);

// IRFC
var finalPriceGraph5 = 1500;
var changeValueGraph5 = 0;
var graph5Container = document.getElementById('graph5Container');
setInterval(function() {
    updateGraph(finalPriceGraph5, 1500, percentageChange, graph5Container);
}, 1000);

// Reliance Power
var finalPriceGraph6 = 2000;
var changeValueGraph6 = 0;
var graph6Container = document.getElementById('graph6Container');
setInterval(function() {
    updateGraph(finalPriceGraph6, 2000, percentageChange, graph6Container);
}, 1000);
