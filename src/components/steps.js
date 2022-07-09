export default function Steps({ activeStep, totalSteps }) {
  const activeWidth = 100 / (totalSteps - 1);

  return (
    <div className="step-container">
      {new Array(totalSteps).fill(1).map((value, idx) => (
        <div className="step-group-container">
          <div className={`step ${activeStep > idx ? "active" : null}`}>
            {idx + 1}
          </div>
        </div>
      ))}
      <div className="step-progress-line"></div>
      <div
        className="step-progress-line-active"
        style={{
          width: `calc(${activeWidth * (activeStep - 1) + activeWidth / 2}% )`,
        }}
      ></div>
    </div>
  );
}
