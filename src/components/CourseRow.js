import React from 'react'
import {Link} from 'react-router-dom'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

class CourseRow extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return(

               <div>

                <td>
                {this.props.course.title}
                </td>

                <td>
                    <button onClick={()=>
                    {this.props.delete(this.props.course.id)}
                    } className="btn btn-primary">
                        <i className="fa fa-minus-circle"></i>
                    </button>
                </td>

                    <td>
                        <Link to={`/course/${this.props.course.id}/edit`}>
                            {this.props.course.title}
                        </Link>

                    </td>

               </div>

        )
    }
}

export default CourseRow;