import "./ChartBar.css";
const ChartBar = (props) => {
  console.log(props);
  let chartHeight = "0%";
  if (props.maxValue > 0) {
    chartHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: chartHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
