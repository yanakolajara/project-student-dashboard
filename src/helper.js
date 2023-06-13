import data from './data/data.json'
import StudentCard from './studentCard.js'


export const students = () => {
    const studentList = data.map((student) => {
        return <StudentCard
            name = {student.names}
            img = {student.profilePhoto}
            dob = {student.dob}
            email = {student.username}
            certifications = {student.certifications}
            codewars = {student.codewars}/>
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
        const graduateTrack = document.createElement('p')
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
        //* Student graduate track
        graduateTrack.setAttribute('class', 'graduateTrack')
        if(student.certifications.resume && student.certifications.linkedin && student.certifications.github && student.certifications.mockInterview && student.codewars.current.total > 600){
            graduateTrack.appendChild(document.createTextNode('On Track to Graduate'))
        }
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
        studentInfo.appendChild(graduateTrack)
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
    const studentObj = data.filter((x) => x.username === student.querySelector('.studentEmail').innerText)[0]
    console.log(studentObj)
    //TODO: Find student with email and create an element for it
    if(student.querySelector('button').innerText === 'Show more...'){
        student.querySelector('button').innerHTML = 'Show less'
        const infoDiv = document.createElement('div')
        const codeWars = document.createElement('div')
        const scores = document.createElement('div')
        const certifications = document.createElement('div')

        //* Codewars ----------------------
        codeWars.setAttribute('class', 'codeWars')
        const codeWarsTitle = document.createElement('p')
        codeWarsTitle.setAttribute('class', 'infoTitle')
        codeWarsTitle.appendChild(document.createTextNode('Codewars: '))
        codeWars.appendChild(codeWarsTitle)
        const codeWarsCurrentTotal = document.createElement('p')
        codeWarsCurrentTotal.appendChild(document.createTextNode(`Current total: ${studentObj.codewars.current.total}`))
        codeWars.appendChild(codeWarsCurrentTotal)
        const codeWarsLastWeek = document.createElement('p')
        codeWarsLastWeek.appendChild(document.createTextNode(`Last week: ${studentObj.codewars.current.lastWeek}`))
        codeWars.appendChild(codeWarsLastWeek)
        const codeWarsGoal = document.createElement('p')
        codeWarsGoal.appendChild(document.createTextNode(`Goal: ${studentObj.codewars.goal.total}`))
        codeWars.appendChild(codeWarsGoal)
        //* Scores ----------------------
        //? Green: 100^ Yellow: 50 - 99 Red: 49<
        scores.setAttribute('class', 'scores')
        const scoreTitle = document.createElement('p')
        scoreTitle.setAttribute('class', 'infoTitle')
        scoreTitle.appendChild(document.createTextNode('Scores: '))
        scores.appendChild(scoreTitle)
        const assignmentsScore = document.createElement('p')
        if(studentObj.cohort.scores.assignments <= .49){
            assignmentsScore.setAttribute('class', 'redScore')
        }else if(studentObj.cohort.scores.assignments >= .50 && studentObj.cohort.scores.assignments <= .99){
            assignmentsScore.setAttribute('class', 'yellowScore')
        }else{
            assignmentsScore.setAttribute('class', 'greenScore')
        }
        assignmentsScore.appendChild(document.createTextNode(`Assignments: ${studentObj.cohort.scores.assignments * 100}%`))
        scores.appendChild(assignmentsScore)
        // Assignments: 32%
        // Projects: 45%
        // Assessments: 67%
        //* Certifications ----------------------
        // todo: if/else score is more than: change div type
        // Resume: check
        // Linkedin: x mark
        // Mock interview: check
        // Github: x mark
        //* General info div -----------------------
        infoDiv.setAttribute('class', 'infoDiv')
        infoDiv.appendChild(codeWars)   
        infoDiv.appendChild(scores)
        student.parentNode.appendChild(infoDiv)
    }else{
        document.querySelector('.infoDiv').remove()
        student.querySelector('button').innerHTML = 'Show more...'
    }
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