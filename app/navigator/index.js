import React from 'react';
import { Drawer } from './../modules/ui/navigation';
import {IndexPageContainer} from './../modules/pages/index';

export default (route, navigator) => {
    //Set router and navigator to global and make it visible to through out the app.
    global.route = route;
    global.nav = navigator;

    let Component = null;
    //render your pages here.
    switch (route.title) {
        case "e-Bulb": {
            Component = IndexPageContainer;
            break;
        }
    }

    return (
        <Drawer>
            {Component ? <Component /> : null}
        </Drawer>
    )
}

onMainScreen = () => initialRoute.title == route.title

goBack = () => navigator.pop();
