const StudentCard = (props) => {
    const {name,img,dob,email} = props
    console.log(
        `Hello`
    )
    return(
        <div class="studentCard">
            <img class="studentImg" src={img}></img>
            <div class="studentInfo">
                <p class="studentName">{name.preferredName}</p>
                <p class="studentDOB">{dob}</p>
                <p class="studentEmail">{email}</p>
                <button>Show more...</button> 
            </div>
        </div>
    )
}

export default StudentCard;