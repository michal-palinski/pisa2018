am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  var data = [];
  var value1 = [56.75,
54.33,
51.1,
38.93,
33.46,
32.79,
31.36,
30.0,
28.94,
26.89,
26.88,
26.13,
25.91,
25.9,
25.68,
25.34,
25.28,
25.24,
24.9,
24.73,
24.25,
23.57,
23.55,
21.9,
20.42,
20.13,
19.81,
16.05,
12.74,
11.12,
10.52,
10.33,];
  var value2 = [403.02,
372.84,
393.06,
372.18,
450.1,
495.45,
487.21,
472.0,
505.73,
325.43,
373.85,
401.58,
347.02,
486.31,
400.03,
358.09,
453.1,
465.78,
480.32,
464.35,
479.85,
502.84,
493.83,
491.7,
493.4,
493.57,
442.49,
393.36,
549.15,
414.68,
395.36,
407.03,];
  var value3 = [459.77,
427.17,
444.16,
411.11,
483.56,
528.24,
518.57,
502.0,
534.67,
352.32,
400.73,
427.71,
372.93,
512.21,
425.71,
383.43,
478.38,
491.02,
505.22,
489.08,
504.1,
526.41,
517.38,
513.6,
513.82,
513.7,
462.3,
409.41,
561.89,
425.8,
405.88,
417.36];

  var names = ['United Arab Emirates',
'Saudi Arabia',
'Jordan',
'Thailand',
'Ukraine',
'Poland',
'Australia',
'OECD Average',
'Canada',
'Philippines',
'Kazakhstan',
'Malaysia',
'Morocco',
'Germany',
'Brazil',
'Indonesia',
'Turkey',
'Russia',
'France',
'Italy',
'Portugal',
'Korea',
'United States',
'Chinese Taipei',
'Japan',
'United Kingdom',
'Chile',
'Argentina',
'B-S-J-Z (China)',
'Mexico',
'Peru',
'Colombia'];


  for (var i = 0; i < names.length; i++) {
    data.push({ category: names[i], value1: value1[i], value2:value2[i], value3:value3[i] });
  }

  var interfaceColors = new am4core.InterfaceColorSet();

  var chart = am4core.create("chart_16", am4charts.XYChart);

  chart.data = data;
  // the following line makes value axes to be arranged vertically.
  chart.bottomAxesContainer.layout = "horizontal";
  chart.bottomAxesContainer.reverseOrder = true;

  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "category";
  categoryAxis.renderer.grid.template.stroke = interfaceColors.getFor("background");
  categoryAxis.renderer.grid.template.strokeOpacity = 1;
  categoryAxis.renderer.grid.template.location = 1;
  categoryAxis.renderer.minGridDistance = 15;
  categoryAxis.renderer.labels.template.fill = am4core.color("#a9afbb");


  var valueAxis1 = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis1.tooltip.disabled = true;
  valueAxis1.renderer.baseGrid.disabled = true;
  valueAxis1.marginRight = 30;
  valueAxis1.renderer.gridContainer.background.fill = interfaceColors.getFor("alternativeBackground");
  valueAxis1.renderer.gridContainer.background.fillOpacity = 0.05;
  valueAxis1.renderer.grid.template.stroke = interfaceColors.getFor("background");
  valueAxis1.renderer.grid.template.strokeOpacity = 1;
  valueAxis1.renderer.labels.template.fill = am4core.color("#a9afbb");

  valueAxis1.title.text = "Performance advantage of girls over boys";

  var series1 = chart.series.push(new am4charts.LineSeries());
  series1.dataFields.categoryY = "category";
  series1.dataFields.valueX = "value1";
  series1.xAxis = valueAxis1;
  series1.name = "Series 1";
  var bullet1 = series1.bullets.push(new am4charts.CircleBullet());
  bullet1.tooltipText = "{valueX.value}";

  var valueAxis2 = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis2.tooltip.disabled = true;
  valueAxis2.renderer.baseGrid.disabled = true;
  valueAxis2.marginRight = 30;
  valueAxis2.renderer.gridContainer.background.fill = interfaceColors.getFor("alternativeBackground");
  valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;
  valueAxis2.renderer.grid.template.stroke = interfaceColors.getFor("background");
  valueAxis2.renderer.grid.template.strokeOpacity = 1;
  valueAxis2.renderer.labels.template.fill = am4core.color("#a9afbb");
  valueAxis2.title.text = "Boys' performance";

  var series2 = chart.series.push(new am4charts.ColumnSeries());
  series2.dataFields.categoryY = "category";
  series2.dataFields.valueX = "value2";
  series2.xAxis = valueAxis2;
  series2.name = "Series 2";
  var bullet2 = series2.bullets.push(new am4charts.CircleBullet());
  bullet2.fillOpacity = 0;
  bullet2.strokeOpacity = 0;
  bullet2.tooltipText = "{valueX.value}";

  var valueAxis3 = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis3.tooltip.disabled = true;
  valueAxis3.renderer.baseGrid.disabled = true;
  valueAxis3.renderer.gridContainer.background.fill = interfaceColors.getFor("alternativeBackground");
  valueAxis3.renderer.gridContainer.background.fillOpacity = 0.05;
  valueAxis3.renderer.grid.template.stroke = interfaceColors.getFor("background");
  valueAxis3.renderer.grid.template.strokeOpacity = 1;
  valueAxis3.renderer.labels.template.fill = am4core.color("#a9afbb");
  valueAxis3.title.text = "Girls' performance";

  var series3 = chart.series.push(new am4charts.ColumnSeries());
  series3.dataFields.categoryY = "category";
  series3.dataFields.valueX = "value3";
  series3.xAxis = valueAxis3;
  series3.name = "Series 3";
  var bullet3 = series3.bullets.push(new am4charts.CircleBullet());
  bullet3.fillOpacity = 0;
  bullet3.strokeOpacity = 0;
  bullet3.tooltipText = "{valueX.value}";

  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = "zoomY";

  var scrollbarY = new am4core.Scrollbar();
  chart.scrollbarY = scrollbarY;

  var range2 = categoryAxis.axisRanges.create();
  // range2.date = new Date(2007, 0, 1);
  range2.category = "Saudi Arabia";
  range2.label.text = "";
  range2.axisFill.fill = chart.colors.getIndex(1);
  range2.axisFill.fillOpacity = 0.2;

  }); // end am4core.ready()
