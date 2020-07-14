const num = [1,2,3,4,5]

d3.select('#chart')
   .selectAll('p')
   .data(num)
   .enter()
   .append('p')
   .text(data => data);