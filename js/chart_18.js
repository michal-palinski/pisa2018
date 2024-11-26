am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  var iconPath = "m48 18v24c0 1.96-.7 3.75-1.87 5.14l-3.96-1.62-2.92-1.19-.76-.31c-1.51-.62-2.49-2.08-2.49-3.71v-1.24c1.84-1.19 3.42-2.71 4.69-4.46 2.1-2.92 3.31-6.49 3.31-10.26v-4.35c-2.64 0-5.26-.28-7.82-.82-2.57-.55-5.08-1.36-7.49-2.43l-1.69-.75-.89.26c-3.62 1.03-6.11 4.33-6.11 8.09 0 3.77 1.21 7.34 3.31 10.26 1.27 1.75 2.85 3.27 4.69 4.46v1.24c0 1.63-.98 3.09-2.49 3.71l-.76.31-2.92 1.19-3.96 1.62c-1.17-1.39-1.87-3.18-1.87-5.14v-24c0-8.84 7.16-16 16-16 4.42 0 8.42 1.79 11.32 4.68 2.89 2.9 4.68 6.9 4.68 11.32z"

  // "M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z"

  var chart = am4core.create("chart_18", am4charts.SlicedChart);
  chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
  chart.data = [{
      "name": "below 1c",
      "value": 0.1
  }, {
      "name": "1c",
      "value": 1.6
  }, {
      "name": "1b",
      "value": 9.5
  }, {
      "name": "1a",
      "value": 27.2
  }, {
      "name": "2",
      "value": 37.6
  }, {
      "name": "3",
      "value": 20.2
  }, {
      "name": "4",
      "value": 3.7
  },
  {
      "name": "5",
      "value": 0.2
  },
  {
      "name": "6",
      "value": 0
  }];

  var series = chart.series.push(new am4charts.PictorialStackedSeries());
  series.dataFields.value = "value";
  series.dataFields.category = "name";
  series.alignLabels = true;

  series.maskSprite.path = iconPath;
  series.ticks.template.locationX = 1;
  series.ticks.template.locationY = 0.5;

  series.labelsContainer.width = 200;

  chart.legend = new am4charts.Legend();
  chart.legend.position = "left";
  chart.legend.valign = "bottom";

  }); // end am4core.ready()
