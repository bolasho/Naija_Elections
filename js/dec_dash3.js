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
      value: 16764,
      colorValue: 1
    }, {
      name: 'atikus',
      value: 6046,
      colorValue: 2
    }, {
      name: 'mbuhari',
      value: 5517,
      colorValue: 3
    }, {
      name: 'agenda',
      value: 2688,
      colorValue: 4
    }, {
      name: 'renoomokri',
      value: 2622,
      colorValue: 5
    }, {
      name: 'bukolasaraki  2441',
      value: 2441,
      colorValue: 6
    }, {
      name: 'president  2361',
      value: 2361,
      colorValue: 7
    },{
      name: 'government',
      value: 1534,
      colorValue: 8
    },{
      name: 'national',
      value: 1384,
      colorValue: 9
    },{
      name: 'present',
      value: 1343,
      colorValue: 10
    },{
      name: 'removing',
      value: 1333,
      colorValue: 11
    },{
      name: 'patriots',
      value: 1302,
      colorValue: 12
    },{
      name: 'involve',
      value: 1294,
      colorValue: 13
    },{
      name: 'campaign',
      value: 1160,
      colorValue: 14
    },{
      name: 'profosinbajo',
      value: 1159,
      colorValue:15
    },{
      name: 'presidential',
      value: 1113,
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
    data: [50],
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
    data: [51],
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
      value: 14818,
      colorValue: 1
    }, {
      name: 'mbuhari',
      value: 6890,
      colorValue: 2
    }, {
      name: 'president',
      value: 1990,
      colorValue: 3
    }, {
      name: 'officialpdpnig',
      value: 1606,
      colorValue: 4
    }, {
      name: 'atiku  1500',
      value: 1500,
      colorValue: 5
    }, {
      name: 'renoomokri',
      value: 1388,
      colorValue: 6
    }, {
      name: 'state',
      value: 1178,
      colorValue: 7
    },{
      name: 'apc',
      value: 1098,
      colorValue: 8
    },{
      name: ' profosinbajo',
      value: 1086,
      colorValue: 9
    },{
      name: 'stadium',
      value: 846,
      colorValue: 10
    },{
      name: 'fkeyamo',
      value: 771,
      colorValue: 10
    },{
      name: 'wrong',
      value: 694,
      colorValue: 11
    },{
      name: 'opinion',
      value: 657,
      colorValue: 12
    },{
      name: 'akwaibom',
      value: 648,
      colorValue: 13
    },{
      name: 'ogundamisi',
      value: 543,
      colorValue: 14
    },{
      name: 'bashirahmaad',
      value: 516,
      colorValue: 15
    }]
  }],
  title: {
    text: 'Top words appearance APC on twitter page'
  }
});



