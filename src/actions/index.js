import * as constants from "../constants/index";

export const headingTextChanged =(dispatch, widgetId,newText) => (
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText
    })
)




export const headingSizeChanged =(dispatch, widgetId,newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize
    })
)

export const paragraphTextChanged =(dispatch,widgetId,newText) => (
    dispatch({
        type: constants.PARAGRAPH_TEXT_CHANGED,
        id: widgetId,
        text: newText
    })
)

export const listTextChanged = (dispatch,widgetId,newText) => (
    dispatch({
        type: constants.LIST_TEXT_CHANGED,
        id: widgetId,
        text: newText
    })
)


export const imageUrlChanged = (dispatch,widgetId,newUrl) =>(
    dispatch({
        type: constants.IMAGE_URL_CHANGED,
        id: widgetId,
        text: newUrl
    })
)

export const linkTextChanged = (dispatch,widgetId,newUrl) =>(
    dispatch({
        type: constants.LINK_URL_CHANGED,
        id: widgetId,
        text: newUrl
    })
)

export const findAllWidgets = dispatch => {
    fetch('https://javaserver-redux.herokuapp.com/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type : constants.FIND_ALL_WIDGETS,
            widgets: widgets
        }))
}

export const addWidget = dispatch => (
    dispatch({type: constants.ADD_WIDGET})
)

export const save = dispatch => (
    dispatch({type:constants.SAVE})
)

export const preview = dispatch => (
    dispatch({type:constants.PREVIEW})
)