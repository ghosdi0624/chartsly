/**
 * Class to test Relative Strength Index chart
 */
Ext.define("KS.view.stockcharts.indicators.rsi.Basic", {
    extend: 'Ext.Panel',
    xtype: 'basic-rsi',
    requires: [
        'Ext.chart.axis.Time',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Chartsly.chart.indicator.RelativeStrengthIndex',
        'Chartsly.model.Stock', 
        'Chartsly.store.Apple'
    ],
    exampleDescription: [
        'A combination to a CandleStick chart and Relative Strength Index (RSI) indicator'
    ],
    config: {
        items: [
            {
                xclass: 'Chartsly.chart.indicator.RelativeStrengthIndex',
                height: 250,
                insetPadding: {
                    top: 10,
                    right: 10,
                    left: 10,
                    bottom: 0
                },
                background: 'white',
                series: [
                    {
                        store: Ext.create('Chartsly.store.Apple', {}), //'Apple',
                        type: 'relativestrengthindex',
                        xField: 'date',
                        yField: 'rsi',
                        closeField: "close",
                        overboughtLevel: 80,
                        oversoldLevel: 30,
                        lookBackPeriod: 14,  //in days
                        style: {
                            stroke: '#85bedb',
                            fill: '#85bedb',
                            miterLimit: 1
                        }
                    }
                ],
                axes: [
                    {
                        type: 'numeric',
                        position: 'left',
                        style: {
                            axisLine: false
                        }
                    },
                    {
                        type: 'time',
                        position: 'bottom',
                        fields: ['date'],
                        style: {
                            strokeStyle: '#666',
                            estStepSize: 150
                        },
                        dateFormat: 'Y',
                        segmenter: {
                            type: 'time',
                            step: {
                                unit: 'y',
                                step: 1
                            }
                        },
                        label: {
                            fontSize: 10,
                            fillStyle: '#666'
                        }
                    }
                ]
            }
        ]
    }
});
