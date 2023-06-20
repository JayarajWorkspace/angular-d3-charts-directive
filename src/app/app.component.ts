import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular D3';
  /**
   * For Pie Chart
   */
  pieConfig = {
    height: 50,
    width: 50
  };
  pieData = [
    { "region": "Complete", "count": "92"},
		{ "region": "Incomplete", "count": "8"}
  ];
  pieColors = ["#99ccff","#ffffff"];
  pieLabels = ["region"];
  pieDisplayLabels = ["Region"];
  pieValue = ["count"];
  pieDisplayValue = ["Count"];

  /**
   * For Bar Chart
   */
  barConfig = {
    height: 200,
    width: 200,
    top: 20,
    right: 5,
    bottom: 25,
    left: 0
  };
  barData = [
    {"year":"2014", "value": 7},
    {"year":"2015", "value": 13},
    {"year":"2016", "value": 56},
    {"year":"2017", "value": 95},
    {"year":"2018", "value": 81}
  ];
  barColors = ["#99ccff"];
  barLabels = ["year"];
  barDisplayLabels = ["Year"];
  barValue = ["value"];
  barDisplayValue = ["Value"];

  /**
   * For Donut Chart
   */
  donutConfig = {
    height: 100,
    width: 100,
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
    innerRadius: 20
  };
  donutData = [
    {"name":"Bagagerie", "value": 31.18},
    {"name":"Porte-monnaie", "value": 19.70},
    {"name":"Pièces d'identités", "value": 17.19},
    {"name":"Appareils électroniques", "value": 14.15},
    {"name":"Vêtements", "value": 5.06},
    {"name":"chaussures", "value": 2.56},
    {"name":"Optique", "value": 2.56},
    {"name":"Livres", "value": 2.45}
  ];
  donutColors = ["#3399ff","#4da6ff","#66b3ff","#80bfff","#99ccff","#b3d9ff","#cce6ff","#e6f2ff"];
  donutLabels = ["name"];
  donutDisplayLabels = ["Name"];
  donutValue = ["value"];
  donutDisplayValue = ["Value"];

  /**
   * For Grouped Chart
   */
  groupedConfig = {
    height: 200,
    width: 320,
    top: 40,
    bottom: 20,
    left: 0,
    right: 60
  };
  groupedData = [
    {"State": "CA", "<5": 2704659, "5 - 13": 4499890, "14 - 17": 2159981, "18 - 24": 3853788, "25 - 44": 10604510, "45 - 64": 8819342, ">65": 4114496},
    {"State": "TX", "<5": 2027307, "5 - 13": 3277946, "14 - 17": 1420518, "18 - 24": 2454721, "25 - 44": 7017731, "45 - 64": 5656528, ">65": 2472223},
    {"State": "NY", "<5": 1208495, "5 - 13": 2141490, "14 - 17": 1058031, "18 - 24": 1999120, "25 - 44": 5355235, "45 - 64": 5120254, ">65": 2607672},
    {"State": "FL", "<5": 1140516, "5 - 13": 1938695, "14 - 17": 925060, "18 - 24": 1607297, "25 - 44": 4782119, "45 - 64": 4746856, ">65": 3187797},
    {"State": "IL", "<5": 894368, "5 - 13": 1558919, "14 - 17": 725973, "18 - 24": 1311479, "25 - 44": 3596343, "45 - 64": 3239173, ">65": 1575308},
    {"State": "PA", "<5": 737462, "5 - 13": 1345341, "14 - 17": 679201, "18 - 24": 1203944, "25 - 44": 3157759, "45 - 64": 3414001, ">65": 1910571}
  ];
  groupedColors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];
  groupedLabels = ["State", "<5", "5 - 13", "14 - 17", "18 - 24", "25 - 44", "45 - 64", ">65"];
  groupedDisplayLabels = ["State", "<5", "5 - 13", "14 - 17", "18 - 24", "25 - 44", "45 - 64", ">65"];
  groupedValue = ["population"];
  groupedDisplayValue = ["Population"];

  /**
   * For Horizontal Bar Chart
   */
  horizontalBarConfig = {
    height: 200,
    width: 320,
    top: 20,
    bottom: 30,
    left: 45,
    right: 20
  };
  horizontalBarData = [
    {"salesperson":"Bob","sales":33},
    {"salesperson":"Robin","sales":12},
    {"salesperson":"Anne","sales":41},
    {"salesperson":"Mark","sales":16},
    {"salesperson":"Joe","sales":59},
    {"salesperson":"Eve","sales":38},
    {"salesperson":"Karen","sales":21},
    {"salesperson":"Kirsty","sales":25},
    {"salesperson":"Chris","sales":30},
    {"salesperson":"Lisa","sales":47},
    {"salesperson":"Tom","sales":5},
    {"salesperson":"Stacy","sales":20},
    {"salesperson":"Charles","sales":13},
    {"salesperson":"Mary","sales":29}
  ];
  horizontalBarColors = ["#4682b4"];
  horizontalBarLabels = ["salesperson"];
  horizontalBarDisplayLabels = ["Salesperson"];
  horizontalBarValue = ["sales"];
  horizontalBarDisplayValue = ["Sales"];

  /**
   * For 3D Pie Chart
   */
  pie3dConfig = {
    height: 200,
    width: 200,
    length: 20
  };
  pie3dData = [
    {label:"Basic", value:"100"},
    {label:"Plus",  value:"150"},
    {label:"Lite", value:"70"},
    {label:"Elite",  value:"90"},
    {label:"Delux",  value:"160"}
  ];
  pie3dColors = ["#3366CC", "#DC3912", "#FF9900", "#109618", "#990099"];
  pie3dLabels = ["label"];
  pie3dDisplayLabels = ["Label"];
  pie3dValue = ["value"];
  pie3dDisplayValue = ["Value"];

  /**
   * For Stack Bar Chart
   */
  stackBarConfig = {
    height: 200,
    width: 320,
    top: 30,
    bottom: 20,
    left: 0,
    right: 20,
    transitionSpeed: 0
  };
  stackBarData = [
    {"State": "AL", "<5": 552, "5 - 13": 259, "14 - 17": 310},
    {"State": "AK", "<5": 856, "5 - 13": 421, "14 - 17": 520},
    {"State": "AZ", "<5": 828, "5 - 13": 362, "14 - 17": 515},
    {"State": "AR", "<5": 343, "5 - 13": 157, "14 - 17": 202},
    {"State": "CA", "<5": 449, "5 - 13": 215, "14 - 17": 270},
    {"State": "CO", "<5": 587, "5 - 13": 261, "14 - 17": 358},
    {"State": "CT", "<5": 403, "5 - 13": 196, "14 - 17": 211},
    {"State": "DE", "<5": 794, "5 - 13": 474, "14 - 17": 593}
  ];
  stackBarColors = ["steelblue", "darkorange", "lightblue"];
  stackBarLabels = ["State", "<5", "5 - 13", "14 - 17"];
  stackBarDisplayLabels = ["State", "<5", "5 - 13", "14 - 17"];
  stackBarValue = ["population"];
  stackBarDisplayValue = ["Population"];

  /**
   * lineCongig
   */
  lineConfig = {
    top: 30,
    bottom: 30,
    left: 30,
    right: 30,
    width: 460,
    height: 400,
    lineOpacity: 0.25,
    lineOpacityHover: 0.85,
    otherLinesOpacityHover: 0.1,
    lineStroke: "1.5px",
    lineStrokeHover: "2.5px",
    circleOpacity: 0.85,
    circleOpacityOnLineHover: 0.25,
    circleRadius: 3,
    circleRadiusHover: 6,
  };
  lineData = [
    {
      ticketname: "P1",
      category: "A",
      values: [
              {date: "2019-11-01", count: "60"},
              {date: "2019-11-02", count: "57"},
              {date: "2019-11-03", count: "73"},
              {date: "2019-11-04", count: "53"},
              {date: "2019-11-05", count: "65"},
              {date: "2019-11-06", count: "60"},
              {date: "2019-11-07", count: "68"},
              {date: "2019-11-08", count: "61"},
              {date: "2019-11-09", count: "64"},
              {date: "2019-11-10", count: "67"},
              {date: "2019-11-11", count: "69"},
              {date: "2019-11-12", count: "61"},
              {date: "2019-11-13", count: "70"},
              {date: "2019-11-14", count: "65"},
              {date: "2019-11-15", count: "73"},
              {date: "2019-11-16", count: "70"},
              {date: "2019-11-17", count: "75"},
              {date: "2019-11-18", count: "71"},
              {date: "2019-11-19", count: "76"},
              {date: "2019-11-20", count: "78"},
              {date: "2019-11-21", count: "74"},
              {date: "2019-11-22", count: "80"},
              {date: "2019-11-23", count: "84"},
              {date: "2019-11-24", count: "80"},
              {date: "2019-11-25", count: "71"},
              {date: "2019-11-26", count: "67"},
              {date: "2019-11-27", count: "72"},
              {date: "2019-11-28", count: "76"},
              {date: "2019-11-29", count: "70"},
              {date: "2019-11-30", count: "72"},
              {date: "2019-12-01", count: "64"},
              {date: "2019-12-02", count: "69"}
      ]
    },
    {
      ticketname: "P2",
      category: "B",
      values: [
              {date: "2019-11-01", count: "78"},
              {date: "2019-11-02", count: "82"},
              {date: "2019-11-03", count: "68"},
              {date: "2019-11-04", count: "70"},
              {date: "2019-11-05", count: "74"},
              {date: "2019-11-06", count: "60"},
              {date: "2019-11-07", count: "64"},
              {date: "2019-11-08", count: "68"},
              {date: "2019-11-09", count: "72"},
              {date: "2019-11-10", count: "76"},
              {date: "2019-11-11", count: "72"},
              {date: "2019-11-12", count: "68"},
              {date: "2019-11-13", count: "62"},
              {date: "2019-11-14", count: "52"},
              {date: "2019-11-15", count: "60"},
              {date: "2019-11-16", count: "76"},
              {date: "2019-11-17", count: "83"},
              {date: "2019-11-18", count: "85"},
              {date: "2019-11-19", count: "81"},
              {date: "2019-11-20", count: "73"},
              {date: "2019-11-21", count: "77"},
              {date: "2019-11-22", count: "80"},
              {date: "2019-11-23", count: "81"},
              {date: "2019-11-24", count: "83"},
              {date: "2019-11-25", count: "77"},
              {date: "2019-11-26", count: "71"},
              {date: "2019-11-27", count: "68"},
              {date: "2019-11-28", count: "60"},
              {date: "2019-11-29", count: "65"},
              {date: "2019-11-30", count: "71"},
              {date: "2019-12-01", count: "80"},
              {date: "2019-12-02", count: "85"}
      ]
    },
    {
      ticketname: "P3",
      category: "D",
      values: [
              {date: "2019-11-01", count: "60"},
              {date: "2019-11-02", count: "60"},
              {date: "2019-11-03", count: "76"},
              {date: "2019-11-04", count: "82"},
              {date: "2019-11-05", count: "81"},
              {date: "2019-11-06", count: "60"},
              {date: "2019-11-07", count: "70"},
              {date: "2019-11-08", count: "70"},
              {date: "2019-11-09", count: "80"},
              {date: "2019-11-10", count: "90"},
              {date: "2019-11-11", count: "89"},
              {date: "2019-11-12", count: "83"},
              {date: "2019-11-13", count: "77"},
              {date: "2019-11-14", count: "71"},
              {date: "2019-11-15", count: "65"},
              {date: "2019-11-16", count: "60"},
              {date: "2019-11-17", count: "55"},
              {date: "2019-11-18", count: "59"},
              {date: "2019-11-19", count: "54"},
              {date: "2019-11-20", count: "64"},
              {date: "2019-11-21", count: "68"},
              {date: "2019-11-22", count: "80"},
              {date: "2019-11-23", count: "81"},
              {date: "2019-11-24", count: "70"},
              {date: "2019-11-25", count: "75"},
              {date: "2019-11-26", count: "77"},
              {date: "2019-11-27", count: "74"},
              {date: "2019-11-28", count: "79"},
              {date: "2019-11-29", count: "81"},
              {date: "2019-11-30", count: "73"},
              {date: "2019-12-01", count: "77"},
              {date: "2019-12-02", count: "80"}
      ]
    },
    {
        ticketname: "P4",
        category: "C",
        values: [
              {date: "2019-11-01", count: "82"},
              {date: "2019-11-02", count: "86"},
              {date: "2019-11-03", count: "73"},
              {date: "2019-11-04", count: "68"},
              {date: "2019-11-05", count: "90"},
              {date: "2019-11-06", count: "76"},
              {date: "2019-11-07", count: "57"},
              {date: "2019-11-08", count: "51"},
              {date: "2019-11-09", count: "65"},
              {date: "2019-11-10", count: "80"},
              {date: "2019-11-11", count: "87"},
              {date: "2019-11-12", count: "89"},
              {date: "2019-11-13", count: "77"},
              {date: "2019-11-14", count: "79"},
              {date: "2019-11-15", count: "73"},
              {date: "2019-11-16", count: "71"},
              {date: "2019-11-17", count: "67"},
              {date: "2019-11-18", count: "63"},
              {date: "2019-11-19", count: "57"},
              {date: "2019-11-20", count: "61"},
              {date: "2019-11-21", count: "68"},
              {date: "2019-11-22", count: "80"},
              {date: "2019-11-23", count: "77"},
              {date: "2019-11-24", count: "75"},
              {date: "2019-11-25", count: "82"},
              {date: "2019-11-26", count: "80"},
              {date: "2019-11-27", count: "77"},
              {date: "2019-11-28", count: "74"},
              {date: "2019-11-29", count: "70"},
              {date: "2019-11-30", count: "82"},
              {date: "2019-12-01", count: "77"},
              {date: "2019-12-02", count: "80"}
          ]
    }
  ];
  lineColors = ["#DB4041", "#DB4041", "#FFBF00", "#009900"];

  /**
   * horizontalStackBarConfig
   */
  horizontalStackBarConfig = {
    top: 20,
    bottom: 30,
    left: 30,
    right: 30,
    width: 350,
    height: 350,
  };
  horizontalStackBarData =[
    {"State": "AL", "<5": 552, "5 - 13": 259, "14 - 17": 310},
    {"State": "AK", "<5": 856, "5 - 13": 421, "14 - 17": 520},
    {"State": "AZ", "<5": 828, "5 - 13": 362, "14 - 17": 515},
    {"State": "AR", "<5": 343, "5 - 13": 157, "14 - 17": 202},
    {"State": "CA", "<5": 449, "5 - 13": 215, "14 - 17": 270}
  ];

  /**
   * For Tooltip
   */
  tooltipStyle = {
    "position": "absolute",
    "width": "auto",
    "height": "auto",
    "background": "none repeat scroll 0 0 white",
    "border": "0 none",
    "border-radius": "8px 8px 8px 8px",
    "box-shadow": "-3px 3px 15px #888888",
    "color": "black",
    "font": "12px sans-serif",
    "padding": "5px",
    "text-align": "center",
    "display": "none"
  }

  drilledPie(event){
    console.log('(Pie) Region: ' + event.region + ' | Count: ' + event.count);
  }

  drilledBar(event){
    console.log('(Bar) Year: ' + event.year + ' | Count: ' + event.value);
  }

  drilledDonut(event){
    console.log('(Donut) Name: ' + event.name + ' | Count: ' + event.value);
  }

  drilledGrouped(event){
    console.log(event);
  }

  drilledhorizontalBar(event){
    console.log(event);
  }

  drilledpie3d(event){
    console.log(event);
  }

  drilledstackBar(event){
    console.log(event);
  }
}
