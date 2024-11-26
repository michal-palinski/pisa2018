am4core.ready(function() {

    									// Themes begin
    									am4core.useTheme(am4themes_animated);
    									// Themes end

    									 // Create map instance
    									var chart = am4core.create("chart_3", am4maps.MapChart);
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
            value:555.2363
            },
            {cnt: 'Canada',
             id:'CA',
            value:520.0855
            },
            {cnt: 'Korea',
             id:'KR',
            value:514.0523
            },
            {cnt: 'Poland',
             id:'PL',
            value:511.8557
            },
            {cnt: 'United States',
             id:'US',
            value:505.3528
            },
            {cnt: 'United Kingdom',
             id:'GB',
            value:503.9281
            },
            {cnt: 'Japan',
             id:'JP',
            value:503.856
            },
            {cnt: 'Australia',
             id:'AU',
            value:502.6317
            },
            {cnt: 'Taiwan',
             id:'TW',
            value:502.6011
            },
            {cnt: 'Germany',
             id:'DE',
            value:498.2793
            },
            {cnt: 'France',
             id:'FR',
            value:492.6065
            },
            {cnt: 'Portugal',
             id:'PT',
            value:491.8008
            },
            {cnt: 'Russia',
             id:'RU',
            value:478.5019
            },
            {cnt: 'Italy',
             id:'IT',
            value:476.2847
            },
            {cnt: '',
             id:'UK',
            value:465.9501
            },
            {cnt: 'Turkey',
             id:'TR',
            value:465.6317
            },
            {cnt: 'Chile',
             id:'CL',
            value:452.2726
            },
            {cnt: 'United Arab Emirates',
             id:'AE',
            value:431.7818
            },
            {cnt: 'Mexico',
             id:'MX',
            value:420.4689
            },
            {cnt: 'Jordan',
             id:'JO',
            value:419.0637
            },
            {cnt: 'Malaysia',
             id:'MY',
            value:414.9795
            },
            {cnt: 'Brazil',
             id:'BR',
            value:412.8733
            },
            {cnt: 'Colombia',
             id:'CO',
            value:412.2951
            },
            {cnt: 'Argentina',
             id:'AR',
            value:401.5031
            },
            {cnt: 'Peru',
             id:'PE',
            value:400.5137
            },
            {cnt: 'Saudi Arabia',
             id:'SA',
            value:399.1517
            },
            {cnt: 'Thailand',
             id:'TH',
            value:392.8886
            },
            {cnt: 'Kazakhstan',
             id:'KZ',
            value:386.9093
            },
            {cnt: 'Indonesia',
             id:'ID',
            value:370.9654
            },
            {cnt: 'Morocco',
             id:'MA',
            value:359.3879
            },
            {cnt: 'Philippines',
             id:'PH',
            value:339.6916
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
    									polygonTemplate.tooltipText = "[bold]{cnt}[\] \n Reading result: {value}";
    									polygonTemplate.nonScalingStroke = true;
    									polygonTemplate.strokeWidth = 0.5;

    									// Create hover state and set alternative fill color
    									var hs = polygonTemplate.states.create("hover");
    									hs.properties.fill = am4core.color("#3c5bdc");

    									}); // end am4core.ready()
