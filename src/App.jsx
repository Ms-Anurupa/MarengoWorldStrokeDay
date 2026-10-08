import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ParticipantRegistration from "./pages/ParticipantRegistration";
import AttendeeRegistration from "./pages/AttendeeRegistration";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/register/participant"
          element={<ParticipantRegistration />}
        />

        <Route
          path="/register/attendee"
          element={<AttendeeRegistration />}
        />

        <Route path="/thank-you" element={<ThankYou />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;