 am4core.ready(function() {

 // Themes begin
 am4core.useTheme(am4themes_animated);
 // Themes end
 var chart = am4core.create('chart_1', am4charts.XYChart)
 chart.colors.step = 2;

 chart.legend = new am4charts.Legend()
 chart.legend.position = 'top'
 chart.legend.paddingBottom = 20
 chart.legend.labels.template.maxWidth = 95
 chart.legend.labels.template.fill = am4core.color("#a9afbb");


 var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
 xAxis.dataFields.category = 'category'
 xAxis.renderer.cellStartLocation = 0.1
 xAxis.renderer.cellEndLocation = 0.9
 xAxis.renderer.grid.template.location = 0;
 xAxis.renderer.labels.template.fill = am4core.color("#a9afbb");


 var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
 yAxis.min = 0;
 yAxis.renderer.labels.template.fill = am4core.color("#a9afbb");
 yAxis.title.text = "%";


 function createSeries(value, name) {
     var series = chart.series.push(new am4charts.ColumnSeries())
     series.dataFields.valueY = value
     series.dataFields.categoryX = 'category'
     series.name = name
     series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
     series.events.on("hidden", arrangeColumns);
     series.events.on("shown", arrangeColumns);

     var bullet = series.bullets.push(new am4charts.LabelBullet())
     bullet.interactionsEnabled = false
     bullet.dy = 30;
     // bullet.label.text = '{valueY}'
     bullet.label.fill = am4core.color('#ffffff')

     return series;
 }

 chart.data = [
     {
         category: 'below 1c',
         SA: 0.5,
         OECD: 0.1
       },
     {
         category: '1c',
         SA: 5.3,
         OECD: 1.4,
     },
     {
         category: '1b',
         SA: 17,
         OECD: 6.2,
     },
     {
         category: '1a',
         SA: 29.4,
         OECD: 15,
     },
     {
         category: '2',
         SA: 30.4,
         OECD: 23.7,
     },
     {
         category: '3',
         SA: 14.6,
         OECD: 26,
     },
     {
         category: '4',
         SA: 2.6,
         OECD: 18.9,
     },
     {
         category: '5',
         SA: 0.1,
         OECD: 7.4,
     },
     {
         category: '6',
         SA: 0,
         OECD: 1.3
     }
 ]


 createSeries('SA', "Saudi Arabia");
 createSeries('OECD', "OECD mean");


 function arrangeColumns() {

     var series = chart.series.getIndex(0);

     var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
     if (series.dataItems.length > 1) {
         var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
         var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
         var delta = ((x1 - x0) / chart.series.length) * w;
         if (am4core.isNumber(delta)) {
             var middle = chart.series.length / 2;

             var newIndex = 0;
             chart.series.each(function(series) {
                 if (!series.isHidden && !series.isHiding) {
                     series.dummyData = newIndex;
                     newIndex++;
                 }
                 else {
                     series.dummyData = chart.series.indexOf(series);
                 }
             })
             var visibleCount = newIndex;
             var newMiddle = visibleCount / 2;

             chart.series.each(function(series) {
                 var trueIndex = chart.series.indexOf(series);
                 var newIndex = series.dummyData;

                 var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                 series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                 series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
             })
         }
     }
 }

 });