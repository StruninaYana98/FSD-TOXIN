import '../../node_modules/zingchart/zingchart.min.js';
let chartConfig = {
    gui: {
        contextMenu: {       
          button: {         
            visible: false
          }
        }         
      },
    graphset: [
      {
        type: 'ring',
        plot: {
          borderWidth: '1px',
          valueBox: [
            {
              type: 'none',
            },
          ],
          slice: '91%'
        },
        scaleR: {
          refAngle: 270
        },
        series: [
          {
            text: 'Разочарован',
            values: [0],
            gradientColors: '#919191 #3D4975',
            gradientStops: '0.9',
            fillType: 'linear'
          },
          {
            text: 'Удовлетворительно',
            values: [130/2],
            gradientColors: '#BC9CFF #8BA4F9',
            gradientStops: '0.87',
            fillType: 'linear'
          },
          {
            text: 'Хорошо',
            values: [130/2],
            gradientColors: '#6FCF97 #66D2EA ',
            gradientStops:'0.87',
            fillType: 'linear'
          },
          {
            text: 'Великолепно',
            values: [130], 
           gradientColors: '#FFE39C #FFBA9C',
            gradientStops: '0.2',
            fillType: 'linear',
            lineWidth: '10px',
           
          }
        ]
      }
    ]
  };
  
  zingchart.render({
    id: 'diagram',
    data: chartConfig,
    height: '100%',
    width: '100%',
  });