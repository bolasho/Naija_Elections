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
      value: 8824,
      colorValue: 1
    }, {
      name: 'atiku',
      value: 5697,
      colorValue: 2
    }, {
      name: 'tco',
      value: 3500,
      colorValue: 3
    }, {
      name: 'fuel',
      value: 1320,
      colorValue: 4
    }, {
      name: 'presidential',
      value: 1284,
      colorValue: 5
    }, {
      name: 'candidate',
      value: 1277,
      colorValue: 6
    }, {
      name: 'price',
      value: 1226,
      colorValue: 7
    },{
      name: 'petergregoryobi',
      value: 1143,
      colorValue: 8
    },{
      name: 'crash',
      value: 1095,
      colorValue: 9
    },{
      name: ' looted',
      value: 693,
      colorValue: 10
    },{
      name: 'nigerias',
      value: 684,
      colorValue: 11
    },{
      name: 'shared',
      value: 683,
      colorValue: 12
    },{
      name: 'party',
      value: 479,
      colorValue: 13
    },{
      name: 'usembassyabuja',
      value: 472,
      colorValue: 14
    },{
      name: 'apc',
      value: 298,
      colorValue: 15
    },{
      name: 'asiwaju',
      value: 295,
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
    data: [42],
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
    data: [73],
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
      value: 9017,
      colorValue: 1
    }, {
      name: 'tco',
      value: 3001,
      colorValue: 2
    }, {
      name: 'president',
      value: 2970,
      colorValue: 3
    }, {
      name: 'obi',
      value: 1436,
      colorValue: 4
    }, {
      name: 'nigerias',
      value: 1359,
      colorValue: 5
    }, {
      name: 'problems',
      value: 1358,
      colorValue: 6
    }, {
      name: 'pdps',
      value: 1331,
      colorValue: 7
    },{
      name: 'atiku',
      value: 1136,
      colorValue: 8
    },{
      name: 'election',
      value: 915,
      colorValue: 9
    },{
      name: 'campaign',
      value: 899,
      colorValue: 10
    },{
      name: 'loyal',
      value: 890,
      colorValue: 10
    },{
      name: 'faithful',
      value: 885,
      colorValue: 11
    },{
      name: ' honest',
      value: 854,
      colorValue: 12
    },{
      name: ' officialpdpnig',
      value: 728,
      colorValue: 13
    },{
      name: 'obasanjo',
      value: 344,
      colorValue: 14
    },{
      name: 'integrity',
      value: 236,
      colorValue: 15
    }]
  }],
  title: {
    text: 'Top words appearance APC on twitter page'
  }
});



