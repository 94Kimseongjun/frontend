const Rules = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Rules</h5>
        <div style={{ width: '100%', height: '1000px' }}>
          <iframe
            src="/Rules.pdf"
            title="Rules PDF"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Rules;
