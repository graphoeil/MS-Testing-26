// Imports
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Async from "./Async";

// Group
describe('Async component', () => {

	// 1st test, we check if li are rendered because posts.map ,-)
	test('Are posts rendered if fetch request succeeds ?', async() => {
		// Reproduce fetch inside the test to simulate it 
		// and then avoid to send a fetch request really
		window.fetch = jest.fn();
		window.fetch.mockResolvedValueOnce({
			// Test if .json() in Async.js return an array
			json:async() => {
				return [{ id:'p1', title:'First post' }]
			}
		});
		// Arrange
		render(<Async/>);
		// Act
		// Assert
		// findAllByRole return an array, with async we must use 
		// find methods because they return a promise
		const listItemElements = await screen.findAllByRole('listitem');
		expect(listItemElements).not.toHaveLength(0);
	});

});