am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end



  var chart = am4core.create("chart_13", am4charts.XYChart);

  var data = [];
  var low_achieving =[255.34,
 272.13,
 272.7,
 273.41,
 276.51,
 281.44,
 290.08,
 291.49,
 293.47,
 299.19,
 309.85,
 310.71,
 311.08,
 313.8,
 331.03,
 331.03,
 335.32,
 342.56,
 356.9,
 361.73,
 363.3,
 370.12,
 371.48,
 372.86,
 376.36,
 391.79,
 393.27,
 396.95,
 398.2,
 412.56,
 486.12];

var high_achieving = [455.94,
 489.01,
 475.05,
 469.49,
 500.65,
 479.83,
 498.81,
 508.18,
 510.94,
 574.38,
 535.49,
 528.27,
 509.6,
 534.89,
 573.03,
 573.03,
 549.51,
 570.63,
 597.89,
 614.0,
 604.8,
 611.14,
 609.25,
 620.71,
 596.94,
 629.15,
 651.39,
 656.14,
 630.75,
 636.51,
 690.73];

  var names = ['Philippines',
 'Argentina',
 'Saudi Arabia',
 'Morocco',
 'Brazil',
 'Indonesia',
 'Colombia',
 'Jordan',
 'Peru',
 'United Arab Emirates',
 'Thailand',
 'Chile',
 'Mexico',
 'Kazakhstan',
 'Ukraine',
 'UK',
 'Malaysia',
 'Turkey',
 'United States',
 'Portugal',
 'Italy',
 'France',
 'Australia',
 'Germany',
 'Russia',
 'Canada',
 'Korea',
 'Taipei',
 'Poland',
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
