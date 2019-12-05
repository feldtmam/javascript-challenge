// Instructions:
// Level 1: Automatic Table and Date Search

// Create a basic HTML web page or use the file provided.

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that 
// appends a table to your web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` 
// at the very least.

// Use a date form in your HTML document and write JavaScript code that will listen for events and
// search through the date/time column to find rows that match user input.

// from data.js
var tableData = data;

// Build the table
var tbody = d3.select("tbody");

function buildTable(tableData) {
    // always clear the table before adding the data from the dataset
    tbody.html("");

    //read the data from the dataset and add each row to the table
    tableData.forEach((dataRow) => {
        var row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            var cell = row.append("td");
            cell.text(val);
        });
    });
}

// Add the code that will listen for the events
function handleClick() {

    // prevent any refresh events
    d3.event.preventDefault();

    var filteredData = tableData;

    // Get the datetime value
    var date = d3.select("#datetime").property("value");

    // If a date was entered perform the filtering
    if (date) {
        // Only keep rows that meet the date entered
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Get the city value
    var city = d3.select("#city").property("value");

    // If a city was entered perform the filtering
    if (city) {
        // Only keep rows that meet the city entered
        filteredData = filteredData.filter(row => row.city === city);
    }

    // Get the state value
    var state = d3.select("#state").property("value");

    // If a state was entered perform the filtering
    if (state) {
        // Only keep rows that meet the state entered
        filteredData = filteredData.filter(row => row.state === state);
    }

    // Get the country value
    var country = d3.select("#country").property("value");

    // If a country was entered perform the filtering
    if (country) {
        // Only keep rows that meet the country entered
        filteredData = filteredData.filter(row => row.country === country);
    }

    // Get the shape value
    var shape = d3.select("#shape").property("value");

    // If a shape was entered perform the filtering
    if (shape) {
        // Only keep rows that meet the shape entered
        filteredData = filteredData.filter(row => row.shape === shape);
    }

    // build the filtered table based on date selected
    buildTable(filteredData);
}

// catch the button click event
d3.selectAll("#filter-btn").on("click", handleClick);

// load the page with the full set of data
buildTable(tableData)