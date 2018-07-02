import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from '../services/CourseService'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import ModuleList from "./ModuleList";
import DateRow from "../components/DateRow";
import DateModifiedRow from "../components/DateModifiedRow";

class CourseList extends React.Component{
    constructor(){
        super();
        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);

        this.state = {courses:[ ]};

        }

    createCourse(){
        this.courseService
            .createCourse(this.state.course)
            .then(() => { this.findAllCourses(); })

    }

    componentDidMount() {
        this.findAllCourses();
    }

    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});

            });
    }



    titleChanged(event) {
        this.setState({
            course: { title: event.target.value }
        })
    }

    deleteCourse(courseId) {
        this.courseService
           .deleteCourse(courseId);
    }



    renderCourseRows(){
       let rows = this.state.courses.map((course)=> {
           return <CourseRow course={course} key={course.id}
             delete={this.deleteCourse }/>
       });

       return (rows)


    }

    renderDateRows(){
        let dates = this.state.courses.map(function(course){
            return <DateRow course={course}/>
        });
        return (dates)
    }

    renderDateModifiedRows(){
        let modified = this.state.courses.map(function(course){
            return <DateModifiedRow course={course}/>
        });
        return (modified)
    }

    render(){
        return(
            <div>
            <h2>Course List</h2>
                <div className="table">
                    <tr>
                        <th className="col">
                        <input onChange={this.titleChanged}
                               className="form-control" id="titleFld"
                        placeholder="CS1010"/>
                        </th>
                        <th className="col">
                            <button onClick={this.createCourse}
                                className="btn btn-primary">
                                <i className="fa fa-plus-circle"></i>

                            </button>
                        </th>
                    </tr>
                </div>

                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Date created</th>
                        <th scope="col">Date Modified</th>

                    </tr>
                    </thead>

                    <tbody>

                    <tr>

                         <th>
                         {this.renderCourseRows()}
                         </th>
                        <td>
                        {this.renderDateRows()}
                        </td>
                        <td>
                            {this.renderDateModifiedRows()}
                        </td>





                    </tr>

                    </tbody>
                </table>

            <br/><br/>

                <div>
                    <h3>Course {this.state.courseId}
                    </h3>
                    <ModuleList
                        courseId={this.state.courseId}/>
                </div>



            </div>
        )
    }
}

export default CourseList;