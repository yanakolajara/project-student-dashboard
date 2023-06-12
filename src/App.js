import {useState} from 'react'
import {moreInfo,students,cohortStudents,cohortCount,addNote} from './helper.js'

function App() {
  const [commenter, setCommenter] = useState('')
  const [comment, setComment] = useState('')

  return (
    <div>
      <header>
        <h1>Student Dashboard</h1>
      </header>

      <div class="mainContent">
        <aside class="cohorts">
          <h2>Choose a class by start date</h2>
          <div class="cohortDiv">
            <h4 onClick={(event) => cohortStudents(event.target)}>All Students</h4>
            <hr/>
            <h4 onClick={(event) => cohortStudents(event.target)}>Winter 2026</h4>
            <hr/>
            <h4 onClick={(event) => cohortStudents(event.target)}>Fall 2026</h4>
            <hr/>
            <h4 onClick={(event) => cohortStudents(event.target)}>Summer 2026</h4>
            <hr/>
            <h4 onClick={(event) => cohortStudents(event.target)}>Spring 2026</h4>
            <hr/>
            <h4 onClick={(event) => cohortStudents(event.target)}>Winter 2025</h4>
            <hr/>
            <h4 onClick={(event) => cohortStudents(event.target)}>Fall 2025</h4>
            <hr/>
            <h4 onClick={(event) => cohortStudents(event.target)}>Summer 2025</h4>
            <hr/>
            <h4 onClick={(event) => cohortStudents(event.target)}>Spring 2025</h4>
            <hr/>
          </div>
          {() => cohortStudents()}
        </aside>

        <main>
          <h2 class="cohortSelected">All Students</h2>
          <div class="allStudents">
            {students()}
          </div>
        </main>

        <asside class="notes">
          <h3>1-on-1 Notes</h3>
          <form id="notesForm">
            <label htmlFor='commenterName'>Commenter name:</label>
            <input
            type="text"
            id="commenterName"
            value={commenter}
            onChange={(x) => setCommenter(x.target.value)}
            />
            <label htmlFor="comment">Comment:</label>
            <input
            type="text"
            id="comment"
            value={comment}
            onChange={(x) => setComment(x.target.value)}
            />
            <input
            type="button"
            id="commentSubmit"
            value="Submit"
            onClick={(form) => {
              addNote(form)
              setComment('')
              setCommenter('')
            }}
            />
          </form>
          <ul class="allNotes"></ul> 
        </asside>
      </div>
    </div>
  );
}

export default App;
