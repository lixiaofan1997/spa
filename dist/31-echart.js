$(function(){for(var t=[],a=[],e=echarts.init($(".main")[0]),i=0;i<1;i+=.1)t.push(i),a.push(n(i));function n(t){return 0===t?0:-1*t*Math.log(t)-(1-t)*Math.log2(1-t)}var o={title:{text:"二进制熵函数"},tooltip:{},legend:{data:["二进制"]},xAxis:{data:t},yAxis:{},series:[{name:"销量",type:"line",smooth:!0,data:a}]};e.setOption(o)});