Highcharts.chart('PDP_Cloud_freq', {
  
  colorAxis: {
    minColor: '#29a329',
    maxColor: Highcharts.getOptions().colors[0]
  },
  credits: {
        text: 'bmetrics.ie',
        href: 'https://bmetrics.ie'
    },
  series: [{
    type: 'treemap',
    layoutAlgorithm: 'squarified',
    data: [{
      name: 'officialpdpnig',
      value: 15426,
      colorValue: 1
    }, {
      name: 'atiku',
      value: 7649,
      colorValue: 2
    }, {
      name: 'mbuhari',
      value: 2983,
      colorValue: 3
    }, {
      name: 'campaign',
      value: 1640,
      colorValue: 4
    }, {
      name: 'bukolasaraki',
      value: 1497,
      colorValue: 5
    }, {
      name: 'candidate',
      value: 1277,
      colorValue: 6
    }, {
      name: 'state',
      value: 1486,
      colorValue: 7
    },{
      name: 'presidential',
      value: 1409,
      colorValue: 8
    },{
      name: 'theatikuplan',
      value: 1097,
      colorValue: 9
    },{
      name: 'officialapcng',
      value: 1067,
      colorValue: 10
    },{
      name: 'delivered',
      value: 1010,
      colorValue: 11
    },{
      name: 'profosinbajo',
      value: 812,
      colorValue: 12
    },{
      name: 'peterobi',
      value: 695,
      colorValue: 13
    },{
      name: 'lie',
      value: 681,
      colorValue: 14
    },{
      name: 'mohammed',
      value: 651,
      colorValue: 15
    },{
      name: 'zamfara   582',
      value: 582,
      colorValue: 16
    }]
  }],
  title: {
    text: 'Top words appearance on PDP twitter page'
  }
});


Highcharts.chart('PDPVotersSentiments', {

  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  credits: {
        text: 'bmetrics.ie',
        href: 'https://bmetrics.ie'
    },

  title: {
    text: 'Voters Sentiments Towards PDP'
  },

  pane: {
    startAngle: -150,
    endAngle: 150,
    background: [{
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#FFF'],
          [1, '#333']
        ]
      },
      borderWidth: 0,
      outerRadius: '109%'
    }, {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#333'],
          [1, '#FFF']
        ]
      },
      borderWidth: 1,
      outerRadius: '107%'
    }, {
      // default background
    }, {
      backgroundColor: '#DDD',
      borderWidth: 0,
      outerRadius: '105%',
      innerRadius: '103%'
    }]
  },

  // the value axis
  yAxis: {
    min: 0,
    max: 100,

    minorTickInterval: 'auto',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',

    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
      step: 2,
      rotation: 'auto'
    },
    title: {
      text: '% Voters Approvals'
    },
    plotBands: [{
      from: 0,
      to: 100,
      color: '#55BF3B' // green
    }, {
      from: 40,
      to: 60,
      color: '#DDDF0D' // yellow
    }, {
      from: 0,
      to: 40,
      color: '#DF5353' // red
    }]
  },

  series: [{
    name: 'PDP',
    data: [49],
    tooltip: {
      valueSuffix: '%'
    }
  }]
});

Highcharts.chart('APCVotersSentiments', {

  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  credits: {
        text: 'bmetrics.ie',
        href: 'https://bmetrics.ie'
    },

  title: {
    text: 'Voters Sentiments Towards APC'
  },

  pane: {
    startAngle: -150,
    endAngle: 150,
    background: [{
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#FFF'],
          [1, '#333']
        ]
      },
      borderWidth: 0,
      outerRadius: '109%'
    }, {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#333'],
          [1, '#FFF']
        ]
      },
      borderWidth: 1,
      outerRadius: '107%'
    }, {
      // default background
    }, {
      backgroundColor: '#DDD',
      borderWidth: 0,
      outerRadius: '105%',
      innerRadius: '103%'
    }]
  },

  // the value axis
  yAxis: {
    min: 0,
    max: 100,

    minorTickInterval: 'auto',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',

    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
      step: 2,
      rotation: 'auto'
    },
    title: {
      text: '% Voters Approvals'
    },
    plotBands: [{
      from: 0,
      to: 100,
      color: '#55BF3B' // green
    }, {
      from: 40,
      to: 60,
      color: '#DDDF0D' // yellow
    }, {
      from: 0,
      to: 40,
      color: '#DF5353' // red
    }]
  },

  series: [{
    name: 'APC',
    data: [53],
    tooltip: {
      valueSuffix: '%'
    }
  }]
});
Highcharts.chart('APC_Cloud_freq', {
  colorAxis: {
    minColor: '#29a329',
    maxColor: Highcharts.getOptions().colors[0]
  },
  credits: {
        text: 'bmetrics.ie',
        href: 'https://bmetrics.ie'
    },
  series: [{
    type: 'treemap',
    layoutAlgorithm: 'squarified',
    data: [{
      name: 'apcnigeria',
      value: 16503,
      colorValue: 1
    }, {
      name: 'tco',
      value: 7138,
      colorValue: 2
    }, {
      name: 'mbuhari',
      value: 2249,
      colorValue: 3
    }, {
      name: 'nigerians',
      value: 1931,
      colorValue: 4
    }, {
      name: 'vote',
      value: 1847,
      colorValue: 5
    }, {
      name: 'officialpdpnig',
      value: 1634,
      colorValue: 6
    }, {
      name: 'God',
      value: 1542,
      colorValue: 7
    },{
      name: 'will',
      value: 1140,
      colorValue: 8
    },{
      name: 'campaign',
      value: 1055,
      colorValue: 9
    },{
      name: 'years',
      value: 1044,
      colorValue: 10
    },{
      name: 'thenextlevelng',
      value: 1037,
      colorValue: 10
    },{
      name: 'buharicentre',
      value: 990,
      colorValue: 11
    },{
      name: ' fkeyamo',
      value: 988,
      colorValue: 12
    },{
      name: 'delivered',
      value: 911,
      colorValue: 13
    },{
      name: 'ordinary',
      value: 700,
      colorValue: 14
    },{
      name: 'oppressed   697',
      value: 697,
      colorValue: 15
    }]
  }],
  title: {
    text: 'Top words appearance APC on twitter page'
  }
});



