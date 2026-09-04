import "../schedule.css";
import scheduleImg from "../assets/schedule/mensSchedule.jpg";


export default function Schedule() {
  return (
    <div className="page">
      <h1>Schedule</h1>
       <div className="schedule-container">
        <img src={scheduleImg} alt="Men's Schedule" />
      </div>
    </div>
  );
}