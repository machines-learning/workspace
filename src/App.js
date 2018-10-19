import React, {Component} from 'react';
import EchartsTest from './Charts.js';
import Line from './statistics.js';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div style={{
                    color: 'black',
                    height: '100%',
                    width: '100px',
                    'background-color': 'blue',
                    position: 'fixed',
                    'z-index': 1,
                    left: 0,
                    'padding-top': '60px'
                }}>
                    <nav>
                        <div>
                            首页
                        </div>
                        <div>
                            截止日期
                        </div>
                        <div>
                            时间表
                        </div>
                        <div>
                            课程安排
                        </div>
                        <div>
                            阅读计划
                        </div>
                    </nav>
                </div>
                <div style={{
                    'margin-left': '100px',
                    color: 'black',
                    height: '100%',
                    width: '400px',
                    'background-color': 'green',
                    position: 'fixed',
                    'z-index': 1,
                    left: 0,
                    'padding-top': '60px'
                }}>
                    <div style={{
                        'backgroud-color': 'yellow',
                        width: '100%'
                    }}>
                        <h2>deadline 今日</h2>
                        <ul>
                            <li>Machine Learning Homework</li>
                            <li>Deep Learning Homework</li>
                            <li>Computer Vision Homework</li>
                        </ul>
                    </div>
                    <div style={{
                        'backgroud-color': 'yellow',
                        width: '100%'
                    }}>
                        <h2>deadline 本周</h2>
                        <ul>
                            <li>Machine Learning Homework</li>
                            <li>Deep Learning Homework</li>
                            <li>Computer Vision Homework</li>
                        </ul>
                    </div>
                    <div style={{
                        'backgroud-color': 'yellow',
                        width: '100%'
                    }}>
                        <h2>课程 今日</h2>
                        <ul>
                            <li>Machine Learning
                                <button>准时参加</button>
                                <button>临时取消</button>
                                <button>改变时间</button>
                            </li>
                            <li>Deep Learning
                                <button>准时参加</button>
                                <button>临时取消</button>
                                <button>改变时间</button>
                            </li>
                            <li>Computer Vision
                                <button>准时参加</button>
                                <button>临时取消</button>
                                <button>改变时间</button>
                            </li>
                        </ul>
                    </div>
                    <div style={{
                        'backgroud-color': 'yellow',
                        width: '100%'
                    }}>
                        <h2>讲座 今日</h2>
                        <ul>
                            <li>Machine Learning
                                <button>准时参加</button>
                            </li>
                            <li>Deep Learning
                                <button>准时参加</button>
                            </li>
                            <li>Computer Vision
                                <button>准时参加</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{
                    'margin-left': '500px',
                    color: 'black',
                    height: '100%',
                    width: '400px',
                    'background-color': 'gray',
                    position: 'fixed',
                    'z-index': 1,
                    left: 0,
                    'padding-top': '60px'
                }}>
                    <div>
                        <h2>课程进度</h2>
                        <div>
                            <span>Machine Learning</span>
                            <progress value="80" max="100" className="hot"/>
                        </div>
                        <div>
                            <span>Deep Learning</span>
                            <progress value="50" max="100" className="hot"/>
                        </div>
                        <div>
                            <span>Computer Vision</span>
                            <progress value="70" max="100" className="hot"/>
                        </div>
                    </div>
                    <div>
                        <h2>阅读进度</h2>
                        <div>
                            <span>Machine Learning</span>
                            <progress value="80" max="100" className="hot"/>
                        </div>
                        <div>
                            <span>Deep Learning</span>
                            <progress value="50" max="100" className="hot"/>
                        </div>
                        <div>
                            <span>Computer Vision</span>
                            <progress value="70" max="100" className="hot"/>
                        </div>
                    </div>
                    <div>
                        <h2>项目进度</h2>
                        <div>
                            <span>Machine Learning</span>
                            <progress value="80" max="100" className="hot"/>
                        </div>
                        <div>
                            <span>Deep Learning</span>
                            <progress value="50" max="100" className="hot"/>
                        </div>
                        <div>
                            <span>Computer Vision</span>
                            <progress value="70" max="100" className="hot"/>
                        </div>
                    </div>
                </div>
                <div style={{
                    'margin-left': '900px',
                    color: 'black',
                    height: '100%',
                    width: '540px',
                    'background-color': 'yellow',
                    position: 'fixed',
                    'z-index': 1,
                    left: 0,
                    'padding-top': '60px'
                }}>
                    <div>
                        <h2>时间记录 今日 <button>+</button></h2>
                        <EchartsTest></EchartsTest>
                        <Line></Line>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;