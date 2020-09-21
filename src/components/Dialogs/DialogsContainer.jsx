import React from 'react'
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../Redux/dialogsReducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {           //Данные из state
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator())
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;