var width = 960, height = 600;

var populationById = d3.map();
var stateById = d3.map();
var countyById = d3.map();

var dataRange = [1000, 5000, 15000, 30000, 50000, 100000, 500000, 1000000];
var colorRange = [
	'rgb(247,251,255)', 'rgb(222,235,247)', 'rgb(198,219,239)',
	'rgb(158,202,225)', 'rgb(107,174,214)', 'rgb(66,146,198)',
	'rgb(33,113,181)', 'rgb(8,81,156)', 'rgb(8,48,107)'];
		
var quantize = d3.scale.threshold().domain(dataRange).range(colorRange);

var projection = d3.geo.albersUsa().scale(1280).translate([width / 2, height / 2]);

var path = d3.geo.path().projection(projection);

var svg = d3.select("#main").append("svg").attr("width", width).attr("height", height);

var legend = d3.select("aside");

queue()
	.defer(d3.json, "static/data/us.json")
	.defer(d3.csv, "static/data/pop-data.csv", function(d) {
				populationById.set(d.id, +d.population);
				stateById.set(d.id, d.state);
				countyById.set(d.id, d.county);
			})
	.await(ready);

function ready(error, us) {
	if (error) throw error;

	var legendLabels = [];
	legendLabels.push("less than " + dataRange[0]);
	for (var i = 1; i < dataRange.length; i++) {
		legendLabels.push(dataRange[i-1] + " to " + dataRange[i]);
	}
	legendLabels.push("more than " + dataRange[dataRange.length-1]);
			
	paths = svg.append("g")
		.attr("class", "counties")
		.selectAll("path")
		.data(topojson.feature(us, us.objects.counties).features)
		.enter().append("path")
		.style("fill", function(d) { 
			return quantize(populationById.get(d.id));
		})
		.attr("d", path);
	paths.on('mouseenter', function(d, i) {
		d3.select(this)
			.classed('highlighted', true);
		d3.select('#county').text(countyById.get(d.id));
		d3.select('#state').text(stateById.get(d.id));
		d3.select('#population').text('Population: ' + populationById.get(d.id));
		d3.select('.info-box').style('display', 'block');
	});
	paths.on('mouseleave', function(d, i) {
		d3.select(this)
			.classed('highlighted', false);
		d3.select('.info-box').style('display', 'none');
	});
	svg.append("path")
		.datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
		.attr("class", "states")
		.attr("d", path);

	for (var j = 0; j < colorRange.length; j++) {
		legDiv = legend.append("div")
			.attr("class", "legend");
		legDiv.append("svg")
			.attr("width", "20")
			.attr("height", "20")
			.append("rect")
			.attr("width", "20")
			.attr("height", "20")
			.style("fill", colorRange[j]);
				
		legDiv.append("p")
			.attr("class", "label")
			.text(legendLabels[j]);

	}

}

d3.select(self.frameElement).style("height", height + "px");
