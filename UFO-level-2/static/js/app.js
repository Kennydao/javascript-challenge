// from data.js
var tableData = data

// Part 2

// use d3 to select tbody tag
var tbody = d3.select("tbody");

// update each cell's text with tableData values
function init(inputData) {
    inputData.forEach((tableRow) => {
    // append one table row for each tableData object
        var row = tbody.append("tr");

        Object.entries(tableRow).forEach(([key, value]) => {
        // Append a cell to the row for each value
        // in the tableData object
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// Select the fitler table button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

// Create event handlers
button.on("click", runEnter);
// form.on("submit",runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var input1 = d3.select("#datetime");

    // Get the value property of the input element
    var inputDate = input1.property("value");

    var input2 = d3.select("#city");
    var inputCity = input2.property("value");

    var input3 = d3.select("#state");
    var inputState = input3.property("value");

    var input4 = d3.select("#country");
    var inputCountry = input4.property("value");

    var input5 = d3.select("#shape");
    var inputShape = input5.property("value");


// Use the form input to filter the data by blood type
    var filterredData = tableData.filter(x => x.datetime === inputDate &
        x.city === inputCity & x.state === inputState & x.country === inputCountry &
        x.shape === inputShape);

    if (filterredData.length === 0) {
        init(tableData);
    }
    else {
        console.log(filterredData);

        // use d3 to select table body
        var tbody = d3.select("tbody");

        // clear the existing content being displayed in the filter table area
        tbody.html("");
        init(filterredData);
        }
    };

init(tableData);
