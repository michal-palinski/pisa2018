am4core.ready(function() {

    									// Themes begin
    									am4core.useTheme(am4themes_animated);
    									// Themes end

    									 // Create map instance
    									var chart = am4core.create("chart_6", am4maps.MapChart);
    									// chart.maxZoomLevel = 1;
                      chart.chartContainer.wheelable = false;
    									// Set map definition
    									try {
    									    chart.geodata = am4geodata_worldHigh;
    									}
    									catch (e) {
    									    chart.raiseCriticalError(new Error("Map geodata could not be loaded. Please download the latest <a href=\"https://www.amcharts.com/download/download-v4/\">amcharts geodata</a> and extract its contents into the same directory as your amCharts files."));
    									}

    									// Set projection
    									chart.projection = new am4maps.projections.Mercator();

    									// Create map polygon series
    									// var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    									// map polygon series (countries)
    									var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    									polygonSeries.useGeodata = true;
    									// specify which countries to include

    									polygonSeries.exclude = ["AQ"];

    									// country area look and behavior
    									var polygonTemplate = polygonSeries.mapPolygons.template;
    									polygonTemplate.strokeOpacity = 1;
    									polygonTemplate.stroke = am4core.color("#ffffff");
    									polygonTemplate.fillOpacity = 0.9;
    									polygonTemplate.tooltipText = "{name}";


    									//Set min/max fill color for each area
    									polygonSeries.heatRules.push({
    									  property: "fill",
    									  target: polygonSeries.mapPolygons.template,
    									  min: chart.colors.getIndex(1).brighten(1),
    									  max: chart.colors.getIndex(1).brighten(-.7)
    									});

    									// Make map load polygon data (state shapes and names) from GeoJSON
    									polygonSeries.useGeodata = true;

    									// Set heatmap values for each state
    									polygonSeries.data = [
                        {cnt: '',
 id:'CN',
value:591.4
},
{cnt: '',
 id:'TW',
value:531.1
},
{cnt: '',
 id:'JP',
value:527.0
},
{cnt: '',
 id:'KR',
value:525.9
},
{cnt: '',
 id:'PL',
value:515.6
},
{cnt: '',
 id:'CA',
value:512.0
},
{cnt: '',
 id:'UK',
value:453.1
},
{cnt: '',
 id:'DE',
value:500.0
},
{cnt: '',
 id:'FR',
value:495.4
},
{cnt: '',
 id:'PT',
value:492.5
},
{cnt: '',
 id:'AU',
value:491.4
},
{cnt: '',
 id:'RU',
value:487.8
},
{cnt: '',
 id:'IT',
value:486.6
},
{cnt: '',
 id:'US',
value:478.2
},
{cnt: '',
 id:'TR',
value:453.5
},
{cnt: '',
 id:'MA',
value:440.2
},
{cnt: '',
 id:'AE',
value:434.9
},
{cnt: '',
 id:'KZ',
value:423.1
},
{cnt: '',
 id:'TH',
value:418.6
},
{cnt: '',
 id:'CO',
value:417.4
},
{cnt: '',
 id:'MX',
value:408.8
},
{cnt: '',
 id:'PE',
value:399.8
},
{cnt: '',
 id:'JO',
value:399.8
},
{cnt: '',
 id:'CL',
value:390.9
},
{cnt: '',
 id:'BR',
value:383.6
},
{cnt: '',
 id:'AR',
value:379.5
},
{cnt: '',
 id:'ID',
value:378.7
},
{cnt: '',
 id:'SA',
value:373.2
},
{cnt: '',
 id:'MO',
value:367.7
},
{cnt: '',
 id:'PH',
value:352.6
},


    									];

    									// Set up heat legend
    									let heatLegend = chart.createChild(am4maps.HeatLegend);
    									heatLegend.series = polygonSeries;
    									heatLegend.align = "right";
    									heatLegend.valign = "bottom";
    									heatLegend.width = am4core.percent(20);
    									heatLegend.valueAxis.renderer.labels.template.fontSize = 14;
    									heatLegend.marginRight = am4core.percent(35);
    									heatLegend.minValue = 300;
    									heatLegend.maxValue = 600;

    									// Set up custom heat map legend labels using axis ranges
    									var minRange = heatLegend.valueAxis.axisRanges.create();
    									minRange.value = heatLegend.minValue;
    									minRange.label.text = "300";
    									var maxRange = heatLegend.valueAxis.axisRanges.create();
    									maxRange.value = heatLegend.maxValue;
    									maxRange.label.text = "600";

    									// Blank out internal heat legend value axis labels
    									heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
    									  return "";
    									});

    									// Configure series tooltip
    									var polygonTemplate = polygonSeries.mapPolygons.template;
    									polygonTemplate.tooltipText = "[bold]{cnt}[\] \n Math result: {value}";
    									polygonTemplate.nonScalingStroke = true;
    									polygonTemplate.strokeWidth = 0.5;

    									// Create hover state and set alternative fill color
    									var hs = polygonTemplate.states.create("hover");
    									hs.properties.fill = am4core.color("#3c5bdc");

    									}); // end am4core.ready()
