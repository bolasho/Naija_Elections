

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
      html: 'Voters and candidates choices',
      style: {
        left: '50px',
        top: '18px',
        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
      }
    }]
  },
   
  series: [{
    type: 'column',
    name: 'Buhari',
    pointWidth:15,
    groupPadding: 0,
    data: [8.0,9.1,23.7,2.4,8.6,7.4],
    color:'green'
  }, {
    type: 'column',
    name: 'Atiku',
    data: [5.4,2.9,5.8,4.9,10.7,5.0],
    pointWidth:10,
    groupPadding: 0,
    color:'red'
  }, 
     {
    type: 'column',
    name: 'Ezekwezili',
    data: [1.3,0.0,0.0,0.2,0.5,0.8],
    pointWidth:15,
    groupPadding: 0,
    color:'purple'
  },
   {
    type: 'column',
    name: 'Sowore',
    data: [0.2,0.0,0.5,0.2,0.0,0.9],
    pointWidth:15,
    groupPadding: 0,
    color:'blue'
  },
  {
    type: 'column',
    name: 'OTHERS',
    data: [0.1,0.0,0.0,0.3,0.2,0.9],
    pointWidth:15,
    groupPadding: 0,
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
      name: 'Buhari',
      y: 59.2,
      color:'green' // Jane's color
    }, {
      name: 'Atiku',
      y: 34.7,
      color: 'red'
    }
    , {
      name: 'Ezekwezili',
      y: 2.8,
      color: 'purple'
    }
    , {
      name: 'Sowore',
      y: 1.8,
      color: 'blue'
    }
    , {
      name: 'OTHERS',
      y: 1.5,
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
    text: 'Age-Group and candidates choices'
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
    name: 'Buhari',
    data: [6.8,20.6,17.4,11.2,3.2],
    color:'green'
  }, {
    name: 'Atiku',
    data: [7.4,17.8,6.2,1.5,1.8],
    color:'red'
  }, 
  {
    name: 'Ezekwezili',
    data: [0.7,1.2,0.8,0.1,0.0],
    color:'purple'
  },
  {
    name: 'Sowore',
    data: [0.5,1.1,0.2,0.0,0.0],
    color:'blue'
  },
  {
    name: 'OTHERS',
    data: [0.6,0.5,0.1,0.3,0.0],
    color:'orange'
  }]
});

Highcharts.chart('IncomePartyChoice', {
  chart: {
    type: 'column',
    
    marginRight:1,
    marginLeft:1
  },
  credits: {
        text: 'bmetrics.ie',
        href: 'https://bmetrics.ie'
    },
  title: {
    text: 'Income and candidates choices'
  },
  xAxis: {
    categories: ["100000+","20000-30000/mth","30000-40000/mth","40000-50000/mth","50000-60000/mth","60000-80000/mth","80000-100000/mth","No-income"]
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Voter Income Range and how they cast their votes'
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
      pointPadding: 1, 
      groupPadding: 0.8,
      dataLabels: {
        enabled: true,
        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
      }
    }
  },
  series: [{
    name: 'Buhari',
    data: [14.1,10.3,5.6,5.1,2.3,3.9,4.1,13.8],
    color:'green'
  }, {
    name: 'Atiku',
    data: [7.3,4.8,2.4,1.9,2.8,1.6,2.4,11.5],
    color:'red'
  }, 
  {
    name: 'Ezekwezili',
    data: [1.3,0.1,0.2,0.0,0.3,0.0,0.6,0.3],
    color:'purple'
  }, 
  {
    name: 'Sowore',
    data: [0.4,0.0,0.4,0.1,0.0,0.0,0.0,0.9],
    color:'blue'
  }, 
  {
    name: 'OTHERS',
    data: [0.1,0.2,0.0,0.2,0.2,0.0,0.3,0.5],
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
      size:150,
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
      name: 'Buhari',
      y: 59.2,
      sliced: true,
      selected: true,
      color:'green'
    }, {
      name: 'Atiku',
      y: 34.7,
      sliced: true,
      selected: true,
      color:'red'
    }, 
    {
      name: 'Ezekwezili',
      y: 2.8,
      sliced: true,
      selected: true,
      color:'purple'
    }, 
    {
      name: 'Sowore',
      y: 1.8,
      sliced: true,
      selected: true,
      color:'blue'
    },
    {
      name: 'OTHERS',
      y: 1.5,
      sliced: true,
      selected: true,
      color:'orange'
    }
    ]
  }]
});
Highcharts.chart('EmploymentStatusVoters', {
  chart: {
    type: 'bar',

    marginBottom: 10,
    marginTop: 10
  },
  credits: {
        text: 'bmetrics.ie',
        href: 'https://bmetrics.ie'
    },
  title: {
    text: 'Employment Status/Voters'
  },
  subtitle: {
    align: 'bottom',
    text: 'Source: <a href="http://itbanalytics.com">B_Analytics</a>'
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
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: 0,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Buhari',
    data: [57.7,60.2],
    pointWidth: 20,
    pointPadding: 0.25,
    borderWidth: 2.0,
    color:'green'
  }, {
    name: 'Atiku',
    data: [37.3,32.9],
    pointWidth: 20,
    pointPadding: 0.25,
    borderWidth: 2.0,
    color:'red'
  }, {
    name: 'Ezekwezili',
    data: [1.2,3.9],
    pointWidth: 20,
    pointPadding: 0.25,
    borderWidth: 2.0,
    color:'purple'
  },
  {
    name: 'Sowore',
    data: [2.5,1.3],
    pointWidth: 20,
    pointPadding: 0.25,
    borderWidth: 2.0,
    color:'blue'
  },
  {
    name: 'OTHERS',
    data: [1.2,1.7],
    pointWidth: 20,
    pointPadding: 0.25,
    borderWidth: 2.0,
    color:'orange'
  }]
});


Highcharts.chart('GenderVotesAccrossParty', {
  chart: {
    type: 'bar',
    pointPadding: 0.25,
    borderWidth: 2.0,
    marginBottom: 10,
    marginTop: 10
  },
  credits: {
        text: 'bmetrics.ie',
        href: 'https://bmetrics.ie'
    },
  title: {
    text: 'Gender Votes and candidates choices'
  },
  subtitle: {
    align: 'right',
    text: 'Source: <a href="http://itbanalytics.com">B_Analytics</a>'
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
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: 0,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Buhari',
    data: [23.9,62.8],
    pointWidth: 20,
    pointPadding: 0.25,
    borderWidth: 2.0,
    color:'green'
  }, {
    name: 'Atiku',
    data: [64.1,31.7],
    pointWidth: 20,
    pointPadding: 0.25,
    borderWidth: 2.0,
    color:'red'
  }, {
    name: 'Ezekwezili',
    data: [3.3,2.8],
    pointWidth: 20,
    pointPadding: 0.25,
    borderWidth: 2.0,
    color:'purple'
  },
  {
    name: 'Sowore',
    data: [2.2,1.8],
    pointWidth: 20,
    pointPadding: 0.25,
    borderWidth: 2.0,
    color:'blue'
  },
  {
    name: 'OTHERS',
    data: [6.5,1.0],
    pointWidth: 20,
    pointPadding: 0.25,
    borderWidth: 2.0,
    color:'orange'
  }]
});

