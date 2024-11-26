am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var mainContainer = am4core.create("chart_28", am4core.Container);
mainContainer.width = am4core.percent(100);
mainContainer.height = am4core.percent(100);
mainContainer.layout = "horizontal";

var usData = [
  {
    "age": "p5",
    "male": 229.6,
    "female":  301.21
  },
  {
    "age": "p10",
    "male": 262.87,
    "female": 330.13
  },
  {
    "age": "p25",
    "male": 312.41,
    "female": 377.32
  },
  {
    "age": "p50",
    "male": 372.38,
    "female": 430.27
  },
  {
    "age": "p75",
    "male": 431.84,
    "female": 478.25
  },
  {
    "age": "p90",
    "male": 484.04,
    "female": 521.5
  },
  {
    "age": "p95",
    "male": 514.16,
    "female": 544.97
  }

];

var maleChart = mainContainer.createChild(am4charts.XYChart);
maleChart.paddingRight = 0;
maleChart.data = JSON.parse(JSON.stringify(usData));

// Create axes
var maleCategoryAxis = maleChart.yAxes.push(new am4charts.CategoryAxis());
maleCategoryAxis.dataFields.category = "age";
maleCategoryAxis.renderer.grid.template.location = 0;
//maleCategoryAxis.renderer.inversed = true;
maleCategoryAxis.renderer.minGridDistance = 15;

var maleValueAxis = maleChart.xAxes.push(new am4charts.ValueAxis());
maleValueAxis.renderer.inversed = true;
maleValueAxis.min = 0;
maleValueAxis.max = 600;
maleValueAxis.strictMinMax = true;

maleValueAxis.numberFormatter = new am4core.NumberFormatter();
maleValueAxis.numberFormatter.numberFormat = "#.#";

// Create series
var maleSeries = maleChart.series.push(new am4charts.ColumnSeries());
maleSeries.dataFields.valueX = "male";
// maleSeries.dataFields.valueXShow = "percent";
// maleSeries.calculatePercent = true;
maleSeries.dataFields.categoryY = "age";
maleSeries.interpolationDuration = 1000;
maleSeries.columns.template.tooltipText = "Males, {categoryY}: {valueX}";
//maleSeries.sequencedInterpolation = true;


var femaleChart = mainContainer.createChild(am4charts.XYChart);
femaleChart.paddingLeft = 0;
femaleChart.data = JSON.parse(JSON.stringify(usData));

// Create axes
var femaleCategoryAxis = femaleChart.yAxes.push(new am4charts.CategoryAxis());
femaleCategoryAxis.renderer.opposite = true;
femaleCategoryAxis.dataFields.category = "age";
femaleCategoryAxis.renderer.grid.template.location = 0;
femaleCategoryAxis.renderer.minGridDistance = 15;

var femaleValueAxis = femaleChart.xAxes.push(new am4charts.ValueAxis());
femaleValueAxis.min = 0;
femaleValueAxis.max = 600;
femaleValueAxis.strictMinMax = true;
femaleValueAxis.numberFormatter = new am4core.NumberFormatter();
femaleValueAxis.numberFormatter.numberFormat = "#.#";
femaleValueAxis.renderer.minLabelPosition = 0.01;

// Create series
var femaleSeries = femaleChart.series.push(new am4charts.ColumnSeries());
femaleSeries.dataFields.valueX = "female";
// femaleSeries.dataFields.valueXShow = "percent";
// femaleSeries.calculatePercent = true;
femaleSeries.fill = femaleChart.colors.getIndex(4);
femaleSeries.stroke = femaleSeries.fill;
//femaleSeries.sequencedInterpolation = true;
femaleSeries.columns.template.tooltipText = "Females, {categoryY}: {valueX}";
femaleSeries.dataFields.categoryY = "age";
femaleSeries.interpolationDuration = 1000;


var mapChart = mainContainer.createChild(am4maps.MapChart);
mapChart.projection = new am4maps.projections.Mercator();
mapChart.geodata = am4geodata_saudiArabiaHigh;
mapChart.zoomControl = new am4maps.ZoomControl();
mapChart.zIndex = -1;

var polygonSeries = mapChart.series.push(new am4maps.MapPolygonSeries())
polygonSeries.useGeodata = true;

var selectedStateId = "SA";
var selectedPolygon;
var selectedStateName;

var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.togglable = true;

var hoverState = polygonTemplate.states.create("hover");
hoverState.properties.fill = mapChart.colors.getIndex(2);

var activeState = polygonTemplate.states.create("active");
activeState.properties.fill = mapChart.colors.getIndex(6);

polygonTemplate.events.on("hit", function(event) {
  var id = event.target.dataItem.dataContext.id;
  var stateId = id.split("-")[1];
  showState(stateId, event.target.dataItem.dataContext.name, event.target);
})


mapChart.seriesContainer.background.events.on("over", function(event) {
  showState(selectedStateId, selectedStateName, selectedPolygon);
});


