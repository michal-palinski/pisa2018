am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end



var chart = am4core.create("chart_11", am4charts.XYChart);

var data = [];
var low_achieving = [248.1,
264.85,
274.09,
276.64,
283.42,
283.91,
285.87,
286.4,
293.7,
295.06,
300.01,
302.29,
303.15,
313.78,
331.25,
339.6,
345.11,
350.93,
353.95,
355.4,
356.64,
356.67,
360.58,
362.11,
366.87,
371.93,
374.43,
377.2,
384.23,
387.59,
440.59];
var high_achieving = [452.94,
459.7,
529.31,
471.57,
522.99,
584.16,
548.13,
506.74,
490.2,
500.57,
531.5,
523.74,
524.26,
530.22,
571.85,
582.17,
598.18,
581.01,
632.25,
621.89,
640.49,
597.46,
642.59,
612.55,
629.84,
632.4,
626.96,
639.54,
635.97,
646.38,
665.58
];

var names = ["Philippines",
"Morocco",
"Argentina",
"Indonesia",
"Peru",
"United Arab Emirates",
"Brazil",
"Saudi Arabia",
"Kazakhstan",
"Thailand",
"Colombia",
"Malaysia",
"Jordan",
"Mexico",
"Chile",
"Ukraine",
"Italy",
"Turkey",
"Germany",
"France",
"Australia",
"Russia",
"United States",
"Portugal",
"Taipei",
"UK",
"Japan",
"Korea",
"Poland",
"Canada",
"B-S-J-Z (China)"];


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
