import "./App.css";
import Hearder from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./Screens/LandingPage/LandingPage";

function App() {
   return (
      <>
         <Hearder />
         <main>
            <LandingPage />
         </main>
         <Footer />
      </>
   );
}

export default App;
