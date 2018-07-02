import React, {Component} from'react'
import CourseCard from '../components/CourseCard'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import CourseEditor from "./CourseEditor";
import CourseList from "./CourseList";
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import iCourseEditor from './iCourseEditor'



class CourseManager extends Component {
    render() {
        return(
            <Router>
            <div class="container-fluid">
            <h1>Course Manager</h1>
                <Route path="/course/list"
                component={CourseList}>
                </Route>
                <br/><br/>
                <Route path="/course/:courseId/edit"
                       component={iCourseEditor}>

                </Route>


                <br/>
                <div className="card-deck">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>

                </div>

            </div>
            </Router>
        )
   }
}

export default CourseManager;