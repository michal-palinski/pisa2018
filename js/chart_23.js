am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  var iconPath = "M145.1,229.6c17.2,56.4,61.4,115,121,115s103.9-58.6,121-115c14.7-5.1,27-19.8,31.801-38.8c6.6-26.1-3.101-50.3-21.9-57.6 c1.7-6.9,2.6-14,2.6-21.3C399.599,50,337.9,0,261.799,0c-76.1,0-138,50.1-138,111.9c0,8.8,1.4,17.4,3.7,25.6 c-13.6,10.3-19.8,31.1-14.2,53.4C118.1,209.8,130.399,224.5,145.1,229.6z M135.899,157.7c2-3.3,4.6-5.5,7.9-6.4 c0.6-0.1,1.4-0.2,2.1-0.2c0.6,0,1.1,0,1.7,0.1l9.5,0.9l1.4-9.4c2.9-19.6,9-37.2,17.6-52.2c16.1,18.1,48.1,30.4,85,30.4 c41.7,0,77.2-15.7,90.3-37.7c11,16.5,18.8,36.6,22.199,59.5l1.4,9.4l9.5-0.9c1.4-0.1,2.7-0.1,3.8,0.1c0.7,0.1,1.101,0.6,1.8,0.8 c8.601,3.8,13,18.9,9.301,33.9c-3.801,15.3-13.801,24.3-21.7,25.3l-6.601,0.9l-1.8,6.4c-14.399,52.6-54.399,106-103.4,106 c-49,0-89-53.3-103.2-106l-1.8-6.4l-6.6-0.9c-7.9-1-17.9-10.2-21.7-25.3C130.1,175.2,131.6,164.3,135.899,157.7z"

  // "M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z"

  var chart = am4core.create("chart_23", am4charts.SlicedChart);
  chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

  chart.data = [{
      "name": "below 1b",
      "value": 7.2
  }, {
      "name": "1b",
      "value": 26.8
  }, {
      "name": "1a",
      "value": 35.1
  }, {
      "name": "2",
      "value": 21.8
  }, {
      "name": "3",
      "value": 7.7
  }, {
      "name": "4",
      "value": 1.3
  }, {
      "name": "5",
      "value": 0.1
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
