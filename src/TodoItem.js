
function TodoItem(props) {
  return (
    <li>
      <span
        onClick={props.onComplete}>
        V
      </span>
      <p>{props.text}</p>
      <span
        onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };