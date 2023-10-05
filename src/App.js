import "./App.css";
import FinalYearComponent from "./components/FinalYearComponent";
import FirstYearComponent from "./components/FirstYearComponent";
import ThirdYearComponent from "./components/ThirdYearComponent";
import SecondYearComponent from "./components/SecondYearComponent";
import TeamScreen from "./screens/TeamScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Nav from "./components/Nav";
import EventScreen from "./screens/EventScreen";
import NewEventForm from "./components/NewEventForm";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/team" Component={TeamScreen} />
          <Route path="/events" Component={EventScreen} />
          <Route path="/events/:id" Component={NewEventForm} />
          <Route path="/team/finalyear" Component={FinalYearComponent} />
          <Route path="/team/pre-finalyear" Component={ThirdYearComponent} />
          <Route path="/team/second-year" Component={SecondYearComponent} />
          <Route path="/team/first-year" Component={FirstYearComponent} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
