import React, { createContext, useEffect, useState } from 'react'
import { getStudentLocal, removeStudentLocal } from '../helper/auth';

export const AuthContext = createContext();

const AuthenContex = ({children}) => {
   const [student, setStudent] = useState(null);

  useEffect(() => {
    const data = getStudentLocal();
    setStudent(data);
  }, []);

  const login = (studentData) => {
    setStudent(studentData);
  };

  const logout = () => {
    removeStudentLocal // change key if yours is different
    setStudent(null);
  };

  return (
    <AuthContext.Provider value={{ student, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthenContex