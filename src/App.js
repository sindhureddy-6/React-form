
import ContactForm from './components/form';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import StoredSubmissions from './components/StoredSubmissions';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactForm />} />
        <Route path="/stored-submissions" element={<StoredSubmissions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
