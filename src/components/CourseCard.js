import React,{Component} from 'react'

class CourseCard extends React.Component{
    render(){
        return(
            <div className="card" style={{width:'18rem'}}>
                <img className="card-img-top"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Claude_Monet_022.jpg/1479px-Claude_Monet_022.jpg"/>
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Card Text</p>
                <a href="#" className="btn btn-primary">More...</a>

            </div>
            </div>
        )
    }
}



export default CourseCard