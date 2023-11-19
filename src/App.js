import React from 'react';
import News from './News';
import './scss/style.scss';

function App() {
	return (
		<div className='App'>
			<section>
				<News />
				<News />
				<News />
				<News />
			</section>
		</div>
	);
}

export default App;
