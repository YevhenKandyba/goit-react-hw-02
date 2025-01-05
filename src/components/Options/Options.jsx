import stl from "./Options.module.css";

const Options = ({ onLeaveFeedback, onResetFeedback, totalFeedback }) => (
  <div className={stl.buttons}>
    <button onClick={() => onLeaveFeedback("good")}>Good</button>
    <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
    <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
    {totalFeedback > 0 && <button onClick={onResetFeedback}>Reset</button>}
  </div>
);

export default Options;
