am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  var data = [];
  var value1 = [29.34,
28.78,
26.12,
19.95,
9.01,
7.41,
7.38,
6.93,
6.33,
3.36,
3.1,
2.29,
1.54,
1.08,
0.95,
0.59,
0.27,
-0.74,
-1.15,
-1.56,
-1.74,
-2.46,
-2.78,
-3.25,
-3.5,
-4.04,
-5.08,
-9.39,
-9.82,
-12.06,
-12.32,
-13.28];
  var value2 = [414.32,
372.31,
420.4,
415.2,
372.3,
464.63,
393.52,
392.55,
434.37,
355.15,
516.46,
487.52,
402.85,
502.49,
492.51,
477.42,
510.9,
502.74,
516.32,
503.73,
469.81,
505.93,
530.56,
469.58,
445.31,
520.93,
494.18,
424.09,
409.05,
596.21,
419.61,
410.72,];
  var value3 = [443.66,
401.09,
446.52,
435.15,
381.31,
472.04,
400.9,
399.48,
440.7,
358.51,
519.56,
489.81,
404.39,
503.57,
493.46,
478.01,
511.17,
502.0,
515.17,
502.17,
468.07,
503.47,
527.78,
466.33,
441.81,
516.89,
489.1,
414.7,
399.23,
584.15,
407.29,
397.44];

  var names = ['Jordan',
'Saudi Arabia',
'United Arab Emirates',
'Thailand',
'Morocco',
'Turkey',
'Kazakhstan',
'Indonesia',
'Malaysia',
'Philippines',
'Canada',
'OECD Average',
'Brazil',
'Germany',
'France',
'Russia',
'Poland',
'United States',
'Chinese Taipei',
'Australia',
'Ukraine',
'United Kingdom',
'Japan',
'Italy',
'Chile',
'Korea',
'Portugal',
'Mexico',
'Argentina',
'B-S-J-Z (China)',
'Colombia',
'Peru'];


  for (var i = 0; i < names.length; i++) {
    data.push({ category: names[i], value1: value1[i], value2:value2[i], value3:value3[i] });
  }

  var interfaceColors = new am4core.InterfaceColorSet();

  var chart = am4core.create("chart_22", am4charts.XYChart);

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
