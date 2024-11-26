am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chart_33", am4charts.XYChart);

// Add data
chart.data = [{
  "country":"United Arab Emirates", "escs":"0.28", "science":"433.64"},
  {
  "country":"Argentina", "escs":"-0.95", "science":"404.07"},
  {
  "country":"Australia", "escs":"0.32", "science":"502.96"},
  {
  "country":"Brazil", "escs":"-1.1", "science":"403.62"},
  {
  "country":"Canada", "escs":"0.42", "science":"518.0"},
  {
  "country":"Chile", "escs":"-0.58", "science":"443.58"},
  {
  "country":"Colombia", "escs":"-1.19", "science":"413.32"},
  {
  "country":"Germany", "escs":"-0.1", "science":"502.99"},
  {
  "country":"France", "escs":"-0.03", "science":"492.98"},
  {
  "country":"United Kingdom", "escs":"0.27", "science":"504.67"},
  {
  "country":"Indonesia", "escs":"-1.57", "science":"396.07"},
  {
  "country":"Italy", "escs":"-0.22", "science":"468.01"},
  {
  "country":"Jordan", "escs":"-0.66", "science":"429.25"},
  {
  "country":"Japan", "escs":"-0.09", "science":"529.14"},
  {
  "country":"Kazakhstan", "escs":"-0.44", "science":"397.1"},
  {
  "country":"South Korea", "escs":"0.07", "science":"519.01"},
  {
  "country":"Morocco", "escs":"-1.89", "science":"376.6"},
  {
  "country":"Mexico", "escs":"-1.19", "science":"419.2"},
  {
  "country":"Malaysia", "escs":"-0.77", "science":"437.62"},
  {
  "country":"Peru", "escs":"-1.12", "science":"404.22"},
  {
  "country":"Philippines", "escs":"-1.42", "science":"356.93"},
  {
  "country":"Republic of Poland", "escs":"-0.14", "science":"511.04"},
  {
  "country":"Portugal", "escs":"-0.39", "science":"491.68"},
  {
  "country":"China", "escs":"-0.67", "science":"590.45"},
  {
  "country":"Russia", "escs":"0.13", "science":"477.72"},
  {
  "country":"Saudi Arabia", "escs":"-0.7", "science":"386.25"},
  {
  "country":"Taiwan", "escs":"-0.32", "science":"515.75"},
  {
  "country":"Thailand", "escs":"-1.3", "science":"425.81"},
  {
  "country":"Turkey", "escs":"-1.15", "science":"468.3"},
  {
  "country":"Ukraine", "escs":"-0.2", "science":"468.99"},
  {
  "country":"United States", "escs":"0.11", "science":"502.38"}
];

// Create axes
var xAxis = chart.xAxes.push(new am4charts.ValueAxis());
xAxis.title.text = "ESCS Index";
// Create value axis
var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
yAxis.title.text = "Science score";
// Create series
var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.valueY = "science";
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
