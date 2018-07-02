import * as actions from "../actions/index";
import React, {Component} from "react";
import {connect} from "react-redux";
import {WidgetContainer} from '../components/widget'
import {Button, ListGroup,ListGroupItem} from 'reactstrap'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'



class WidgetList extends Component {
    constructor(props){
        super(props)
        this.props.findAllWidgets()
    }

    render() {
        return(
            <div>
                <h1>Widget List {this.props.widgets.length}</h1>
                <Button color="success" hidden={this.props.previewMode} onClick={this.props.save}>Save</Button> {''}
                <Button onClick={this.props.preview}>Preview</Button>


                       <ul class="container">


                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}
                                         preview={this.props.previewMode}
                                         key={widget.id}/>
                    ))
                    }
                              <hr></hr>

                        </ul>



                <Button color="info" onClick={this.props.addWidget}>Add Widget
                </Button>
            </div>

        )
    }
}

const stateToPropertiesMapper = (state) =>({

    widgets: state.widgets,
    previewMode: state.preview
})

const dispatcherToPropsMapper
    = dispatch => ({
    findAllWidgets: () => actions.findAllWidgets(dispatch),
    addWidget:()=> actions.addWidget(dispatch),
    save:()=> actions.save(dispatch),
    preview: () => actions.preview(dispatch)
})

export const App = connect(stateToPropertiesMapper,
    dispatcherToPropsMapper)(WidgetList)