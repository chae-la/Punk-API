import "./RadioButton.scss";


type RadioButtonProps = {
  label: string;
  value: any;
  groupName: string;
}

const RadioButton = ({label, value, groupName}: RadioButtonProps) => {
  return(
    <div>
      <input type="radio" id={label} name={groupName} value={value}/>
      <label htmlFor={label}>{label}</label>

    </div>
) };

export default RadioButton;
