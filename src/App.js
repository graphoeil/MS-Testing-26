// Imports
import './App.css';
import Greeting from "./components/Greeting";
import Async from "./components/Async";

// Component
function App() {

	// Return
	return(
		<div className="App">
			<Greeting/>
			<Async/>
		</div>
	);

};

// Export
export default App;