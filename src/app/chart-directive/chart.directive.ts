import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import * as d3 from 'd3';
interface Config {
  height: number;
  width: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  innerRadius?: number;
  length?: number;
  transitionSpeed?: number;
  lineOpacity?: number;
  lineOpacityHover?: number;
  lineStroke?: string;
  lineStrokeHover?: string;
  otherLinesOpacityHover?: number;
  circleOpacity?: number;
  circleOpacityOnLineHover?: number;
  circleRadius?: number;
  circleRadiusHover?: number;
}

@Directive({
  selector: '[charts]' /*,
  host: {
    '[style.div.toolTip.background-color]': '"yellow"',
  }*/,
})
export class ChartDirective implements OnInit {
  /**
   * @param type            String          Type of chart
   * @param config          Config Object   Chart configuration includes dimensions
   * @param data            Array           Chart data
   * @param color           Array           Chart color
   * @param fontcolor       String          Chart font color
   * @param fontsize        String          Chart font size
   * @param drillthrough    Boolean         Drillthrough is applicable or not
   * @param tooltip         Boolean         Want tooltip or not
   * @param tooltipstyle    Object          Tooltip css
   * @param label           Array           x-Axis labels array for data array
   * @param value           String          y-Axis for data array
   * @param displaylabel    Array           Display name array in tooltip for x-Axis
   * @param displayvalue    String          Display name in tooltip for y-Axis
   * @param showX           Boolean         Show X-Axis or not
   * @param showY           Boolean         show Y-Axis or not
   * @param onDrillthrough  EventEmitter    Sends data to parent component
   */
  @Input('type') type: string;
  @Input('config') config: Config;
  @Input('data') data: Array<any> = [];
  @Input('color') color: Array<string> = [];
  @Input('fontcolor') fontcolor: string;
  @Input('fontsize') fontsize: any;
  @Input('drillthrough') drillthrough: Boolean = false;
  @Input('tooltip') tooltip: Boolean = false;
  @Input('tooltipstyle') tooltipstyle: Boolean = false;
  @Input('label') label: Array<string> = [];
  @Input('value') value: Array<string> = [];
  @Input('displaylabel') displaylabel: Array<string> = [];
  @Input('displayvalue') displayvalue: Array<string> = [];
  @Input('showX') showX: Boolean = false;
  @Input('showY') showY: Boolean = false;
  @Output() onDrillthrough = new EventEmitter();
  _current: any;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    switch (this.type) {
      case 'stacked':
        this.stackedBarChart(this.config);
        break;
      default:
        throw new Error('Invalid chart type');
    }
  }

  /**
   * For Stack Bar Chart
   */
  stackedBarChart(config) {
    var tooltip = this.toolTip();
    const self = this;
    var legendSvg = d3.select(this.el.nativeElement).append('svg'),
      svg = d3.select(this.el.nativeElement).append('svg'),
      margin = {
        top: config.top,
        left: config.left,
        bottom: config.bottom,
        right: config.right,
      },
      transitionSpeed = config.transitionSpeed,
      width = config.width - margin.left - margin.right,
      height = config.height - margin.top - margin.bottom,
      color = d3.scaleOrdinal().range(this.color);
    var states = [];
    for (let i = 0; i < this.data.length; i++) {
      if (states.indexOf(this.data[i][this.label[0]]) === -1) {
        states.push(this.data[i][this.label[0]]);
      }
    }
    var keys = this.label.slice(1);
    var x = d3
      .scaleBand()
      .range([margin.left, width - margin.right])
      .padding(0.1);
    var y = d3.scaleLinear().rangeRound([height - margin.bottom, margin.top]);
    var xAxis = svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .attr('class', 'x-axis');
    var yAxis = svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .attr('class', 'y-axis')
      .remove();
    var z = d3.scaleOrdinal().range(this.color).domain(keys);
    this.data.forEach(function (d) {
      d.total = d3.sum(keys, (k) => +d[k]);
      return d;
    });

    y.domain([0, d3.max(this.data, (d) => d3.sum(keys, (k) => +d[k]))]).nice();
    svg
      .selectAll('.y-axis')
      .transition()
      .duration(transitionSpeed)
      .call(d3.axisLeft(y).ticks(null, 's'));
    x.domain(this.data.map((d) => d[this.label[0]]));
    svg
      .selectAll('.x-axis')
      .transition()
      .duration(transitionSpeed)
      .call(d3.axisBottom(x).tickSizeOuter(0));
    var group = svg
      .selectAll('g.layer')
      .data(d3.stack().keys(keys)(self.data), (d) => d.key);
    group.exit().remove();
    group
      .enter()
      .append('g')
      .classed('layer', true)
      .attr('fill', (d) => z(d.key));

    var bars = svg
      .selectAll('g.layer')
      .selectAll('rect')
      .data(
        (d) => d,
        (e) => e.data[self.label[0]]
      );
    bars.exit().remove();
    bars
      .enter()
      .append('rect')
      .attr('width', x.bandwidth())
      .on('click', function (d, i) {
        tooltip.style('display', 'none');
        console.log(d.keys);
        if (self.drillthrough) {
          self.onDrillthrough.emit({
            key: self.data[i][self.label[0]],
            value: d[1] - d[0],
          });
        }
      })
      .on('mousemove', function (d, i) {
        if (self.tooltip) {
          tooltip.style('left', d3.event.pageX + 10 + 'px');
          tooltip.style('top', d3.event.pageY - 25 + 'px');
          tooltip.style('display', 'block');
          if (self.displaylabel.length > 0) {
            tooltip.html(
              self.displaylabel[0] +
                ': ' +
                self.data[i][self.label[0]] +
                '<br>' +
                self.displayvalue[0] +
                ': ' +
                (d[1] - d[0])
            );
          } else {
            tooltip.html(
              self.label[0] +
                ': ' +
                self.data[i][self.label[0]] +
                '<br>' +
                self.value[0] +
                ': ' +
                (d[1] - d[0])
            );
          }
        }
      })
      .on('mouseout', function (d) {
        if (self.tooltip) {
          tooltip.style('display', 'none');
        }
      })
      .merge(bars)
      .transition()
      .duration(transitionSpeed)
      .attr('x', (d) => x(d.data[self.label[0]]))
      .attr('y', (d) => y(d[1]))
      .attr('height', (d) => y(d[0]) - y(d[1]));

    var text = svg.selectAll('.text').data(this.data, (d) => d[self.label[0]]);
    text.exit().remove();
    text
      .enter()
      .append('text')
      .attr('class', 'text')
      .attr('text-anchor', 'middle')
      .style('font-size', self.fontsize)
      .style('fill', self.fontcolor)
      .merge(text)
      .transition()
      .duration(transitionSpeed)
      .attr('x', (d) => x(d[self.label[0]]) + x.bandwidth() / 2)
      .attr('y', (d) => y(d.total) - 5)
      .text((d) => d.total);

    legendSvg
      .attr('width', keys.length * 70)
      .attr('height', 40)
      .style('font-size', self.fontsize)
      .style('fill', self.fontcolor)
      .style('margin-left', `${margin.left * 3}px`)
      .style('margin-top', `${margin.top / 2}px`)
      .style('text-transform', 'capitalize')
      .style('display', 'block')
      .attr('text-align', 'center');

    const g = legendSvg
      .append('g')
      .selectAll('g')
      .data(keys)
      .join('g')
      .attr('transform', (d, i) => `translate(${i * 40},0)`);

    g.append('rect')
      .attr('width', 40)
      .attr('height', 10)
      .attr('fill', (d, i) => {
        return color(i);
      });
    g.append('text')
      .attr('x', 10)
      .attr('y', 32)
      .attr('dy', '-0.5em')
      .text((d, i) => keys[i]);
  }

  /**
   * Tooltip
   */
  private toolTip() {
    var tooltip = d3.select('body').append('div').attr('class', 'toolTip');
    for (let key in this.tooltipstyle) {
      tooltip.style(key, this.tooltipstyle[key]);
    }
    return tooltip;
  }
}
