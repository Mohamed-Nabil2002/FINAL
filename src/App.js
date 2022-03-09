import "./App.css";
import { Component } from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Login from "./pages/login/Login";
import Registration from "./pages/register/Registration";
import Home from "./pages/home/Home";
import Trainers from "./pages/trainers/trainers"
import ContactUs from "./pages/contact/contactUs";
import About2 from "./pages/aboutUs/About";
import Course from "./pages/course/Course";
import CourseDetails from "./pages/courseDetails/CourseDetails";
import NotFound from "./components/notFound/NotFound";
import { Dropdown } from "./components/dropdown/dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Comments from "./components/comments/comments";
class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        
          <Navbar />
          <Switch>
            <Route path={"/"} exact component={Home}></Route>
            <Route path={"/login"} exact component={Login}></Route>
            <Route path={"/register"} exact component={Registration}></Route>
            <Route path={"/home"} exact component={Home}></Route>
            <Route path={"/trainers"} exact component={Trainers}></Route>
            <Route path={"/contact"} exact component={ContactUs}></Route>
            <Route path={"/aboutUs"} exact component={About2}></Route>
            <Route path={"/courses"} exact component={Course}></Route>
            <Route path={"/details/:id"} exact component={CourseDetails}></Route>
            <Route path={"*"} exact component={NotFound}></Route>
          </Switch>
            <Footer />
            <Comments/>
            
          
        </BrowserRouter>
      </>
    );
  }
  
}

export default App;
// export default withRouter(App);

// const mapStateToProps = state => state;
// export default connect(mapStateToProps)(App);