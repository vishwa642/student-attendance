function AttendanceSummary({ studentName, studentID, attendance, onReset }) {
    return (
      <div className="summary center">
        <h2>Attendance Submitted</h2>
        <p><strong>Name:</strong> {studentName}</p>
        <p><strong>Student ID:</strong> {studentID}</p>
        <p><strong>Attendance:</strong> {attendance}</p>
        <button onClick={onReset}>Submit Another</button>
      </div>
    );
  }
  
  export default AttendanceSummary;
  