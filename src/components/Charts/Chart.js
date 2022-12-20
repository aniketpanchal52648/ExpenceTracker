import ChartBar from "./ChartBar";
import './chart.css';
function Chart(props){
    // console.log(props.dataPoints)
    const d = props.dataPoints.map(data => data.value);
    // console.log(d);
    const maxVal = Math.max(...d);
    // console.log(ma   xVal);

    return <div className="chart">
        {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} currValue={dataPoint.value} label={dataPoint.label} max={maxVal}  />)}
           </div>
}
export default Chart;