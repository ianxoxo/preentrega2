import React from 'react';
import './View.css';
import { useState } from 'react';

const View = () => {
    const [darkMode, setMode] = useState(false);

    const switchMode = () => {
        setMode(!darkMode);
    }

    const style = darkMode ? "dark_mode" : "light_mode";
    return (
        <div className={style} onClick={switchMode}>Vista</div>
    )
}

export default View