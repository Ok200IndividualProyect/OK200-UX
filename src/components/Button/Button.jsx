import "./button.css";

function Button({ type = "submit", children, onClick }) {
  return (
    <button type={type} onClick={onClick} className="custom-button">
      {children}
    </button>
  );
}

export default Button;