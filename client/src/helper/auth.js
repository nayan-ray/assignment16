export const setStudentLocal =(user)=>{
    localStorage.setItem('student', JSON.stringify(user));
}

export const getStudentLocal =()=>{
    const studentData = JSON.parse(localStorage.getItem('student'));
    return studentData;
}

export const removeStudentLocal = ()=>{
    localStorage.removeItem('student');
}