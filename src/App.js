import {students,cohortStudents} from './helper.js'

function App() {
  return (
    <div>
      <header>
        <h1>Student Dashboard</h1>
      </header>

      <div class="mainContent">
        <aside class="cohorts">
          <h2>Choose a class by start date</h2>
          <div class="cohortDiv">
            <h4>All Students</h4>
            //todo add function that filters students in x cohort
            <hr/>
          </div>
          // todo Use structure from last cohort
          // todo cohorts should be from the last court to the first court
          {cohortStudents()}
        </aside>

        <main>
          <h2 class="cohortSelected">All students</h2>
          <p class="totalStudents" value={() => {}}>Total students: {}</p>
          {students()}
          <div class="studentCard">
            <img class="studentImg"></img>
            <div class="studentInfo">
              <p class="studentName"></p>
              <p class="studentDOB"></p>
              <p class="studentEmail"></p>
              <button>Show more...</button> 
            </div>
          </div>
        </main>

        <asside class="notes">
          <form>
            //! Use bootstrap: https://getbootstrap.com/docs/5.3/forms/input-group/
            //* Input: Commenter name 
            //* Input: Comment 
            //* Submit: Add note 
            //todo: function that adds to allNotes a new element li:`'name R.' says, "Bla"`
            //! Inputs cleared after submit
          </form>
          <ul class="allNotes"></ul> 
        </asside>
      </div>
    </div>
  );
}

export default App;
