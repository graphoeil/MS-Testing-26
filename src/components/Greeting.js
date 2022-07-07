// Imports
import React, { useState } from "react";
import Output from "./Output";

// Component
const Greeting = () => {

	// State
	const [changedText, setChangedText] = useState(false);

	// Change the text
	const changeText = () => {
		setChangedText(true);
	};

	// Return
	return(
		<div>
			<h2>Hello World!</h2>
			{
				!changedText && <Output text="It's good to see you!"/>
			}
			{
				changedText && <Output text="Changed!"/>
			}
			<button onClick={ changeText }>
				Change text
			</button>
		</div>
	);

};

// Export
export default Greeting;