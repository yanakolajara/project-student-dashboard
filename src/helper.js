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
    document.querySelector('.cohortSelected').innerText = cohort.innerText;
    let arrayOfStudents = []
    let studentCount = 0
    if(cohort.innerText === 'All Students'){
        arrayOfStudents = data
    }else{
        arrayOfStudents = data.filter((student) => cohort.innerText.split(' ').join('') === student.cohort.cohortCode)
    }
    const allStudentsDiv = document.querySelector('.allStudents')
    allStudentsDiv.innerHTML = ''

    //* Total students
    const totalStudents = document.createElement('p')
    totalStudents.setAttribute('class', 'totalStudents')
    totalStudents.appendChild(document.createTextNode(`Total students: ${arrayOfStudents.length}`))
    allStudentsDiv.appendChild(totalStudents)

    const studentList = arrayOfStudents.forEach((student) => {
        const studentImg = document.createElement('img')
        const studentName = document.createElement('p')
        const studentDOB = document.createElement('p')
        const studentEmail = document.createElement('p')
        const text1 = document.createElement('u')
        const text2 = document.createElement('u')
        const line = document.createElement('hr')
        const button = document.createElement('button')
        studentCount += 1

        //* Student Image
        studentImg.setAttribute('class', 'studentImg')
        studentImg.setAttribute('src', `${student.profilePhoto}`)
        //* Student Name
        studentName.setAttribute('class', 'studentName')
        studentName.appendChild(document.createTextNode(`${student.names.preferredName} ${student.names.middleName[0]}. ${student.names.surname}`))
        //* Student DOB
        studentDOB.setAttribute('class', 'studentDOB')
        studentDOB.appendChild(document.createTextNode(`${student.dob}`))
        //* Student email
        studentEmail.setAttribute('class', 'studentEmail')
        studentEmail.appendChild(document.createTextNode(`${student.email}`))
        //* Student more info button
        button.setAttribute('onClick', '{(event) => moreInfo(event.target.parentNode)')
        button.appendChild(document.createTextNode('Show more...'))
        //* Student text 1
        text1.setAttribute('class', 'studentText')
        text1.appendChild(document.createTextNode('Date of birth'))
        //* Student text 2
        text2.setAttribute('class', 'studentText')
        text2.appendChild(document.createTextNode('Username'))
        //* Student info div
        const studentInfo = document.createElement('div')
        studentInfo.setAttribute('class', 'studentInfo')
        studentInfo.appendChild(studentName)
        studentInfo.appendChild(line)
        studentInfo.appendChild(text1)
        studentInfo.appendChild(studentDOB)
        studentInfo.appendChild(line)
        studentInfo.appendChild(text2)
        studentInfo.appendChild(studentEmail)
        studentInfo.appendChild(button)
        //* Student card
        const studentCard = document.createElement('div')
        studentCard.setAttribute('class', 'studentCard')
        studentCard.appendChild(studentImg)
        studentCard.appendChild(studentInfo)

        allStudentsDiv.appendChild(studentCard)
    })



    //todo add function that filters students in x cohort
    //todo Change main's title textNode when cohort is selected
}

//! FINISH
export const moreInfo = (student) => {
    console.log(student)
    //todo change button textNode
    //todo Add logic to button textNode
    //* Include Codewars, scores (%), and certifications (check or x icons)
    //todo codeWars percentage color: 100: green, 50-100 yellow, 0-50 red.
    //todo codeWars emoji depending on percentage range as the one above
}


export const addNote = (event) => {
    const commenter = event.target.parentNode[0].value
    const comment = event.target.parentNode[1].value
    const allNotes = document.querySelector('.allNotes')
    const note = document.createElement('li')
    note.appendChild(document.createTextNode(`${commenter} says, "${comment}"`))
    allNotes.appendChild(note)
    return;
}