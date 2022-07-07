// Imports
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// Group the tests
// 1st params => Name of the suit
describe('Greeting component', () => {

	// 1st test
	test('Is there "Hello World!" as a text ?', () => {
		// Arrange, set up the test data, conditions, environnement
		render(<Greeting/>);
		// Act
		// Assert
		const helloWorldElement = screen.getByText('Hello World!', { exact:true });
		expect(helloWorldElement).toBeInTheDocument();
	});

	// 2nd test
	test('Is there "good to see you" as a text if the button was not clicked ?', () => {
		// Arrange
		render(<Greeting/>);
		// Act
		// Assert
		const outputElement = screen.getByText(`good to see you`,{ exact:false });
		expect(outputElement).toBeInTheDocument();
	});

	// 3rd test
	test('Is there "Changed!" as a text if the button was clicked ?', () => {
		// Arrange
		render(<Greeting/>);
		// Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);
		// Assert
		const outputElement = screen.getByText(`Changed!`,{ exact:true });
		expect(outputElement).toBeInTheDocument();
	});

	// 4th test
	test('Is there no more "good to see you" as a text if the button was clicked ?', () => {
		// Arrange
		render(<Greeting/>);
		// Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);
		// Assert
		// We use queryByText because getByText throw an error then the test is fail
		// queryByText send null if not found
		const outputElement = screen.queryByText(`good to see you`,{ exact:false });
		expect(outputElement).toBeNull();
	});

});