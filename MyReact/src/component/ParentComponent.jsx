import { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
    const [dataFromChild, setDataFromChild] = useState('');

    const handleChildData = (data) => {
        setDataFromChild(data);
        console.log('Data received from child:', data);
    };

    return (
    <div>
        <h1>Parent Component</h1>
        <p>Data from Child: {dataFromChild}</p>
        <ChildComponent onDataReceived={handleChildData} />
    </div>
    );
}

export default ParentComponent;