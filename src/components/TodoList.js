import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { fetchUsers } from '../actions/CardActions'

class TodoList extends React.Component {

    static contextType = ThemeContext;

    render(){

        const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        
        return (
            <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign:'center'}} className="ui list">
                <p className="item">Plan family trip</p>
                <p className="item">Go shopping</p>
                <p className="item">Go for a walk</p>
                <button className="ui button primary" onClick={changeTheme}>change the theme</button>
            </div>
        )
    }
}


export default TodoList;