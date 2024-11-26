am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chart_32", am4charts.XYChart);

// Add data
chart.data = [{

  "country":"United Arab Emirates", "escs":"0.28", "math":"434.95"},
  {
  "country":"Argentina", "escs":"-0.95", "math":"379.45"},
  {
  "country":"Australia", "escs":"0.32", "math":"491.36"},
  {
  "country":"Brazil", "escs":"-1.1", "math":"383.57"},
  {
  "country":"Canada", "escs":"0.42", "math":"512.02"},
  {
  "country":"Chile", "escs":"-0.58", "math":"417.41"},
  {
  "country":"Colombia", "escs":"-1.19", "math":"390.93"},
  {
  "country":"Germany", "escs":"-0.1", "math":"500.04"},
  {
  "country":"France", "escs":"-0.03", "math":"495.41"},
  {
  "country":"United Kingdom", "escs":"0.27", "math":"501.77"},
  {
  "country":"Indonesia", "escs":"-1.57", "math":"378.67"},
  {
  "country":"Italy", "escs":"-0.22", "math":"486.59"},
  {
  "country":"Jordan", "escs":"-0.66", "math":"399.76"},
  {
  "country":"Japan", "escs":"-0.09", "math":"526.97"},
  {
  "country":"Kazakhstan", "escs":"-0.44", "math":"423.15"},
  {
  "country":"South Korea", "escs":"0.07", "math":"525.93"},
  {
  "country":"Morocco", "escs":"-1.89", "math":"367.73"},
  {
  "country":"Mexico", "escs":"-1.19", "math":"408.8"},
  {
  "country":"Malaysia", "escs":"-0.77", "math":"440.21"},
  {
  "country":"Peru", "escs":"-1.12", "math":"399.84"},
  {
  "country":"Philippines", "escs":"-1.42", "math":"352.57"},
  {
  "country":"Republic of Poland", "escs":"-0.14", "math":"515.65"},
  {
  "country":"Portugal", "escs":"-0.39", "math":"492.49"},
  {
  "country":"China", "escs":"-0.67", "math":"591.39"},
  {
  "country":"Russia", "escs":"0.13", "math":"487.79"},
  {
  "country":"Saudi Arabia", "escs":"-0.7", "math":"373.24"},
  {
  "country":"Chinese Taipei", "escs":"-0.32", "math":"531.14"},
  {
  "country":"Thailand", "escs":"-1.3", "math":"418.56"},
  {
  "country":"Turkey", "escs":"-1.15", "math":"453.51"},
  {
  "country":"Ukraine", "escs":"-0.2", "math":"453.12"},
  {
  "country":"United States", "escs":"0.11", "math":"478.24"}

];

// Create axes
var xAxis = chart.xAxes.push(new am4charts.ValueAxis());
xAxis.title.text = "ESCS Index";
// Create value axis
var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
yAxis.title.text = "Math score";
// Create series
var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.valueY = "math";
lineSeries.dataFields.valueX = "escs";
lineSeries.strokeWidth = 0;
lineSeries.dataFields.category = "country";
lineSeries.tooltipText = "{country}"
lineSeries.tooltip.pointerOrientation = "vertical";


chart.cursor = new am4charts.XYCursor();
chart.cursor.snapToSeries = lineSeries;
chart.cursor.xAxis = xAxis;
chart.scrollbarX = new am4core.Scrollbar();

var bullet = lineSeries.bullets.push(new am4charts.Bullet());
var image = bullet.createChild(am4core.Image);
image.horizontalCenter = "middle";
image.width = 40;
image.height = 40;
image.verticalCenter = "middle";
image.adapter.add("href", (href, target)=>{
  let category = target.dataItem.category;
  if(category){
    return "https://www.amcharts.com/wp-content/uploads/flags/" + category.split(" ").join("-").toLowerCase() + ".svg";
  }
  return href;
})
lineSeries.dataItems.template.bullet = image;

}); // end am4core.ready()
