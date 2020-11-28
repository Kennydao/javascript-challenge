// from data.js
var tableData = data

// Part 1

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
form.on("submit",runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var input = d3.select("#datetime");

    // Get the value property of the input element
    var inputText = input.property("value");

    //console.log(inputText);

    // verify if input date is blank, refresh with dataset
    if (inputText === "") {
        var tbody = d3.select("tbody");
        tbody.html("");
        init(tableData)
    }
    // otherwise filter out the input date and display the results
    else {
        // Use the form input to filter the data by blood type
        var selectedData = tableData.filter(x => x.datetime === inputText);
        console.log(selectedData);

        // use d3 to select table body
        var tbody = d3.select("tbody");

        // clear the existing content being displayed in the filter table area
        tbody.html("");
        init(selectedData);
    }
};

init(tableData);

// Part 2

