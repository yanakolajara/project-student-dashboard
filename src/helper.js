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
            codewars = {student.codewars}
            id = {student.id}/>
    })
    const totalStudents = <p class="totalStudents">Total students: {studentList.length}</p>
    return(
        <>
            {totalStudents}
            {studentList}
        </>
    )
}

export const cohortStudents = (cohort) => {
    document.querySelector('.cohortSelected').innerText = cohort.innerText;
    const allStudents = document.querySelector('.allStudents').children
    let studentCount = 0
    for(let x of allStudents){
        if(x.innerText.split(' ')[0] !== "Total"){
            const email = x.children[1].children[7].innerText
            const studentInData = data.find((studentData) => studentData.username === email)
            const studentCourt = studentInData.cohort.cohortCode
            const studentId = studentInData.id
            if(cohort.innerHTML === "All Students"){
                document.getElementById(studentId).style.display = ""
                studentCount += 1
            }else if(cohort.innerText.split(' ').join('') !== studentCourt){
                document.getElementById(studentId).style.display = "none"
            }else{
                document.getElementById(studentId).style.display = ""
                studentCount += 1
            }
        }
    }
    document.querySelector(".totalStudents").innerHTML = `Total students: ${studentCount}`
}

//! FINISH
export const moreInfo = (student) => {
    const studentObj = data.filter((x) => x.username === student.querySelector('.studentEmail').innerText)[0]
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
        const goalPercent = document.createElement('p')
        goalPercent.appendChild(document.createTextNode(`Percent of goal achieved: ${Math.floor((studentObj.codewars.current.total / studentObj.codewars.goal.total) * 100)}%`))
        codeWars.appendChild(goalPercent)
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
        const projectsScore = document.createElement('p')
        if(studentObj.cohort.scores.projects <= .49){
            projectsScore.setAttribute('class', 'redScore')
        }else if(studentObj.cohort.scores.projects >= .50 && studentObj.cohort.scores.projects <= .99){
            projectsScore.setAttribute('class', 'yellowScore')
        }else{
            projectsScore.setAttribute('class', 'greenScore')
        }
        projectsScore.appendChild(document.createTextNode(`Projects: ${studentObj.cohort.scores.projects * 100}%`))
        scores.appendChild(projectsScore)
        const assessmentsScore = document.createElement('p')
        if(studentObj.cohort.scores.assessments <= .49){
            projectsScore.setAttribute('class', 'redScore')
        }else if(studentObj.cohort.scores.assessments >= .50 && studentObj.cohort.scores.assessments <= .99){
            assessmentsScore.setAttribute('class', 'yellowScore')
        }else{
            assessmentsScore.setAttribute('class', 'greenScore')
        }
        assessmentsScore.appendChild(document.createTextNode(`Assessments: ${studentObj.cohort.scores.assessments * 100}%`))
        scores.appendChild(assessmentsScore)
        //* Certifications ----------------------
        certifications.setAttribute('class', 'certifications')
        const certificationsTitle = document.createElement('p')
        certificationsTitle.setAttribute('class', 'infoTitle')
        certificationsTitle.appendChild(document.createTextNode('Certifications:'))
        certifications.appendChild(certificationsTitle)
        const resumeText = document.createElement('p')
        if(studentObj.certifications.resume){
            resumeText.appendChild(document.createTextNode('Resume ✅'))
        }else{
            resumeText.appendChild(document.createTextNode('Resume ❌'))
        }
        certifications.appendChild(resumeText)
        const linkedinText = document.createElement('p')
        if(studentObj.certifications.linkedin){
            linkedinText.appendChild(document.createTextNode('Linkedin ✅'))
        }else{
            linkedinText.appendChild(document.createTextNode('Linkedin ❌'))
        }
        certifications.appendChild(linkedinText)
        const mockInterviewText = document.createElement('p')
        if(studentObj.certifications.mockInterview){
            mockInterviewText.appendChild(document.createTextNode('Mock interview ✅'))
        }else{
            mockInterviewText.appendChild(document.createTextNode('Mock interview ❌'))
        }
        certifications.appendChild(mockInterviewText)
        const githubText = document.createElement('p')
        if(studentObj.certifications.github){
            githubText.appendChild(document.createTextNode('Github ✅'))
        }else{
            githubText.appendChild(document.createTextNode('Github ❌'))
        }
        certifications.appendChild(githubText)
        //* General info div -----------------------
        infoDiv.setAttribute('class', 'infoDiv')
        infoDiv.appendChild(codeWars)   
        infoDiv.appendChild(scores)
        infoDiv.appendChild(certifications)
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