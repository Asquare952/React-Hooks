import { useState } from "react";
import Data from "../../studentsData";
import Styles from "./Students.module.css";
const StudentsRecords = () => {
  const [info, setInfo] = useState(Data);
  // Function to delete Students Data individually
  const deleteStudentsData = (id) => {
    const deleteData = info.filter((info) => info.id !== id);
    setInfo(deleteData);
  };
  //  Function to Delete all Data
  const deletAllData = () => {
    setInfo([]);
  }
  return (
    <>
      <div className={Styles.Container}>
        {info.map((Students) => {
          const { id } = Students;
          return (
            <div className={Styles.content} key={id}>
              <p>
                <strong>First Name:</strong>
                {Students.firstName}
              </p>
              <p>
                <strong>Last Name:</strong>
                {Students.lastName}
              </p>
              <p>
                <strong>Phone Number:</strong>
                {Students.phoneNumber}
              </p>
              <p>
                <strong>Email Address:</strong>
                {Students.email}
              </p>
              <p>
                <strong>State Of Origin:</strong>
                {Students.stateOfOrigin}
              </p>
              <p>
                <strong>Sex:</strong>
                {Students.sex}
              </p>
              <p>
                <strong>Course Study:</strong>
                {Students.courseStudy}
              </p>
              <p>
                <strong>Years Of Study:</strong>
                {Students.yearsOfStudy}
              </p>
              <div className={Styles.btn}>
                <button className={Styles.btnSubmit}>Submit</button>
                <button
                  className={Styles.btnDelete}
                  onClick={() => deleteStudentsData(id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button className={Styles.btnDeleteAll} onClick={() => deletAllData()}>
        Delete All Data
      </button>
    </>
  );
};

export default StudentsRecords;
