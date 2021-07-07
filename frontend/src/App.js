import "./App.css";
import Hearder from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyNotes from "./Screens/MyNotes/MyNotes";

function App() {
   return (
      <Router>
         <Hearder />
         <main>
            <Route path="/" exact component={LandingPage} />
            <Route path="/mynotes" exact component={MyNotes} />
         </main>
         <Footer />
      </Router>
   );
}

export default App;
