import "./App.css";
import Header from "./components/Shared/Header/Header";
import Services from "./components/Home/Services/Services";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import BookNow from "./components/Home/BookNow/BookNow";
import Footer from "./components/Shared/Footer/Footer";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import MyBookings from "./components/MyBookings/MyBookings";
import ManageAllBooking from "./components/ManageAllBooking/ManageAllBooking";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/myBookings">
              <MyBookings />
            </Route>
            <Route path="/manageAllBooking">
              <ManageAllBooking />
            </Route>

            <PrivateRoute path="/service/:id">
              <BookNow></BookNow>
            </PrivateRoute>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
