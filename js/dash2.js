

Highcharts.chart('PoliticalRegion', {
  title: {
    text: 'Voters Accross Geo-Political zones'
  },
  credits: {
        text: 'bmetrics.ie',
        href: 'https://bmetrics.ie'
    },
  xAxis: {
    categories: ['North-Central', 'North-East', 'North-West', 'South-East', 'South-South','South-West']
  },
  labels: {
    items: [{
      html: 'Voters Accross Regions',
      style: {
        left: '50px',
        top: '18px',
        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
      }
    }]
  },
   
  series: [{
    type: 'column',
    name: 'APC',
    data: [9.0,8.0,21.0,2.0,8.0,8.0],
    color:'green'
  }, {
    type: 'column',
    name: 'PDP',
    data: [5.0,4.0,9.0,6.0,11.0,6.0],
    color:'red'
  }, {
    type: 'column',
    name: 'OTHERS',
    data: [1.0,0.0,0.0,0.0,1.0,1.0],
    color:'orange'
  }, {
    type: 'spline',
    name: '%votes',
    data: [15.0,12.0,30.0,8.0,20.0,15.0],
    marker: {
      lineWidth: 2,
      lineColor: Highcharts.getOptions().colors[3],
      fillColor: 'white'
    }
  }, {
    type: 'pie',
    name: 'Total % of votes Casted Overall',
    data: [{
      name: 'APC',
      y: 57,
      color:'green' // Jane's color
    }, {
      name: 'PDP',
      y: 40,
      color: 'red'
    }, {
      name: 'OTHERS',
      y: 3,
      color: 'orange'
    }],
    right: [0, 0],
    size: 60,
    showInLegend: false,
    dataLabels: {
      enabled: false
    }
  }]
});
Highcharts.chart('RegionAgeGroup', {
  chart: {
    type: 'column'
  },
  credits: {
        text: 'bmetrics.ie',
        href: 'https://bmetrics.ie'
    },
  title: {
    text: 'Age-Group and How People Votes'
  },
  xAxis: {
    categories: ["18-25","25-35","35-45","45-55","55+"]
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Votes accross region'
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'bold',
        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
      }
    }
  },
  legend: {
    align: 'right',
    x: 0,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      backgroundColor: '#ccccff',
      dataLabels: {
        enabled: true,
        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
      }
    }
  },
  series: [{
    name: 'APC',
    data: [8.0,28.0,14.0,6.0,1.0],
    color:'green'
  }, {
    name: 'PDP',
    data: [7.0,16.0,12.0,4.0,1.0],
    color:'red'
  }, {
    name: 'OTHERS',
    data: [1.0,1.0,1.0,0.0,0.0],
    color:'orange'
  }]
});

Highcharts.chart('IncomePartyChoice', {
  chart: {
    type: 'column'
  },
  credits: {
        text: 'bmetrics.ie',
        href: 'https://bmetrics.ie'
    },
  title: {
    text: 'Income and Votes Accross Parties'
  },
  xAxis: {
    categories: ["100000+","20000-30000/mth","30000-40000/mth","40000-50000/mth","50000-60000/mth","60000-80000/mth","80000-100000/mth","No-income"]
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Voter Income Range Accross Parties'
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'bold',
        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
      }
    }
  },
  legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
      }
    }
  },
  series: [{
    name: 'APC',
    data: [12.0,10.0,5.0,5.0,2.0,1.0,5.0,17.0],
    color:'green'
  }, {
    name: 'PDP',
    data: [8.0,7.0,2.0,1.0,2.0,2.0,4.0,14.0],
    color:'red'
  }, {
    name: 'OTHERS',
    data: [0.0,0.0,0.0,0.0,0.0,1.0,0.0,1.0],
    color:'orange'
  }]
});

Highcharts.chart('PollsResult', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },


  credits: {
        text: 'bmetrics.ie',
        href: 'https://bmetrics.ie'
    },
  title: {
    text: 'Polls Result'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
        }
      }
    }
  },
  series: [{
    name: 'Poll Result',
    colorByPoint: true,
    data: [{
      name: 'APC',
      y: 57.00,
      sliced: true,
      selected: true,
      color:'green'
    }, {
      name: 'PDP',
      y: 40.00,
      sliced: true,
      selected: true,
      color:'red'
    }, {
      name: 'OTHERS',
      y: 3.00,
      sliced: true,
      selected: true,
      color:'orange'
    }]
  }]
});
Highcharts.chart('EmploymentStatusVoters', {
  chart: {
    type: 'bar'
  },
  credits: {
        text: 'bmetrics.ie',
        href: 'https://bmetrics.ie'
    },
  title: {
    text: 'Employment Status/ and Voter Accross Parties'
  },
  subtitle: {
    text: 'Source: <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYPO-S1R1XPvXBt8Ol0QHb-rN7YklvJRY2z9u9M_NNVGZuLg/viewform">B_Analytics</a>'
  },
  xAxis: {
    categories: ['Not-Employed','Employed'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Population (millions)',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' Percent'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'horizontal',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 55,
    floating: true,
    borderWidth: 1,
    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'APC',
    data: [55.0,59.0],
    color:'green'
  }, {
    name: 'PDP',
    data: [42.0,37.0],
    color:'red'
  }, {
    name: 'OTHERS',
    data: [3.0,3.0],
    color:'orange'
  }]
});


Highcharts.chart('GenderVotesAccrossParty', {
  chart: {
    type: 'bar'
  },
  credits: {
        text: 'bmetrics.ie',
        href: 'https://bmetrics.ie'
    },
  title: {
    text: 'Gender Votes Accross Party'
  },
  subtitle: {
    text: 'Source: <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYPO-S1R1XPvXBt8Ol0QHb-rN7YklvJRY2z9u9M_NNVGZuLg/viewform">B_Analytics</a>'
  },
  xAxis: {
    categories: ['Female', 'Male'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Votes(%)',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' Percent'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'horizontal',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 55,
    floating: true,
    borderWidth: 1,
    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'APC',
    data: [61.0,56.0],
    color:'green'
  }, {
    name: 'PDP',
    data: [35.0,41.0],
    color:'red'
  }, {
    name: 'OTHERS',
    data: [4.0,3.0],
    color:'orange'
  }]
});

