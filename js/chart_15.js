am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end



var chart = am4core.create("chart_15", am4charts.XYChart);

var data = [];
var low_achieving =  [269.5,
286.51,
291.05,
292.47,
293.08,
302.25,
304.25,
306.69,
310.71,
311.51,
315.94,
324.16,
326.02,
335.75,
338.85,
347.97,
350.73,
350.73,
361.14,
363.47,
364.06,
368.49,
368.66,
369.05,
370.54,
382.16,
387.65,
391.57,
392.59,
404.82,
481.81];
var high_achieving = [461.13,
489.38,
523.01,
526.68,
467.63,
572.25,
510.97,
497.91,
523.95,
487.79,
540.84,
535.36,
517.61,
553.38,
537.86,
582.84,
587.87,
587.87,
578.82,
633.14,
614.78,
608.96,
630.64,
586.16,
629.12,
641.28,
641.57,
629.79,
639.56,
645.64,
695.25];

var names = ['Philippines',
'Saudi Arabia',
'Argentina',
'Brazil',
'Morocco',
'United Arab Emirates',
'Peru',
'Kazakhstan',
'Colombia',
'Indonesia',
'Jordan',
'Thailand',
'Mexico',
'Chile',
'Malaysia',
'Italy',
'Ukraine',
'UK',
'Turkey',
'Germany',
'France',
'Portugal',
'Australia',
'Russia',
'United States',
'Taipei',
'Korea',
'Poland',
'Canada',
'Japan',
'B-S-J-Z (China)'];


for (var i = 0; i < names.length; i++) {


  data.push({ category: names[i], open: low_achieving[i], close: high_achieving[i] });
}

chart.data = data;

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.axisFills.template.disabled = true;
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.minGridDistance = 15;
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.inside = true;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
categoryAxis.renderer.labels.template.fill = am4core.color("#a9afbb");


var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.renderer.axisFills.template.disabled = true;
valueAxis.renderer.labels.template.fill = am4core.color("#a9afbb");
valueAxis.min = 200;
valueAxis.max = 700; 


var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = "category";
series.dataFields.openValueX = "open";
series.dataFields.valueX = "close";
series.tooltipText = "10th percentile: {openValueX.value} \n 90th percentile: {valueX.value}";
series.sequencedInterpolation = true;
series.fillOpacity = 0;
series.strokeOpacity = 1;
series.columns.template.height = 0.01;
series.tooltip.pointerOrientation = "vertical";

var openBullet = series.bullets.create(am4charts.CircleBullet);
openBullet.locationX = 1;

var closeBullet = series.bullets.create(am4charts.CircleBullet);

closeBullet.fill = chart.colors.getIndex(4);

closeBullet.stroke = closeBullet.fill;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarY = new am4core.Scrollbar();

var range = categoryAxis.axisRanges.create();
range.category = "Saudi Arabia";
range.axisFill.fill = chart.colors.getIndex(1);
range.axisFill.fillOpacity = 0.2;
range.label.text = "";
}); // end am4core.ready()
