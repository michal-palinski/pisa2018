am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var data = [];
    var value1 = [16,
13,
12,
10,
9,
7,
6,
-1,
-1,
-1,
-4,
-4,
-5,
-5,
-5,
-5,
-6,
-6,
-7,
-7,
-7,
-9,
-9,
-9,
-10,
-11,
-12,
-12,
-15,
-16,
-16,
-20];
    var value2 = [410.06,
366.92,
346.39,
373.73,
430.45,
436.76,
396.63,
516.35,
423.77,
368.14,
532.91,
527.86,
514.45,
491.87,
455.96,
490.15,
498.54,
494.32,
503.31,
456.43,
421.09,
482.46,
496.93,
387.87,
532.16,
596.55,
414.92,
508.03,
387.28,
494.09,
407.84,
400.89];
    var value3 = [426.03,
379.97,
358.04,
383.45,
439.32,
443.48,
402.78,
514.95,
422.48,
367.28,
529.36,
523.81,
509.55,
486.67,
451.02,
485.46,
492.18,
488.3,
496.25,
449.44,
413.63,
473.85,
487.91,
379.27,
522.03,
585.75,
403.17,
495.86,
371.85,
478.55,
391.51,
381.37];

    var names = ['Thailand',
 'Saudi Arabia',
 'Philippines',
 'Indonesia',
 'United Arab Emirates',
 'Malaysia',
 'Jordan',
 'Poland',
 'Kazakhstan',
 'Morocco',
 'Chinese Taipei',
 'Korea',
 'Canada',
 'OECD Average',
 'Turkey',
 'Russia',
 'France',
 'Australia',
 'Germany',
 'Ukraine',
 'Chile',
 'United States',
 'Portugal',
 'Brazil',
 'Japan',
 'B-S-J-Z (China)',
 'Mexico',
 'United Kingdom',
 'Argentina',
 'Italy',
 'Peru',
 'Colombia'];


    for (var i = 0; i < names.length; i++) {
      data.push({ category: names[i], value1: value1[i], value2:value2[i], value3:value3[i] });
    }

    var interfaceColors = new am4core.InterfaceColorSet();

    var chart = am4core.create("chart_19", am4charts.XYChart);

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
