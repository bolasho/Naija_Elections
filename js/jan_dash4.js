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
      name: 'hilaryuba',
      value: 0.27,
      colorValue: 0.27
    }, {
      name: 'diabolical',
      value: 0.20,
      colorValue: 0.20
    }, {
      name: 'gbagam',
      value: 0.20,
      colorValue: 0.20
    }, {
      name: 'greedy',
      value: 0.19,
      colorValue: 0.19
    }, {
      name: 'lazy',
      value: 0.19,
      colorValue: 0.19
    }, {
      name: 'encountered',
      value: 0.17,
      colorValue: 0.17
    }, {
      name: 'alma',
      value: 0.17,
      colorValue: 0.17
    },{
      name: 'mater',
      value: 0.17,
      colorValue: 0.17
    },{
      name: 'mentally',
      value: 0.16,
      colorValue: 0.16
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
    data: [62],
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
    data: [49],
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
      name: 'crowd',
      value: 0.47,
      colorValue: 0.47
    }, {
      name: 'address',
      value: 0.46,
      colorValue: 0.46
    }, {
      name: 'news',
      value: 0.39,
      colorValue: 0.39
    }, {
      name: 'failure',
      value: 0.30,
      colorValue: 0.30
    }, {
      name: 'admonish',
      value: 0.28,
      colorValue: 0.28
    }, {
      name: 'enemy',
      value: 0.27,
      colorValue: 0.27
    }, {
      name: 'trouble',
      value: 0.27,
      colorValue: 0.27
    },{
      name: 'breaking',
      value: 0.27,
      colorValue: 0.27
    }
     ,{
      name: 'direct',
      value: 0.26,
      colorValue: 0.26
    }
    ,{
      name: 'replace',
      value: 0.26,
      colorValue: 0.26
    }]
  }],
  title: {
    text: 'Associated words with buhari'
  }
});



