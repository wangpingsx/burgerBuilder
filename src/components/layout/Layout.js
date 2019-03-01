import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const Layout = (props) => {
    return <Aux>
        <div> toolbar , slide bar  and backdrop.</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>;
}

export default Layout;
