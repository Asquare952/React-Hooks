import { useState } from "react";
import Styles from "./DropDownToggle.module.css";
const DropDown = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggler = () => {
    setToggle(!toggle);
  };
  return (
    <div className={Styles.container}>
      {toggle ? (
        <strong  onClick={handleToggler}>How do i change my password ?</strong>
      ) : (
        <strong onClick={handleToggler}>How do i change my password ?</strong>
      )}

      {toggle ? (
        <p className={Styles.toggledInfo}>
          Click "Forgot password" from the login page or "Change password" from
          your profile page. A reset link will be emailed to you.
        </p>
      ) : null}
      <hr />
    </div>
  );
};

export default DropDown;
