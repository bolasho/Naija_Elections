var temperatureIndexJSON = [
  {
    key: "Temp +- Avg.",
    values: [{ "x": 1998, "y": 0.45 }, { "x": 1999, "y": 0.48 }, { "x": 2000, "y": 0.5 }, { "x": 2001, "y": 0.52 }, { "x": 2002, "y": 0.55 }, { "x": 2003, "y": 0.58 }, { "x": 2004, "y": 0.6 }, { "x": 2005, "y": 0.61 }, { "x": 2006, "y": 0.61 }, { "x": 2007, "y": 0.61 }, { "x": 2008, "y": 0.62 }, { "x": 2009, "y": 0.62 }, { "x": 2010, "y": 0.62 }, { "x": 2011, "y": 0.63 }, { "x": 2012, "y": 0.67 }, { "x": 2013, "y": 0.71 }, { "x": 2014, "y": 0.77 }, { "x": 2015, "y": 0.83 }, { "x": 2016, "y": 0.89 }, { "x": 2017, "y": 0.95 }]
  }
];


nv.addGraph(function () {
  var chart = nv.models.lineChart() // Initialise the lineChart object.
    .useInteractiveGuideline(true); // Turn on interactive guideline (tooltips) 
chart.xAxis
    .axisLabel('TimeStamp (Year)'); // Set the label of the xAxis (Vertical)
chart.yAxis
    .axisLabel('Degrees (c)') // Set the label of the xAxis (Horizontal)
    .tickFormat(d3.format('.02f')); // Rounded Numbers Format.
d3.select('#averageDegreesLineChart svg') // Select the ID of the html element we defined earlier.
    .datum(temperatureIndexJSON) // Pass in the JSON
    .transition().duration(500) // Set transition speed
    .call(chart); // Call & Render the chart
  nv.utils.windowResize(chart.update); // Intitiate listener for window resize so the chart responds and changes width.
  return;
});

var populationBySexAndCountryJSON = [{
        "key": "Male",
        "color": "#d62728",
        "values": [{
                "label": "China",
                "value": 717723466.166
            },
            {
                "label": "India",
                "value": 647356171.132
            },
            {
                "label": "United States of America",
                "value": 157464952.272
            },
            {
                "label": "Indonesia",
                "value": 125682412.393
            },
            {
                "label": "Brazil",
                "value": 98578067.1
            },
            {
                "label": "Pakistan",
                "value": 93621293.316
            },
            {
                "label": "Nigeria",
                "value": 88370210.605
            },
            {
                "label": "Bangladesh",
                "value": 79237050.772
            },
            {
                "label": "Russian Federation",
                "value": 65846330.629
            },
            {
                "label": "Japan",
                "value": 61918921.999
            }
        ]
    },
    {
        "key": "Female",
        "color": "#1f77b4",
        "values": [{
                "label": "China",
                "value": 667843070.834
            },
            {
                "label": "India",
                "value": 604783424.868
            },
            {
                "label": "United States of America",
                "value": 162585763.728
            },
            {
                "label": "Indonesia",
                "value": 124183218.607
            },
            {
                "label": "Brazil",
                "value": 101783857.9
            },
            {
                "label": "Pakistan",
                "value": 88521300.684
            },
            {
                "label": "Nigeria",
                "value": 85245134.395
            },
            {
                "label": "Bangladesh",
                "value": 77357911.228
            },
            {
                "label": "Russian Federation",
                "value": 76987358.371
            },
            {
                "label": "Japan",
                "value": 65224655.001
            }

        ]
    }
];

nv.addGraph(function () {
    var chart = nv.models.multiBarChart().x(function (d) {
            return d.label; // Configure x axis to use the "label" within the json.
        })
        .y(function (d) { // Configure y axis to use the "value" within the json.
            return d.value; 
        }).margin({ // Add some CSS Margin to the chart.
            top: 30,
            right: 20,
            bottom: 50,
            left: 85
        })
        .showControls(false) // Turn of switchable control
        .stacked(true); // Force stacked mode.

    chart.xAxis
        .axisLabel('Countries'); // add label to the horizontal axis

    chart.yAxis
        .tickFormat(d3.format('0f')); // Round the yAxis values

    d3.select('#worldPopulationMultiStackedBar svg') // Select the html element by ID
        .datum(populationBySexAndCountryJSON) // Pass in the data
        .transition().duration(500) // Set transition speed
        .call(chart); // Call & Render chart

    nv.utils.windowResize(chart.update); // Intitiate listener for window resize so the chart responds and changes width.

    return;
});
nv.addGraph(function () {
    var chart = nv.models.multiBarHorizontalChart().x(function (d) {
            return d.label; // Configure x axis to use the "label" within the json.
        })
        .y(function (d) { // Configure y axis to use the "value" within the json.
            return d.value; 
        }).margin({ // Add some CSS Margin to the chart.
            top: 30,
            right: 20,
            bottom: 50,
            left: 85
        })
        .showControls(false) // Turn of switchable control
        .stacked(true); // Force stacked mode.

    chart.xAxis
        .axisLabel('Countries'); // add label to the horizontal axis

    chart.yAxis
        .tickFormat(d3.format('0f')); // Round the yAxis values

    d3.select('#worldPopulationMultiStackedBar svg') // Select the html element by ID
        .datum(populationBySexAndCountryJSON) // Pass in the data
        .transition().duration(500) // Set transition speed
        .call(chart); // Call & Render chart

    nv.utils.windowResize(chart.update); // Intitiate listener for window resize so the chart responds and changes width.

    return;
});

//Donut chart example
nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true)     //Display pie labels
      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
      .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
      .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
      .donutRatio(0.35)     //Configure how big you want the donut hole size to be.
      ;

    d3.select("#chart2 svg")
        .datum(exampleData())
        .transition().duration(350)
        .call(chart);

  return chart;
});


