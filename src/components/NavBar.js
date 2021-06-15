import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class NavBar extends React.Component {
    // static contextType = ThemeContext;
    render(){
        return (
            <AuthContext.Consumer>{(authContext) => {
                return (
                    <ThemeContext.Consumer>{(themeContext) => { 
                        const { isDarkTheme, darkTheme, lightTheme } =  themeContext;
                        const { isLoggedIn, changeAuthStatus } =  authContext;
                        const theme = isDarkTheme ? darkTheme : lightTheme;
                        
                        return(
                            <nav style={{ background: theme.background, color: theme.text, height:'120px', textAlign: 'center' }}>
                                <h2 style={{ textAlign: 'center' }}>
                                    Oac Academy
                                </h2>
                                <p className="ui button right"
                                    onClick={changeAuthStatus} 
                                    style={{ textAlign:'center'}}
                                >
                                    { isLoggedIn ? 'Logged In' : 'Logged Out'}
                                </p>
                                <div className="ui three buttons">
                                    <button className="ui button">Overview</button>
                                    <button className="ui button">Contact</button>
                                    <button className="ui button">Support</button>
                                </div>
                            </nav>
                        )
                    }}
                </ThemeContext.Consumer>
                )
            }}
            </AuthContext.Consumer>
        );
    }
};

export default NavBar;