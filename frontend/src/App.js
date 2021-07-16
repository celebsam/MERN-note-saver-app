import { useState } from "react";
import "./App.css";
import Hearder from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyNotes from "./Screens/MyNotes/MyNotes";
import { Helmet } from "react-helmet";
import LoginScreen from "./Screens/Login/LoginScreen";
import RegisterScreen from "./Screens/Register/RegisterScreen";
import CreateNote from "./Screens/CreateNote/CreateNote";
import SingleNote from "./Screens/SingleNote/SingleNote";

function App() {
   const [search, setSearch] = useState("");
   console.log(search);
   return (
      <Router>
         <Helmet>
            <title>Home</title>
            <meta
               name="description"
               content="A safe place for all your notes"
            />
         </Helmet>
         <Hearder setSearch={setSearch} />
         <main>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" exact component={LoginScreen} />
            <Route path="/register" exact component={RegisterScreen} />
            <Route
               path="/mynotes"
               exact
               component={() => <MyNotes search={search} />}
            />
            <Route path="/note/:id" exact component={SingleNote} />
            <Route path="/createnote" exact component={CreateNote} />
         </main>
         <Footer />
      </Router>
   );
}

export default App;
