import React, {Component} from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';

class EchartsTest extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['学习', '娱乐', '休息']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {show: false},
                    data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00',
                        '14:00', '16:00', '18:00', '20:00', '22:00', '24:00']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '学习',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data: [0, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
                },
                {
                    name: '娱乐',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data: [0, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
                },
                {
                    name: '休息',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data: [120, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
                }
            ]
        });
    }

    render() {
        return (
            <div id="main" style={{width: 540, height: 250}}></div>
        );
    }
}

export default EchartsTest;