import React, {Suspense, useContext} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {
const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app',{}, [theme])}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>Обо мне</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/'} element={<MainPage/>}/>
            </Routes>
            </Suspense>
            <button onClick={toggleTheme}>Жми меня и меняй тему</button>
        </div>
    );
};

export default App;
