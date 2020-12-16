import React from 'react';

function Project(props) {
	let pSize = 0;
	let thumbnail = 0;
	let projectTitle = 0;
	let projectLink = 0;

	if (window.screen.width > 812) {
		pSize = '1.5vw';
		thumbnail = '200px';
		projectTitle = '200%';
		projectLink = '100%';
	} else {
		pSize = '2.5vw';
		thumbnail = '128px';
		projectTitle = '100%';
		projectLink = '50%';
	}

	return (
		<div className='scrollItem projectContainer'>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<h4 style={{ fontSize: projectTitle }} className='scrollTitle2 '>
					{props.title}
				</h4>
				<a
					target='_blank'
					rel='noopener noreferrer'
					style={{ fontSize: projectLink }}
					href={props.deployed}>
					joshri.github.io/funky-simon
				</a>
				<a
					target='_blank'
					rel='noopener noreferrer'
					style={{ fontSize: projectLink }}
					href={props.github}>
					github repo
				</a>
				<iframe
					title={props.title}
					style={{ width: thumbnail, height: thumbnail }}
					src={props.gif}
					frameBorder='0'
					className='giphy-embed'
					allowFullScreen></iframe>
			</div>
			<ul
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: pSize,
				}}
				className='project'>
				{props.bullets.map(bullet => {
                    return <li key={props.bullets.indexOf(bullet)}>{bullet}</li>
                })}
			</ul>
		</div>
	);
}

export default Project;
