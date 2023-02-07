const element = (
  // Write your code here.
  <div className="congrats-card-bg-container">
    <h1 className="congrats-card-heading">Congratulations</h1>
    <div className="greeting-container">
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
      <h1 className="card-heading">Kiran V</h1>
      <p className="card-para">
        Vishnu Institute Of Computer Education and Technology, Bhimavaram.
      </p>
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
