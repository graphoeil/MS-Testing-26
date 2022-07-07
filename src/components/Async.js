// Imports
import React, { useState, useEffect } from "react";

// Component
const Async = () => {

	// State
	const [posts, setPosts] = useState([]);

	// Load posts
	useEffect(() => {
		const loadPosts = async() => {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts');
			const data = await response.json();
			setPosts(data);
		};
		loadPosts();
	},[]);

	// Return
	return(
		<div>
			<ul>
				{
					posts.map((post) => (
						<li key={ post.id }>{ post.title }</li>
					))
				}
			</ul>
		</div>
	);

};

// Export
export default Async;