am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chart_31", am4charts.XYChart);

// Add data
chart.data = [{
  "country":"United Arab Emirates", "escs":"0.28", "read":"431.78"},
  {
  "country":"Argentina", "escs":"-0.95", "read":"401.5"},
  {
  "country":"Australia", "escs":"0.32", "read":"502.63"},
  {
  "country":"Brazil", "escs":"-1.1", "read":"412.87"},
  {
  "country":"Canada", "escs":"0.42", "read":"520.09"},
  {
  "country":"Chile", "escs":"-0.58", "read":"452.27"},
  {
  "country":"Colombia", "escs":"-1.19", "read":"412.3"},
  {
  "country":"Germany", "escs":"-0.1", "read":"498.28"},
  {
  "country":"France", "escs":"-0.03", "read":"492.61"},
  {
  "country":"Ukraine", "escs":"0.27", "read":"503.93"},
  {
  "country":"Indonesia", "escs":"-1.57", "read":"370.97"},
  {
  "country":"Italy", "escs":"-0.22", "read":"476.28"},
  {
  "country":"Jordan", "escs":"-0.66", "read":"419.06"},
  {
  "country":"Japan", "escs":"-0.09", "read":"503.86"},
  {
  "country":"Kazakhstan", "escs":"-0.44", "read":"386.91"},
  {
  "country":"South Korea", "escs":"0.07", "read":"514.05"},
  {
  "country":"Morocco", "escs":"-1.89", "read":"359.39"},
  {
  "country":"Mexico", "escs":"-1.19", "read":"420.47"},
  {
  "country":"Malaysia", "escs":"-0.77", "read":"414.98"},
  {
  "country":"Peru", "escs":"-1.12", "read":"400.51"},
  {
  "country":"Philippines", "escs":"-1.42", "read":"339.69"},
  {
  "country":"Republic of Poland", "escs":"-0.14", "read":"511.86"},
  {
  "country":"Portugal", "escs":"-0.39", "read":"491.8"},
  {
  "country":"China", "escs":"-0.67", "read":"555.24"},
  {
  "country":"Russia", "escs":"0.13", "read":"478.5"},
  {
  "country":"Saudi Arabia", "escs":"-0.7", "read":"399.15"},
  {
  "country":"Taiwan", "escs":"-0.32", "read":"502.6"},
  {
  "country":"Thailand", "escs":"-1.3", "read":"392.89"},
  {
  "country":"Turkey", "escs":"-1.15", "read":"465.63"},
  {
  "country":"Ukraine", "escs":"-0.2", "read":"465.95"},
  {
  "country":"United-States", "escs":"0.11", "read":"505.35"},

];

// Create axes
var xAxis = chart.xAxes.push(new am4charts.ValueAxis());
xAxis.title.text = "ESCS Index";
// Create value axis
var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
yAxis.title.text = "Reading score";
// Create series
var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.valueY = "read";
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
