import { useState } from "react";
const ChangeColor = () => {
  const [backGroundColor, setBackGroudColor] = useState("Red");

  const handleBackGroundColor = () => {
    setBackGroudColor("Blue");
  };

  const [show, setShow] = useState(false);

  const handleShowList = () => {
    setShow(!show);
  };

  return (
    <div>
      <h1>Hello React Hooks</h1>
      <h2>ChangeColor</h2>
      <p>ugsdkiulhfivhihr {backGroundColor}</p>
      <button onClick={handleBackGroundColor}>Change</button>

      <div>
        <h2>List of present student</h2>
        {show ? (
          <button onClick={handleShowList}>Hide</button>
        ) : (
          <button onClick={handleShowList}>Show</button>
        )}

        {show ? (
          <ul>
            <li>Abdul Afeez</li>
            <li>Alimi</li>
            <li>Khalid</li>
            <li>Temitope</li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default ChangeColor;
