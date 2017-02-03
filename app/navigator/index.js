import React from 'react';
import { Drawer } from './../modules/ui/navigation';

export default (route, navigator) => {
    //Set router and navigator to global and make it visible to through out the app.
    global.route = route;
    global.nav = navigator;
    //render your pages here.
    let Component = null;

    // switch ( route.title ) {
    //     case "home":
    //
    //         break;
    //     default:  "";
    //
    // }

    return(
        <Drawer>
            <Component />
        </Drawer>
    )
}
