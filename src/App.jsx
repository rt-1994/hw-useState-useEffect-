import React from 'react';
import styles from './styles.scss';
import tabStyles from './components/Tabs/Tabs.scss';
import {Tabs, Tab} from "./components/Tabs/Tabs";
import Click from "./components/Clicker/Click";
import Time from "./components/Time/Time";
import Changer from "./components/Changer/Changer";
import Position from "./components/Position/Position";
import ColorSelect from "./components/ColorSelect/ColorSelect";
import Counter from "./components/Counter/Counter";


localStorage.setItem("count", 0);

const App = () => {
    return (
        <div className={tabStyles.tabs}>
            <h1>React Home work(useState, useEffect)</h1>
            <Tabs>
                <Tab label="Click">
                    <Click/>
                </Tab>
                <Tab label="Time">
                    <Time/>
                </Tab>
                <Tab label="Changer">
                    <Changer/>
                </Tab>
                <Tab label="Position">
                    <Position/>
                </Tab>
                <Tab label="Color select">
                    <ColorSelect/>
                </Tab>
                <Tab label="Counter">
                    <Counter/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default App;