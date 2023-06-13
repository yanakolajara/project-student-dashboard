import {moreInfo} from './helper.js'

const StudentCard = (props) => {
    const {name,img,dob,email,certifications,codewars} = props;
    let graduateTrack = NaN
    if(certifications.resume && certifications.linkedin && certifications.github && certifications.mockInterview && codewars.current.total > 600){
        graduateTrack = <p class="graduateTrack">On Track to Graduate</p>
    }else{
        graduateTrack = <p class="graduateTrack"></p>
    }

    return(
        <div class="studentCard">
            <img class="studentImg" src={img} alt="user image not found"></img>
            <div class="studentInfo">
                <p class="studentName">{name.preferredName} {name.middleName[0]}. {name.surname}</p>
                {graduateTrack}
                <hr/>
                <u class="studentText">Date of birth</u>
                <p class="studentDOB">{dob}</p>
                <hr/>
                <u class="studentText">Username</u>
                <p class="studentEmail">{email}</p>
                <button onClick={(event) => moreInfo(event.target.parentNode)}>Show more...</button> 
            </div>
        </div>
    )
}

export default StudentCard;