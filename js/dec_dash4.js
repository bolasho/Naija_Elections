Highcharts.chart('atiku_ass_word', {
  
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
      name: 'loss',
      value: 0.35,
      colorValue: 0.35
    }, {
      name: 'support',
      value: 0.29,
      colorValue: 0.29
    }, {
      name: 'choice',
      value: 0.29,
      colorValue: 0.29
    }, {
      name: 'collected',
      value: 0.29,
      colorValue: 0.29
    }, {
      name: 'delegates',
      value: 0.29,
      colorValue: 0.29
    }, {
      name: 'dollars',
      value: 0.29,
      colorValue: 0.29
    }, {
      name: 'deeply',
      value: 0.28,
      colorValue: 0.28
    },{
      name: 'saddened',
      value: 0.28,
      colorValue: 0.28
    },{
      name: 'soldiers',
      value: 0.26,
      colorValue: 0.26
    }]
  }],
  title: {
    text: 'Associated words with atiku'
  }
});


Highcharts.chart('atikuVotersSentiments', {

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
    text: 'Voters Approval ratings of Atiku'
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
    name: 'Atiku',
    data: [51],
    tooltip: {
      valueSuffix: '%'
    }
  }]
});

Highcharts.chart('buhariVotersSentiments', {

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
    text: 'Voters Approval ratings of  Buhari'
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
    name: 'Buhari',
    data: [52],
    tooltip: {
      valueSuffix: '%'
    }
  }]
});
Highcharts.chart('buhari_ass_words', {
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
      name: 'bvn',
      value: 0.52,
      colorValue: 0.52
    }, {
      name: 'tsa',
      value: 0.52,
      colorValue: 0.52
    }, {
      name: 'claiming',
      value: 0.51,
      colorValue: 0.51
    }, {
      name: 'meaning',
      value: 0.51,
      colorValue: 0.51
    }, {
      name: 'look',
      value: 0.50,
      colorValue: 0.50
    }, {
      name: 'ebonyi',
      value: 0.32,
      colorValue: 0.32
    }, {
      name: 'umahi',
      value: 0.32,
      colorValue: 0.32
    },{
      name: 'lying',
      value: 0.31,
      colorValue: 0.31
    }
     ,{
      name: 'rest',
      value: 0.30,
      colorValue: 0.30
    }
    ,{
      name: 'video',
      value: 0.27,
      colorValue: 0.27
    }]
  }],
  title: {
    text: 'Associated words with buhari'
  }
});



