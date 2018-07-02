import React from 'react'


import '../../node_modules/bootstrap/dist/css/bootstrap.css'


class DateRow extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
             <div>
                <td>
                    {this.props.course.created}

                </td>
             </div>
        )
    }

}


export default DateRow;