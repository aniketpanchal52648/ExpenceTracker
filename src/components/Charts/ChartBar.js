import './chartBar.css';

function ChartBar(props) {
    
    let dataFillVal = '0%';
    
    if (props.max > 0) {
        dataFillVal = Math.round((props.currValue / props.max)*100) + '%';

    }

    return (<div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height:dataFillVal}}></div>
        </div>
        <div className='chart-bar__label'>{props.label}</div>

    </div>)

}
export default ChartBar;