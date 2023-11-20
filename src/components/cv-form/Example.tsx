interface ExampleProps {
  exampleInfo: { handleClearCv: () => void; handleLoadExample: () => void };
}

const Example: React.FC<ExampleProps> = ({ exampleInfo }) => {
  return (
    <div className="example">
      <button
        type="button"
        className="clear-cv"
        onClick={exampleInfo.handleClearCv}
      >
        🗑️ Clear CV
      </button>
      <button type="button" onClick={exampleInfo.handleLoadExample}>
        Load Example
      </button>
    </div>
  );
};

export default Example;
