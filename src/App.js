import React from "react";
import AboutUs from  "./pages/AboutUs";
import ContactUs from  "./pages/ContactUs";
import OurWork from  "./pages/OurWork";
import Nav from  "./components/Nav";
import MovieDetail from './pages/MovieDetail'

// Routing 
import { Switch, Route, useLocation } from 'react-router-dom';

//Import global style
import GlobalStyle from  "./components/GlobalStyle";

// Animation
import { AnimatePresence } from "framer-motion";




function App() {
  const location = useLocation();
  
  return (
    <div className="App">
       <GlobalStyle/>
       <Nav/>
       {/* exitBeforeEnter allows to wait for the component /page to finish loading.  */}
       <AnimatePresence exitBeforeEnter>
        <Switch key={location.pathname} location={location}>
            <Route path="/" exact>
              <AboutUs/>  
            </Route>
            <Route path="/work" exact>
              <OurWork/>
            </Route>
            <Route path="/work/:id">
              <MovieDetail/>
            </Route>
            <Route path="/contact">
              <ContactUs/>
            </Route>
          </Switch>
       </AnimatePresence>
       
     
       
    </div>
  );
}

export default App;
