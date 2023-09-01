import "../globals.css";

const loading = () => {
  return (
    <div>
      <div className="lds-circle">
        <div></div>
      </div>
      <br />
      <p className="loader">artificial loader...</p>
    </div>
  );
};

export default loading;
