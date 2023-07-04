import React, { useState } from 'react';

function BucketForm(props) {
  const [input, setInput] = useState('');
  let [eagerness, setEagerness] = useState('');

  const eagernessLevel = ['high', 'medium', 'low']

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eagerness) {
      eagerness = 'low';
    }

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      eagerness: eagerness,
    });

    setInput('');
    setEagerness('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Let's find some trends"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Choose Timeframe'}
          </button>
          <div className="dropdown-content">
            {/* would be good to add choose "this date" between "this date" . Could be easy with an API URL */}
            <p onClick={() => setEagerness(eagernessLevel[0])}>1 Year</p>
            <p onClick={() => setEagerness(eagernessLevel[1])}>2 Weeks</p>
            <p onClick={() => setEagerness(eagernessLevel[2])}>1 Day</p>
          </div>
        </div>
        <button className="bucket-button">I'm a button</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Choose Timeframe'}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setEagerness(eagernessLevel[0])}>1 Year</p>
            <p onClick={() => setEagerness(eagernessLevel[1])}>2 Weeks</p>
            <p onClick={() => setEagerness(eagernessLevel[2])}>1 Day</p>
          </div>
        </div>
        <button className="bucket-button">Update</button>
        {/* would be cool to add a save button (could it make and save a new tab) */}
      </form>
    </div>
  );
}

export default BucketForm;
