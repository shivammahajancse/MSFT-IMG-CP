import React from 'react'
import Menu from './Menu'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
function Me({LoginIs}) {
    if(!LoginIs){
        console.log("inside");
        return <Redirect to="/login"/>;
    }
    return (
        <div>
            <Menu></Menu>
            its me
        </div>
    )
}

export default Me
