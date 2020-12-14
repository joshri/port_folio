import React, { useState } from 'react';
import thumbnailPic from './images/ResumeThumbnail.png';
import res from './images/Resume.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

function ScrollContainer(props) {
	let [resFull, setResFull] = useState(false);

	let pSize = 0;
	let resume = 0;
	let thumbnail = 0;
	let projectTitle = 0;
	let projectLink = 0;

	if (window.screen.width > 812) {
		pSize = '1.5vw';
		resume = '600%';
		thumbnail = '200px';
		projectTitle = '200%';
		projectLink = '100%';
	} else {
		pSize = '2.5vw';
		resume = '200%';
		thumbnail = '128px';
		projectTitle = '100%';
		projectLink = '50%';
	}

	return (
		<div style={{ width: '100%', height: '100%', overflow: 'scroll' }}>
			<Modal size='xl' centered show={resFull}>
				<Modal.Body style={{ justifyContent: 'center', alignItems: 'center' }}>
					<img
						alt='Full Resume'
						src={res}
						style={{ height: '100%', width: '100%', zIndex: -10 }}></img>
				</Modal.Body>

				<Modal.Footer style={{ justifyContent: 'center' }}>
					<Button variant='outline-dark' onClick={() => setResFull(false)}>
						CLOSE
					</Button>
				</Modal.Footer>
			</Modal>
			<div className='scrollItem'>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: '30vh',
					}}>
					<h1 className='scrollTitle rotate'>ABOUT</h1>

					<p
						style={{
							opacity: 1,
							fontSize: pSize,
							width: '50%',
							padding: '15px',
							border: '2px solid black',
						}}>
						Welcome to my Internet House! You've got everything you could ever
						want right here at your fingertips. The Res. The Projects. The email
						and social links. The only thing that's missing is another look at
						that photo from the intro, which I am happy to send on request.
						<br></br>
						<br></br>Seriously though - I love creating, I love learning, and I
						used to be paid to sing and dance in front of thousands of people
						eight times a week - or as I like to call it now, "giving
						presentations".<br></br>
						<br></br>Yes, I actually like talking to people and giving
						presentations. So if you need that, Or:<br></br>
						<br></br>
						React (Bootstrap, Hooks, Framer+Motion, NPM), Javascript, CSS (SASS,
						Styled Components), HTML, Python, AWS (where this is deployed!), PostgreSQL, MongoDB, Express,
						Django, Postman, or Git,<br></br>
						<br></br>Let's make something together!<br></br>
						<br></br>
					</p>
				</div>
			</div>
			<div id='resume' style={{ height: '200px' }}></div>
			<div className='scrollItem'>
				<h1 className='scrollTitle' style={{ fontSize: resume }}>
					RESUME
				</h1>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-evenly',
						alignItems: 'center',
						marginTop: '20px',
					}}>
					<svg
						width='30%'
						height='30%'
						viewBox='0 0 16 16'
						class='bi bi-arrow-right'
						fill='currentColor'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fill-rule='evenodd'
							d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
						/>
					</svg>
					<img
						alt='resume thumbnail'
						className='resumeThumb'
						style={{ height: thumbnail, width: thumbnail }}
						src={thumbnailPic}
						onClick={() => setResFull(true)}
					/>
				</div>
			</div>
			<div id='projects'></div>
			<div style={{ justifyContent: 'center', alignItems: 'center' }}>
				<h1
					style={{
						fontSize: resume,
						marginTop: '200px',
						marginBottom: '100px',
					}}
					className='scrollTitle'>
					PROJECTS{' '}
				</h1>
				<div id='forallseasons'></div>
				<div className='scrollItem projectContainer'>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<h4
							style={{ fontSize: projectTitle, marginBottom: '10px' }}
							className='scrollTitle2'>
							FOR ALL SEASONS
						</h4>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://for-all-seasons.herokuapp.com'
							style={{ fontSize: projectLink }}>
							for-all-seasons.herokuapp.com
						</a>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/joshri/for-all-seasons'
							style={{ fontSize: projectLink }}>
							github repo
						</a>

						<iframe
							title='For All Seasons'
							style={{ width: thumbnail, height: thumbnail }}
							src='https://giphy.com/embed/jV4sm6vP1BKq5xH34H'
							frameBorder='0'
							class='giphy-embed'
							allowFullScreen></iframe>
					</div>
					<ul
						className='project'
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: pSize,
							listStylePosition: 'inside',
						}}>
						<li>
							Filters an artist's 50 most popular songs on Spotify using their
							API to create four playlists representing the four seasons that
							you can save to your Spotify account!
						</li>
						<li>
							Functional use of a billion Spotify API endpoints, from
							authentication to changing user data
						</li>
						<li>
							Built-in audio player in your browser using the Spotify Web Player
							SDK
						</li>
						<li>
							Layered API calls with useEffect allow for any artist to be typed
							in - changing all the data
						</li>
					</ul>
				</div>
				<div id='funkysimon'></div>
				<div className='between'></div>
				<div className='scrollItem projectContainer'>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<h4 style={{ fontSize: projectTitle }} className='scrollTitle2 '>
							FUNKY SIMON
						</h4>
						<a
							target='_blank'
							rel='noopener noreferrer'
							style={{ fontSize: projectLink }}
							href='https://joshri.github.io/funky-simon'>
							joshri.github.io/funky-simon
						</a>
						<a
							target='_blank'
							rel='noopener noreferrer'
							style={{ fontSize: projectLink }}
							href='https://github.com/joshri/funky-simon'>
							github repo
						</a>
						<iframe
							title='Funky Simon'
							style={{ width: thumbnail, height: thumbnail }}
							src='https://giphy.com/embed/MF0zPdjBcQQqKUbnnn'
							frameBorder='0'
							class='giphy-embed'
							allowFullScreen></iframe>
					</div>
					<ul
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: pSize,
						}}
						className='project'>
						<li>
							Fully functional Simon game website - Increasing difficulty with
							round number and high score
						</li>
						<li>
							setTimeouts galore to add bonus rhythm element indicated by CSS
							along with funky animation
						</li>
						<li>
							HTML audio element uses my stunning GarageBand work in game, along
							with a soundboard!
						</li>
						<li>Hardcoded HTML and CSS animated background!</li>
					</ul>
				</div>
				<div className='between'></div>
				<div id='isithot'></div>
				<div className='scrollItem projectContainer'>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-evenly',
							alignItems: 'center',
						}}>
						<h4 style={{ fontSize: projectTitle }} className='scrollTitle2'>
							IS IT HOT?
						</h4>
						<a
							target='_blank'
							rel='noopener noreferrer'
							style={{ fontSize: projectLink }}
							href='https://is-it-hot-daily.herokuapp.com'>
							is-it-hot-daily.herokuapp.com
						</a>
						<a
							target='_blank'
							rel='noopener noreferrer'
							style={{ fontSize: projectLink, marginBottom: '3px' }}
							href='https://github.com/joshri/is-it-hot'>
							github repo
						</a>
						<iframe
							title='Is It Hot'
							style={{ width: thumbnail, height: thumbnail }}
							src='https://giphy.com/embed/p8tjjUM7AMJeph1syh'
							frameBorder='0'
							class='giphy-embed'
							allowFullScreen></iframe>
					</div>
					<ul
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: pSize,
						}}
						className='project'>
						<li>
							7 free APIs provide the data for my weather app/endless source of
							joy
						</li>
						<li>Function and Class Components with State and React Hooks</li>
						<li>
							Styled Components for a reusable button that refreshes the API
							call.
						</li>
					</ul>
				</div>
			</div>
			<div style={{ height: '20vh' }}></div>
		</div>
	);
}

export default ScrollContainer;
