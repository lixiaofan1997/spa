/*global echarts:true*/
$(function(){
  var xData=[];
  var yData=[];
  //create ydata xdata;
  var myChart= echarts.init($('.main')[0]);
  for (var p=0;p<1;p+=0.1)
  {
    xData.push(p);
    yData.push(h(p));
    //console.log('');
  }
  function h(p){
    if(p===0){return 0;}
    return  -1*p*Math.log(p)-(1-p)*Math.log2(1-p);
  }
  var option = {
    title: {
      text: '二进制熵函数'
    },
    tooltip: {},
    legend: {
      data:['二进制']
    },
    xAxis: {
      data: xData
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'line',
      smooth:true,
      data: yData,
    }]
  };
  myChart.setOption(option);
});
