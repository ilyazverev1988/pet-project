import React, {Suspense, useContext} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import './styles/index.scss'
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app',{}, [theme])}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>Обо мне</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPageAsync/>}/>
                <Route path={'/'} element={<MainPageAsync/>}/>
            </Routes>
            </Suspense>
            <button onClick={toggleTheme}>Жми меня и меняй тему</button>
        </div>
    );
};

export default App;
