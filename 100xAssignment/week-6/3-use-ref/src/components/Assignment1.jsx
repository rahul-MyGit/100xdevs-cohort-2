import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {

    const useDiv = useRef();

    useEffect(() => {
        useDiv.current.focus();
    }, [useDiv]);

    const handleButtonClick = () => {
        useDiv.current.focus();
    };

    return (
        <div>
            <input ref={useDiv} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
