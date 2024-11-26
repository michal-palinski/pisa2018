am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var data = {
  "lower": {"Kosovo":1, "Panama":1, "Philippines":1, "Dominican Republic":1},
  "similar": {"Argentina":1, "Indonesia":1, "Morocco":1},
  // "higher50": {"Kazakhstan":1, "Moldova":1, "Baku (Azerbaijan)":1, "Thailand":1, "Uruguay":1, "Chile":1, "Qatar":1, "Mexico":1, "Bosnia and Herzegovina":1, "Costa Rica":1, "Peru":1, "Jordan":1, "Georgia":1	, "North Macedonia":1, "Lebanon":1, "Colombia":1, "Brazil":1},
  "higher": {"Portugal":1, "Australia":1, "Russia":1, "Italy":1, "Slovak Republic":1, "Luxembourg":1, "Spain":1, "Lithuania":1, "Hungary":1, "United States":1, "Belarus":1, "Malta":1, "Croatia":1, "Israel":1, "Turkey":1, "Ukraine":1, "Greece":1, "Cyprus":1, "Serbia":1, "Malaysia":1, "Albania":1, "Bulgaria":1, "United Arab Emirates":1, "Brunei Darussalam":1, "Romania":1, "Montenegro":1,
"Kazakhstan":1, "Moldova":1, "Baku (Azerbaijan)":1, "Thailand":1, "Uruguay":1, "Chile":1, "Qatar":1, "Mexico":1, "Bosnia and Herzegovina":1, "Costa Rica":1, "Peru":1, "Jordan":1, "Georgia":1	, "North Macedonia":1, "Lebanon":1, "Colombia":1, "Brazil":1,
"B-S-J-Z (China)":1,
" Singapore":1,
" Macao":1,
" Hong Kong":1,
" Chinese Taipei":1,
" Japan":1,
" Korea":1,
" Estonia":1,
" Netherlands":1,
" Poland":1,
" Switzerland":1,
" Canada":1,
" Denmark":1,
" Slovenia":1,
" Belgium":1,
" Finland":1,
" Sweden":1,
" United Kingdom":1,
" Norway":1,
" Germany":1,
" Ireland":1,
" Czech Republic":1,
" Austria":1,
" Latvia":1,
" Viet Nam":1,
" France":1,
" Iceland":1,
" New Zealand":1
},
}

function processData(data) {
  var treeData = [];

  var smallBrands = { name: "Other", children: [] };

  for (var brand in data) {
    var brandData = { name: brand, children: [] }
    var brandTotal = 0;
    for (var model in data[brand]) {
      brandTotal += data[brand][model];
    }

    for (var model in data[brand]) {
      // do not add very small
      if (data[brand][model] > 0) {
        brandData.children.push({ name: model, count: data[brand][model] });
      }
    }

    // add to small brands if total number less than
    if (brandTotal > 1) {
      treeData.push(brandData);
    }
    // else {
    //   smallBrands.children.push(brandData)
    // }

  }
  // treeData.push(smallBrands);
  return treeData;
}

// create chart
var chart = am4core.create("chart_5", am4charts.TreeMap);
chart.hiddenState.properties.opacity = 1; // this makes initial fade in effect

// only one level visible initially
chart.maxLevels = 1;
// define data fields
chart.dataFields.value = "count";
chart.dataFields.name = "name";
chart.dataFields.children = "children";
chart.homeText = "Countries with higher, lower, and similar results to Saudi Arabia";

// enable navigation
chart.navigationBar = new am4charts.NavigationBar();

// level 0 series template
var level0SeriesTemplate = chart.seriesTemplates.create("0");
level0SeriesTemplate.strokeWidth = 2;

// by default only current level series bullets are visible, but as we need brand bullets to be visible all the time, we modify it's hidden state
level0SeriesTemplate.bulletsContainer.hiddenState.properties.opacity = 1;
level0SeriesTemplate.bulletsContainer.hiddenState.properties.visible = true;
// create hover state
var columnTemplate = level0SeriesTemplate.columns.template;
var hoverState = columnTemplate.states.create("hover");

// darken
hoverState.adapter.add("fill", function (fill, target) {
  if (fill instanceof am4core.Color) {
    return am4core.color(am4core.colors.brighten(fill.rgb, -0.2));
  }
  return fill;
})

// add logo
var image = columnTemplate.createChild(am4core.Image);
image.opacity = 0.55;
image.align = "center";
image.valign = "middle";
image.width = am4core.percent(80);
image.height = am4core.percent(80);

// add adapter for href to load correct image
image.adapter.add("href", function (href, target) {
  var dataItem = target.parent.dataItem;
  if (dataItem) {
    // return "https://www.amcharts.com/lib/images/logos/" + dataItem.treeMapDataItem.name.toLowerCase() + ".png";
    return "/assets/img/exhibit3-1/" + dataItem.treeMapDataItem.name.toLowerCase() + ".png";
  }
});

// level1 series template
var level1SeriesTemplate = chart.seriesTemplates.create("1");
level1SeriesTemplate.columns.template.fillOpacity = 0;

var bullet1 = level1SeriesTemplate.bullets.push(new am4charts.LabelBullet());
bullet1.locationX = 0.5;
bullet1.locationY = 0.5;
bullet1.label.text = "{name}";
bullet1.label.fill = am4core.color("#ffffff");

// level2 series template
var level2SeriesTemplate = chart.seriesTemplates.create("2");
level2SeriesTemplate.columns.template.fillOpacity = 0;

var bullet2 = level2SeriesTemplate.bullets.push(new am4charts.LabelBullet());
bullet2.locationX = 0.5;
bullet2.locationY = 0.5;
bullet2.label.text = "{name}";
bullet2.label.fill = am4core.color("#ffffff");

chart.data = processData(data);

}); // end am4core.ready()
