import React from 'react'
import { useGlobalContext } from '../Components/utils/global.context';
import '../Styles/App.css';
import '../Styles/NotFound.css';

const NotFound = () => {

    const { state } = useGlobalContext();
    const themeClass = state.theme === 'dark' ? 'dark-theme' : 'light-theme';

    return (
        <div className={`not-found ${themeClass}`}>
            <h1>404 Not Found - Esta página no existe</h1>
        </div>
    )
}

export default NotFound
