import React,{useEffect} from 'react';
import * as actions from './../../../Store/actions/index';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


function Logout(props) {

    useEffect(() => {
        props.onLogout()
    }, [])
    return (
        <Redirect to='/' />
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(actions.authLogout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);