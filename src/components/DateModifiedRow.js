import React from 'react'


import '../../node_modules/bootstrap/dist/css/bootstrap.css'


class DateModifiedRow extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <td>
                    {this.props.course.modified}

                </td>
            </div>
        )
    }

}


export default DateModifiedRow;