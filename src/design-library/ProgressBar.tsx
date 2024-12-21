interface ProgressBarProps {
  /** A number between 0-100 */
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  if (progress > 100) {
    progress = 100;
  }
  if (progress < 0) {
    progress = 0;
  }
  return (
    <div className="component-container" style={{ flexDirection: "column" }}>
      <p>Progress Bar</p>
      <div
        className="progress"
        style={{ display: "flex", position: "relative" }}
      >
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: "rebeccapurple",
            height: "100%",
            position: "absolute",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            border: "none",
          }}
          className="progress"
        >
          <p
            style={{
              color: "white",
              display: "inline",
            }}
          >{`${progress}%`}</p>
        </div>
      </div>
    </div>
  );
};
