const StudentCard = (props) => {
    const {name,img,dob,email} = props;
    return(
        <div class="studentCard">
            <img class="studentImg" src={img} alt="user image not found"></img>
            <div class="studentInfo">
                <p class="studentName">{name.preferredName} {name.middleName[0]}. {name.surname}</p>
                <hr/>
                <u class="studentText">Date of birth</u>
                <p class="studentDOB">{dob}</p>
                <hr/>
                <u class="studentText">Username</u>
                <p class="studentEmail">{email}</p>
                <button>Show more...</button> 
            </div>
        </div>
    )
}

export default StudentCard;