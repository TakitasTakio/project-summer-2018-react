import React from 'react'
import {connect} from "react-redux"
import {DELETE_WIDGET} from "../constants"
import  * as actions from '../actions/index'
import {InputGroup,Button,FormGroup,Label,Form,Input} from 'reactstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

const Heading =({widget, preview, headingSizeChanged, headingTextChanged}) => {
    let selectElem
    let inputElem
    return(
        <div>
            <div hidden={preview}>
            <h3> Widget Name: Heading {widget.size} </h3>

            <InputGroup>
            <input class="form-control" onChange={() => headingTextChanged(widget.id, inputElem.value)}
                   value={widget.text}
                   ref={node => inputElem = node}/>
            </InputGroup>

            <InputGroup>
            <select class="form-control" onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                value={widget.size}
                ref={node => selectElem = node}>
                <option selected disabled>Choose the size</option>
                <option value="1">Heading 1</option>
                <option value="2">Heading 2</option>
                <option value="3">Heading 3</option>
            </select>
            </InputGroup>

            <h3>Preview</h3>
            </div>
            {widget.size ==1 && <h1>{widget.widgetType}: {widget.text}</h1>}
            {widget.size ==2 && <h2>{widget.widgetType}: {widget.text}</h2>}
            {widget.size ==3 && <h3>{widget.widgetType}: {widget.text}</h3>}
        </div>
    )
}




const Paragraph =({widget,preview,paragraphTextChanged}) => {
    let inputElem

    return(
    <div>
        <div hidden={preview}>

            <h3><Label>Widget Name: Paragraph</Label></h3>
          <InputGroup>


          <textarea type="textarea" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"
                 onChange={ () => paragraphTextChanged(widget.id,inputElem.value)}
                 value={widget.text}
                 ref={node => inputElem = node}/>
        </InputGroup>


        <h3>Preview</h3>
        </div>


          <h4>{widget.widgetType}: {widget.text}</h4>


    </div>
    )
}




const List =({widget,preview,listTextChanged}) => {
    let inputElem

    return(
        <div>
            <div hidden={preview}>
             <h3>Widget Name: List</h3>

                <InputGroup>
                    <input class="form-control" onChange={() => listTextChanged(widget.id, inputElem.value)}
                           value={widget.text}
                           ref={node => inputElem = node}/>
                </InputGroup>



                <h3>Preview</h3>
            </div>
            <div>{widget.widgetType}: {widget.text}</div>

        </div>
)}




const Image =({widget,preview,imageUrlChanged}) => {
    let inputElem


    return (
        <div>
            <div hidden={preview}>
                <h3>Widget Name: Image</h3>
                <InputGroup>
                    <input type="url" className="form-control" onChange={() => imageUrlChanged(widget.id, inputElem.value)}
                           value={widget.text}
                           ref={node => inputElem = node}/>
                </InputGroup>


                <h3>Preview</h3>
            </div>
            <div>{widget.widgetType}:<br/>
                <a target="_blank" href={widget.text}>
                    <img src={widget.text} alt="Forest" className="img-fluid img-thumbnail" />
                </a>
            </div>
        </div>
    )
}


const Link =({widget,preview,linkTextChanged}) => {
    let inputElem


    return (
        <div>
            <div hidden={preview}>
                <h3>Widget Name: Link</h3>
                <InputGroup>
                    <input type="url" className="form-control" onChange={() => linkTextChanged(widget.id, inputElem.value)}
                           value={widget.text}
                           ref={node => inputElem = node}/>
                </InputGroup>


                <h3>Preview</h3>
            </div>
            <div>{widget.widgetType}:<br/>
                <a target="_blank" href={widget.text} className="badge badge-light">
                    {widget.text}
                </a>
            </div>
        </div>
    )
}






const dispatchToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText)=>
        actions.headingTextChanged(dispatch,widgetId,newText),
    headingSizeChanged:(widgetId, newSize) =>

        actions.headingSizeChanged(dispatch, widgetId, newSize),
    paragraphTextChanged : (widgetId,newText)=>
        actions.paragraphTextChanged(dispatch,widgetId,newText),

    listTextChanged: (widgetId, newText)=>
        actions.listTextChanged(dispatch,widgetId,newText),

    imageUrlChanged: (widgetId, newUrl)=>
         actions.imageUrlChanged(dispatch,widgetId,newUrl),

    linkTextChanged: (widgetId, newUrl)=>
        actions.linkTextChanged(dispatch,widgetId,newUrl)



})

const stateToPropsMapper = state => ({
    preview: state.preview
})

const HeadingContainer = connect(stateToPropsMapper,dispatchToPropsMapper)(Heading)
const ParaContainer = connect(stateToPropsMapper,dispatchToPropsMapper)(Paragraph)
const ListContainer =connect(stateToPropsMapper,dispatchToPropsMapper)(List)
const ImageContainer =connect(stateToPropsMapper,dispatchToPropsMapper)(Image)
const LinkContainer =connect(stateToPropsMapper,dispatchToPropsMapper)(Link)

const Widget = ({widget, preview, dispatch}) => {
    let selectElement
    return (
        <Form>
            <hr></hr>

            <div hidden={preview}>
                <div className="form-row">
                    <label class="col-sm-3 col-form-label col-form-label-lg">
            {widget.id} {widget.widgetType}
                    </label>

                <div class="col">
            <select class="form-control" value={widget.widgetType}
                    onChange={e =>
                dispatch({
                type:'SELECT_WIDGET_TYPE',
                id: widget.id,
                widgetType: selectElement.value
            }) }
                ref={node => selectElement = node}>
                <option selected disabled>Choose widget type</option>
                <option>Heading</option>
                <option>Paragraph</option>
                <option>List</option>
                <option>Image</option>
                <option>Link</option>

            </select>
                </div>

                <div class="col">
            <Button color="danger" onClick={e => (
                dispatch({type: DELETE_WIDGET, id: widget.id})
            )}>Delete
            </Button>
                </div>
            </div>

            </div>
            <div>

                {widget.widgetType ==='Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType ==='Paragraph' && <ParaContainer widget={widget}/>}
                {widget.widgetType ==='List' && <ListContainer widget={widget}/>}
                {widget.widgetType ==='Image' && <ImageContainer widget={widget}/>}
                {widget.widgetType ==='Link' && <LinkContainer widget={widget}/>}

            </div>


        </Form>
    )
}

export const WidgetContainer = connect( state => ({
     preview: state.preview
    })

)(Widget)