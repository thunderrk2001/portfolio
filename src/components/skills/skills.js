import * as echarts from 'echarts';
import { useEffect } from 'react';
import "./skills.css"
import pieSkillsOptions from '../../constants/pieskills.json'

export default () => {
    useEffect(() => {
        setTimeout(() => {
            console.log("started binding...");

            var dom = document.getElementById('skills');
            var myChart = echarts.init(dom, null, {
                renderer: 'canvas',
                useDirtyRect: false
            });
            var app = {};

            var option=pieSkillsOptions;

            

            if (option && typeof option === 'object') {
                myChart.setOption(option);
            }

            window.addEventListener('resize', myChart.resize);

        }, 4000)
        // Create the echarts instance

    }, [])
    return (
        <div id='skills'>
            skils page
        </div>
    )
}