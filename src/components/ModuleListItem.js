import React, {Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import { Link } from 'react-router-dom'


export default class ModuleListItem
    extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <li className="list-group-item">
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                {this.props.module.title}
                </Link>
                <span className="float-right">
               <i onClick={() => {this.props.delete(this.props.module.id)}} className="fa fa-trash-o"></i>
               <i className="fa fa-pencil-square-o"></i>
                </span>
            </li>

            </div>
        )
    }
}