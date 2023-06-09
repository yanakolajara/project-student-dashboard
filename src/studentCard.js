const StudentCard = (props) => {
    const {name,img,dob,email} = props
    return(
        <div class="studentCard">
            <img class="studentImg" src={img}></img>
            <div class="studentInfo">
                <p class="studentName">{name}</p>
                <p class="studentDOB">{dob}</p>
                <p class="studentEmail">{email}</p>
                <button>Show more...</button> 
            </div>
        </div>
    )
}

export default StudentCard;