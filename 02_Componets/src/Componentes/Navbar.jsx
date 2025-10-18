// Components 

import React from "react";


// 1. Functional Components
// 2. Class-Based Components



function Navbar({name}) {
    return (
        <>
            <div>
                <h1>{name}</h1>
            </div>  

            <div>
                <ul>
                    <li>Learn</li>
                    <li>Reference</li>
                    <li>Commuin</li>
                    <li></li>
                    <li></li>
                </ul>

            </div>
        </>
    )
}

export default Navbar;



// Class-Based Components
export class Navbar2 extends React.Component {
    render() {
        return (
            <h1>Hello I am Avinash</h1>
        )
    }
}


// Props In React ??



function Navbar() {
    return (
        <div>
            <div>

            </div>

            <div>

            </div>
        </div>
    )
}