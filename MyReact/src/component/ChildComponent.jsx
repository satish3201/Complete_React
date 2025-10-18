function ChildComponent({ onDataReceived }) {
    const handleClick = () => {
        const message = 'Hello from Child!';
        onDataReceived(message);
    };

    return (
    <div>
        <h2>Child Component</h2>
        <button onClick={handleClick}>Send Data to Parent</button>
    </div>
    );
}

export default ChildComponent;