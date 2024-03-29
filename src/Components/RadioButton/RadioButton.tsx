import "./RadioButton.scss";


type RadioButtonProps = {
  label: string;
  value: any;
  groupName: string;
}

const RadioButton = ({label, value, groupName}: RadioButtonProps) => {
  return(
    <div className="radio-button">
      <input className="radio-button__input" type="radio" id={label} name={groupName} value={value}/>
      <label className="radio-button__label" htmlFor={label}>{label}</label>

    </div>
) };

export default RadioButton;
