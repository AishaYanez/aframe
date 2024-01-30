const colorScale = d3.scaleSequential(d3.interpolatePlasma);
const dataset = [];

for (let i = 10; i > 0; i--) {
  dataset.push(i);
}

let boxes = d3.select('#boxes');
boxes.selectAll('a-box')
     .data(dataset)
     .enter()
     .append('a-box')
     .attr('height', '0.1')
     .attr('width', function(d, i) {
       return String(0.1 * d);
     })
     .attr('depth', function(d, i) {
       return String(0.1 * d);
     })
     .attr('color', function(d, i) {
       return colorScale(i / 10);
     })
     .attr('position', function(d, i) {
       return '2 ' + (i * 0.1 + 1.1) + ' 0';
     })
     .attr('dynamic-body', '');