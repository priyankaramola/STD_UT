import { Route, Routes } from "react-router-dom";
import "./App.css";
// Components
import Body from "./Pages/Scheduled Outage/Body/Body";
import Home from "./Pages/Home/Home";
// import ScheduledDownTime from "./Pages/ScheduledDownTime/ScheduledDownTime";
import ScheduledDownTime from "./Pages/Scheduled Outage/ScheduledDownTime/ScheduledDownTime"
// import UnscheduledView from "./Pages/UnscheduledView/UnscheduledView";
import UnscheduledView from "./Pages/Scheduled Outage/UnscheduledView/UnscheduledView"
// import ScheduledView from "./Pages/Scheduled Outage/ScheduledView/ScheduledView";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home title="Home page" />} />
        <Route
          path="/unscheduled-outage"
          element={<Body title="Scheduled Outage" />}
        />
        <Route
          path="/scheduled-outage"
          element={<ScheduledDownTime title="Scheduled Outage" />}
        />
        {/* <Route
          path="/unscheduled-table-view"
          element={<UnscheduledView title="Scheduled Outage" />}
        /> */}
        <Route
          path="/scheduled-table-view"
          element={<UnscheduledView title="Scheduled Outage" />}
        />
      </Routes>
    </div>
  );
}

export default App;
