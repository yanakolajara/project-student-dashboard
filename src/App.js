import data from './data/data.json'
import {cohorts} from './helper.js'

function App() {
  return (
    <div>
      <header>
        <h1>Student Dashboard</h1>
      </header>

      <div class="mainContent">
        <aside class="cohorts">
          <h2>Choose a class by start date</h2>
          //! Add :hover to cohortDiv's
          <div class="cohortDiv">
            <h3>All Students</h3>
            //todo add function that filters students in x cohort
            <hr/>
          </div>
          // todo Use structure from last cohort
          // todo cohorts should be from the last court to the first court
          {cohorts()}
        </aside>

        <main>
          <h2 class="cohortSelected">All students</h2> //! Change textNode when cohort is selected
          <p class="totalStudents" value={() => {}}>Total students: {}</p> //! Change value when cohort is selected

          // * Student structure
          <div class="studentCard">
            <img class="studentImg"></img>
            <div class="studentInfo">
              <p class="studentName"></p>
              <p class="studentDOB"></p>
              <p class="studentEmail"></p>
              <button>Show more...</button> 
              // todo: create additional student details function (and css animation)
              // todo: change button's state when button is clicked
              //* Include Codewars, scores (%), and certifications (check or x icons)
              //? codeWars percentage color: 100: green, 50-100 yellow, 0-50 red.
              //? codeWars emoji depending on percentage range as the one above
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
