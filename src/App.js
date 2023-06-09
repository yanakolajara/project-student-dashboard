import students from './data/data.json'

function App() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <div class="students">
        <h2>All students</h2>
        <p class="totalStudents" value={() => {}}>Total students: {}</p> 
        <div class="studentCard">
          <img class="studentImg"></img>
          <div class="studentInfo">
            <p class="studentName"></p>
            <p class="studentDOB"></p>
            <p class="studentEmail"></p>
            <button>Show more...</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
