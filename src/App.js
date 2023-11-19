import React from 'react';
import News from './News';
import './scss/style.scss';

function App() {
	const fontStyle = {
		color: 'blue',
		fontSize: '75',
		fontWeight: 'normal',
	};
	const handleClick = (txt) => console.log(txt);
	return (
		<div className='wrap'>
			{/* 객체 리터럴 방식으로 스타일을 직접 가상DOM에 지정가능 */}
			<h1
				style={{ color: 'orange', fontSize: 50 }}
				onClick={(e) => {
					const txt = e.currentTarget.innerText;
					console.log(txt);
				}}>
				Title 1
			</h1>
			{/* 스타일 객체를 변수에 할당하고 가상DOM에 지정가능 */}
			<h1 style={fontStyle} onClick={() => handleClick('happy')}>
				Title 2
			</h1>
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
