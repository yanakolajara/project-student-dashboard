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

    console.log(studentList)
    return(
        <>
            <p>TEST</p>
            {studentList}
        </>
    )
}

export const cohortStudents = (cohort) => {

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