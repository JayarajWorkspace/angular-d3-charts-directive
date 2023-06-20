import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular D3 Charts';

  stackBarConfig = {
    height: 200,
    width: 320,
    top: 30,
    bottom: 20,
    left: 0,
    right: 20,
    transitionSpeed: 0,
  };
  stackBarData = [
    {
      refresh_month: 'May',
      refresh_year: 2021,
      ExtremelyConfusing: 24542,
      VeryConfusing: 20558,
      Confusing: 35212,
      Difficult: 94229,
      FairlyDifficult: 11575,
    },
    {
      refresh_month: 'November',
      refresh_year: 2021,
      ExtremelyConfusing: 24533,
      VeryConfusing: 20513,
      Confusing: 35144,
      Difficult: 94200,
      FairlyDifficult: 11511,
    },
    {
      refresh_month: 'January',
      refresh_year: 2022,
      ExtremelyConfusing: 24562,
      VeryConfusing: 20543,
      Confusing: 35184,
      Difficult: 94276,
      FairlyDifficult: 11514,
    },
  ];
  stackBarColors = ['blue', 'red', 'orange'];
  stackBarLabels = [
    'refresh_month',
    'ExtremelyConfusing',
    'VeryConfusing',
    'Confusing',
  ];
  stackBarDisplayLabels = [
    'refresh_month',
    'ExtremelyConfusing',
    'VeryConfusing',
    'Confusing',
  ];
  stackBarValue = [
    'refresh_month',
    'ExtremelyConfusing',
    'VeryConfusing',
    'Confusing',
  ];
  stackBarDisplayValue = [
    'refresh_month',
    'ExtremelyConfusing',
    'VeryConfusing',
    'Confusing',
  ];

  /**
   * For Tooltip
   */
  tooltipStyle = {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    background: 'none repeat scroll 0 0 white',
    border: '0 none',
    'border-radius': '8px 8px 8px 8px',
    'box-shadow': '-3px 3px 15px #888888',
    color: 'black',
    font: '12px sans-serif',
    padding: '5px',
    'text-align': 'center',
    display: 'none',
  };

  drilledstackBar(event) {
    console.log(event);
  }
}