function showState(id, stateName, polygon) {
  if(selectedStateId != id){

    var newData = stateData[id];

    if (selectedPolygon) {
      selectedPolygon.isActive = false;
    }

    for (var i = 0; i < femaleChart.data.length; i++) {
      femaleChart.data[i].female = newData[i].female;
      maleChart.data[i].male = newData[i].male;
    }

    femaleChart.invalidateRawData();
    maleChart.invalidateRawData();

    selectedStateName = stateName;
    selectedStateId = id;
    selectedPolygon = polygon;

    label.text = "Reading performance in: " + stateName;
    label.hide(0);
    label.show();
   }
}

var label = mainContainer.createChild(am4core.Label);
label.isMeasured = false;
label.x = am4core.percent(80);
label.horizontalCenter = "middle";
label.y = 50;
label.showOnInit = true;
label.text = "Saudi Arabia (regions)";
label.hiddenState.properties.dy = -100;

var stateData = {
  "01": [
    {
      "age": "p5",
      "male": 229.6,
      "female": 301.21
    },
    {
      "age": "p10",
      "male": 262.87,
      "female": 330.13
    },
    {
      "age": "p25",
      "male": 312.41,
      "female": 377.32
    },
    {
      "age": "p50",
      "male": 372.38,
      "female": 430.27
    },
    {
      "age": "p75",
      "male": 431.84,
      "female": 478.25
    },
    {
      "age": "p90",
      "male": 484.04,
      "female": 521.5
    },
    {
      "age": "p95",
      "male": 514.16,
      "female": 544.97
    }
  ],
  "02": [
    {
      "age": "p5",
      "male": 229.6,
      "female":  301.21
    },
    {
      "age": "p10",
      "male": 262.87,
      "female": 330.13
    },
    {
      "age": "p25",
      "male": 312.41,
      "female": 377.32
    },
    {
      "age": "p50",
      "male": 372.38,
      "female": 430.27
    },
    {
      "age": "p75",
      "male": 431.84,
      "female": 478.25
    },
    {
      "age": "p90",
      "male": 484.04,
      "female": 521.5
    },
    {
      "age": "p95",
      "male": 514.16,
      "female": 544.97
    }
  ],
  "03": [
    {
      "age": "p5",
      "male": 229.6,
      "female":  301.21
    },
    {
      "age": "p10",
      "male": 262.87,
      "female": 330.13
    },
    {
      "age": "p25",
      "male": 312.41,
      "female": 377.32
    },
    {
      "age": "p50",
      "male": 372.38,
      "female": 430.27
    },
    {
      "age": "p75",
      "male": 431.84,
      "female": 478.25
    },
    {
      "age": "p90",
      "male": 484.04,
      "female": 521.5
    },
    {
      "age": "p95",
      "male": 514.16,
      "female": 544.97
    }
  ],
  "04": [
    {
      "age": "p5",
      "male": 240.49,
      "female": 326.35
    },
    {
      "age": "p10",
      "male": 267.78,
      "female": 353.32
    },
    {
      "age": "p25",
      "male": 315.72,
      "female": 400.51
    },
    {
      "age": "p50",
      "male": 370.58,
      "female": 451.75
    },
    {
      "age": "p75",
      "male": 429.44,
      "female": 497.88
    },
    {
      "age": "p90",
      "male": 484.44,
      "female": 538.05
    },
    {
      "age": "p95",
      "male": 513.98,
      "female": 559.7
    }
  ],
  "05": [
    {
      "age": "p5",
      "male": 229.6,
      "female":  301.21
    },
    {
      "age": "p10",
      "male": 262.87,
      "female": 330.13
    },
    {
      "age": "p25",
      "male": 312.41,
      "female": 377.32
    },
    {
      "age": "p50",
      "male": 372.38,
      "female": 430.27
    },
    {
      "age": "p75",
      "male": 431.84,
      "female": 478.25
    },
    {
      "age": "p90",
      "male": 484.04,
      "female": 521.5
    },
    {
      "age": "p95",
      "male": 514.16,
      "female": 544.97
    }
  ],
  "06": [
    {
      "age": "p5",
      "male": 229.6,
      "female":  301.21
    },
    {
      "age": "p10",
      "male": 262.87,
      "female": 330.13
    },
    {
      "age": "p25",
      "male": 312.41,
      "female": 377.32
    },
    {
      "age": "p50",
      "male": 372.38,
      "female": 430.27
    },
    {
      "age": "p75",
      "male": 431.84,
      "female": 478.25
    },
    {
      "age": "p90",
      "male": 484.04,
      "female": 521.5
    },
    {
      "age": "p95",
      "male": 514.16,
      "female": 544.97
    }
  ],
  "07": [
    {
      "age": "p5",
      "male": 235.58,
      "female": 296.4
    },
    {
      "age": "p10",
      "male": 263.82,
      "female": 324.35
    },
    {
      "age": "p25",
      "male": 314.2,
      "female": 375.24
    },
    {
      "age": "p50",
      "male": 376.99,
      "female": 429.58
    },
    {
      "age": "p75",
      "male": 437.22,
      "female": 479.81
    },
    {
      "age": "p90",
      "male": 488.5,
      "female": 525.23
    },
    {
      "age": "p95",
      "male": 520.06,
      "female": 549.74
    }
  ],
  "08": [
    {
      "age": "p5",
      "male": 229.6,
      "female":  301.21
    },
    {
      "age": "p10",
      "male": 262.87,
      "female": 330.13
    },
    {
      "age": "p25",
      "male": 312.41,
      "female": 377.32
    },
    {
      "age": "p50",
      "male": 372.38,
      "female": 430.27
    },
    {
      "age": "p75",
      "male": 431.84,
      "female": 478.25
    },
    {
      "age": "p90",
      "male": 484.04,
      "female": 521.5
    },
    {
      "age": "p95",
      "male": 514.16,
      "female": 544.97
    }
  ],
  "09": [
    {
      "age": "p5",
      "male": 229.6,
      "female":  301.21
    },
    {
      "age": "p10",
      "male": 262.87,
      "female": 330.13
    },
    {
      "age": "p25",
      "male": 312.41,
      "female": 377.32
    },
    {
      "age": "p50",
      "male": 372.38,
      "female": 430.27
    },
    {
      "age": "p75",
      "male": 431.84,
      "female": 478.25
    },
    {
      "age": "p90",
      "male": 484.04,
      "female": 521.5
    },
    {
      "age": "p95",
      "male": 514.16,
      "female": 544.97
    }
  ],
  "10": [
    {
      "age": "p5",
      "male": 229.6,
      "female":  301.21
    },
    {
      "age": "p10",
      "male": 262.87,
      "female": 330.13
    },
    {
      "age": "p25",
      "male": 312.41,
      "female": 377.32
    },
    {
      "age": "p50",
      "male": 372.38,
      "female": 430.27
    },
    {
      "age": "p75",
      "male": 431.84,
      "female": 478.25
    },
    {
      "age": "p90",
      "male": 484.04,
      "female": 521.5
    },
    {
      "age": "p95",
      "male": 514.16,
      "female": 544.97
    }
  ],
  "11": [
    {
      "age": "p5",
      "male": 229.6,
      "female":  301.21
    },
    {
      "age": "p10",
      "male": 262.87,
      "female": 330.13
    },
    {
      "age": "p25",
      "male": 312.41,
      "female": 377.32
    },
    {
      "age": "p50",
      "male": 372.38,
      "female": 430.27
    },
    {
      "age": "p75",
      "male": 431.84,
      "female": 478.25
    },
    {
      "age": "p90",
      "male": 484.04,
      "female": 521.5
    },
    {
      "age": "p95",
      "male": 514.16,
      "female": 544.97
    }
  ],
  "12": [
    {
      "age": "p5",
      "male": 229.6,
      "female":  301.21
    },
    {
      "age": "p10",
      "male": 262.87,
      "female": 330.13
    },
    {
      "age": "p25",
      "male": 312.41,
      "female": 377.32
    },
    {
      "age": "p50",
      "male": 372.38,
      "female": 430.27
    },
    {
      "age": "p75",
      "male": 431.84,
      "female": 478.25
    },
    {
      "age": "p90",
      "male": 484.04,
      "female": 521.5
    },
    {
      "age": "p95",
      "male": 514.16,
      "female": 544.97
    }
  ],
  "13": [
    {
      "age": "p5",
      "male": 229.6,
      "female":  301.21
    },
    {
      "age": "p10",
      "male": 262.87,
      "female": 330.13
    },
    {
      "age": "p25",
      "male": 312.41,
      "female": 377.32
    },
    {
      "age": "p50",
      "male": 372.38,
      "female": 430.27
    },
    {
      "age": "p75",
      "male": 431.84,
      "female": 478.25
    },
    {
      "age": "p90",
      "male": 484.04,
      "female": 521.5
    },
    {
      "age": "p95",
      "male": 514.16,
      "female": 544.97
    }
  ],
  "14": [
    {
      "age": "p5",
      "male": 229.6,
      "female":  301.21
    },
    {
      "age": "p10",
      "male": 262.87,
      "female": 330.13
    },
    {
      "age": "p25",
      "male": 312.41,
      "female": 377.32
    },
    {
      "age": "p50",
      "male": 372.38,
      "female": 430.27
    },
    {
      "age": "p75",
      "male": 431.84,
      "female": 478.25
    },
    {
      "age": "p90",
      "male": 484.04,
      "female": 521.5
    },
    {
      "age": "p95",
      "male": 514.16,
      "female": 544.97
    }
  ],
}

}); // end am4core.ready()
