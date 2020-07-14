

d3.select('#chart')
   .selectAll('p')
   .data([1, 2, 3, 4])
   .enter()
   .append('p')
   .text(data => data);