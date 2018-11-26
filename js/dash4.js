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
      name: 'sold',
      value: 0.31,
      colorValue: 0.31
    }, {
      name: 'approval',
      value: 0.26,
      colorValue: 0.26
    }, {
      name: 'faro',
      value: 0.25,
      colorValue: 0.25
    }, {
      name: 'nationwide',
      value: 0.25,
      colorValue: 0.25
    }, {
      name: 'products',
      value: 0.25,
      colorValue: 0.25
    }, {
      name: 'tuition',
      value: 0.25,
      colorValue: 0.25
    }, {
      name: 'company',
      value: 0.23,
      colorValue: 0.23
    },{
      name: 'sell',
      value: 0.21,
      colorValue: 0.21
    },{
      name: 'mrabusidiq',
      value: 0.21,
      colorValue: 0.21
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
    data: [47],
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
    data: [47],
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
      name: 'muhammad',
      value: 0.58,
      colorValue: 0.58
    }, {
      name: 'retweet',
      value: 0.58,
      colorValue: 0.58
    }, {
      name: 'vote',
      value: 0.56,
      colorValue: 0.56
    }, {
      name: 'alhajieemzet',
      value: 0.55,
      colorValue: 0.55
    }, {
      name: 'muhammadu',
      value: 0.38,
      colorValue: 0.38
    }, {
      name: 'president',
      value: 0.35,
      colorValue: 0.35
    }, {
      name: 'citizens',
      value: 0.30,
      colorValue: 0.3
    },{
      name: 'fleeing',
      value: 0.29,
      colorValue: 0.29
    },{
      name: 'hear',
      value: 0.27,
      colorValue: 0.27
    }]
  }],
  title: {
    text: 'Associated words with buhari'
  }
});



