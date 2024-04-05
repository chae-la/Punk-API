import "./Clear.scss";
import Button from "../Button/Button";

const Clear = () => {
    const handleReset = () => {
        window.location.reload()
    }
return(
    <div className="clear-button" onClick={handleReset}>
        <Button label="Clear " />
    </div>
)
}

export default Clear;