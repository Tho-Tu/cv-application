export default function Example({ exampleInfo }) {
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
}
