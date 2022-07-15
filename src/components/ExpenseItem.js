import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US', {month:'long'})
  const day = props.date.toLocaleString('en-US', {day:'2-digit'})
  const year = props.date.getFullYear('en-US', {})
  return (
    <div className="expense-item">
      <div>{month + ' ' + day + ', ' + year}</div>
      <div className="expense-item_descrpition">
        <h2>{props.title}</h2>
        <div className="expense-item_price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;