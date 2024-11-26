am4core.ready(function() {

    									// Themes begin
    									am4core.useTheme(am4themes_animated);
    									// Themes end

    									 // Create map instance
    									var chart = am4core.create("chart_9", am4maps.MapChart);
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
                        {cnt: 'China',
                         id:'CN',
                        value:590.5
                        },
                        {cnt: 'Japan',
                         id:'JP',
                        value:529.1
                        },
                        {cnt: 'Korea',
                         id:'KR',
                        value:519.0
                        },
                        {cnt: 'Canada',
                         id:'CA',
                        value:518.0
                        },
                        {cnt: 'Taiwan',
                         id:'TW',
                        value:515.7
                        },
                        {cnt: 'Poland',
                         id:'PL',
                        value:511.0
                        },
                        {cnt: 'United Kingdom',
                         id:'UK',
                        value:469.0
                        },
                        {cnt: 'Germany',
                         id:'DE',
                        value:503.0
                        },
                        {cnt: 'Australia',
                         id:'AU',
                        value:503.0
                        },
                        {cnt: 'United States',
                         id:'US',
                        value:502.4
                        },
                        {cnt: 'France',
                         id:'FR',
                        value:493.0
                        },
                        {cnt: 'Portugal',
                         id:'PT',
                        value:491.7
                        },
                        {cnt: 'Russia',
                         id:'RU',
                        value:477.7
                        },
                        {cnt: 'Turkey',
                         id:'TR',
                        value:468.3
                        },
                        {cnt: 'Italia',
                         id:'IT',
                        value:468.0
                        },
                        {cnt: 'Chile',
                         id:'CL',
                        value:443.6
                        },
                        {cnt: 'Morocco',
                         id:'MA',
                        value:437.6
                        },
                        {cnt: 'United Arab Emirates',
                         id:'AE',
                        value:433.6
                        },
                        {cnt: 'Jordan',
                         id:'JO',
                        value:429.3
                        },
                        {cnt: 'Thailand',
                         id:'TH',
                        value:425.8
                        },
                        {cnt: 'Mexico',
                         id:'MX',
                        value:419.2
                        },
                        {cnt: 'Colombia',
                         id:'CO',
                        value:413.3
                        },
                        {cnt: 'Peru',
                         id:'PE',
                        value:404.2
                        },
                        {cnt: 'Argentina',
                         id:'AR',
                        value:404.1
                        },
                        {cnt: 'Brazil',
                         id:'BR',
                        value:403.6
                        },
                        {cnt: 'Kazachstan',
                         id:'KZ',
                        value:397.1
                        },
                        {cnt: 'Indonesia',
                         id:'ID',
                        value:396.1
                        },
                        {cnt: 'Saudi Arabia',
                         id:'SA',
                        value:386.2
                        },
                        {cnt: '',
                         id:'MO',
                        value:376.6
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
    									polygonTemplate.tooltipText = "[bold]{cnt}[\] \n Science result: {value}";
    									polygonTemplate.nonScalingStroke = true;
    									polygonTemplate.strokeWidth = 0.5;

    									// Create hover state and set alternative fill color
    									var hs = polygonTemplate.states.create("hover");
    									hs.properties.fill = am4core.color("#3c5bdc");

    									}); // end am4core.ready()
