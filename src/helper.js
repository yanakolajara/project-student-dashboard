import data from './data/data.json'
import StudentCard from './studentCard.js'

export const students = () => {
    const studentList = data.map((student) => {
        return <StudentCard
            name = {student.names}
            img = {student.profilePhoto}
            dob = {student.dob}
            email = {student.username}/>
    })
    const totalStudents = <p class="totalStudents">Total students: {studentList.length}</p>
    return(
        <>
            {totalStudents}
            {studentList}
        </>
    )
}

export const cohortCount = () => {
    const studentCount = document.querySelector('main').children.length - 2
    return studentCount;
}

export const cohortStudents = (cohort) => {
    //todo add function that filters students in x cohort
}
//! Add 'event' listener and terget the value
//! Change main's title textNode when cohort is selected

export const moreInfo = () => {

}
//! change button textNode
//! Add logic to button textNode
//* Include Codewars, scores (%), and certifications (check or x icons)
//? codeWars percentage color: 100: green, 50-100 yellow, 0-50 red.
//? codeWars emoji depending on percentage range as the one above


export const addNote = (event) => {
    //? This console log selects the value of the commenter name
    console.log(event.target.parentNode[0].value)
    
    //* Return a Li:`'name R.' says, "Bla"`
    //* Inputs cleared after submit
    return
}