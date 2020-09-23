import React from 'react';
import thumbnailPic from './images/ResumeThumbnail.png';
import head from './images/JoshuaIsrael1.jpg';

function ScrollContainer(props) {
	let pSize = 0;
	let resume = 0;
	let thumbnail = 0;
	let projectDes = 0;
	let projectTitle = 0;
	let projectLink = 0;
	let headSize = 0;
	if (window.screen.width > 812) {
		pSize = '1.5vw';
		resume = '600%';
		thumbnail = '200px';
		projectDes = '1.5vw';
		projectTitle = '200%';
		projectLink = '100%';
		headSize = '256px';
	} else {
		pSize = '2.5vw';
		resume = '200%';
		thumbnail = '128px';
		projectDes = '1.5vw';
		projectTitle = '100%';
		projectLink = '50%';
		headSize = '100px';
	}

	return (
		<div style={{ width: '100%', height: '100%', overflow: 'scroll' }}>
			<div className='scollItem'>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: '30vh',
					}}>
					{/* <img
							src={head}
							style={{ maxWidth: headSize, maxHeight: headSize }}
						/> */}
					<h1 className='scrollTitle rotate'>ABOUT</h1>

					<p
						style={{
							opacity: 1,
							fontSize: pSize,
							width: '40%',
							padding: '15px',
							border: '2px solid black',
						}}>
						An artist/educator turned engineer - AKA an entirely self-motivated
						professional collaborator and idea-generator with the confidence to
						present a product in front of strangers who still believes they can
						make the world a better place, plus Javascript.<br></br>
						<br></br>
						I've always wanted to just "put the puzzle pieces together" if that
						makes sense, but now I get to not only put them together, but create
						all the pieces myself! Yes, the 'but now' indicates that I wasn't
						always a software engineer - before learning how to use a computer,
						I performed at the top regional theaters in the country (Ford's
						Theater, Paper Mill Playhouse), at Broadway's Town Hall, and with
						the Phoenix Symphony, Cincinnati Pops, Tulsa Symphony, and many
						more, and taught dance and theater for MTCA
						(mtcollegeauditions.com), Spot-On Arts Academy, and even my alma
						mater NYU Tisch. Check out this article I wrote about my latest
						project for more about how I translated these skills into the
						universe of CODE -
						https://www.linkedin.com/pulse/how-i-achieved-my-dreams-keeping-ying-yang-twins-alive-israel/When
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
					<a href='https://www.linkedin.com/in/joshri/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAADGa3_8B-PZN9vIg0o1QCAsb7MwnOi1YAbY,1600191288978)/'>
						<img
							className='resumeThumb'
							style={{ height: thumbnail, width: thumbnail }}
							src={thumbnailPic}
						/>
					</a>
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
							href='https://for-all-seasons.herokuapp.com'
							style={{ fontSize: projectLink }}>
							for-all-seasons.herokuapp.com
						</a>
						<a
							href='https://github.com/joshri/for-all-seasons'
							style={{ fontSize: projectLink }}>
							github repo
						</a>

						<iframe
							style={{ width: thumbnail, height: thumbnail }}
							src='https://giphy.com/embed/jV4sm6vP1BKq5xH34H'
							frameBorder='0'
							class='giphy-embed'
							allowFullScreen></iframe>
					</div>
					<ul
						className='project'
						style={{
							fontSize: projectDes,
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: pSize,
							listStylePosition: 'inside',
						}}>
						<li>
							Filters an artists 50 most popular songs on Spotify using their
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
							style={{ fontSize: projectLink }}
							href='https://joshri.github.io/funky-simon'>
							joshri.github.io/funky-simon
						</a>
						<a
							style={{ fontSize: projectLink }}
							href='https://github.com/joshri/funky-simon'>
							github repo
						</a>
						<iframe
							style={{ width: thumbnail, height: thumbnail }}
							src='https://giphy.com/embed/MF0zPdjBcQQqKUbnnn'
							frameBorder='0'
							class='giphy-embed'
							allowFullScreen></iframe>
					</div>
					<ul
						style={{
							fontSize: projectDes,
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
							style={{ fontSize: projectLink }}
							href='https://is-it-hot.herokuapp.com'>
							is-it-hot.herokuapp.com
						</a>
						<a
							style={{ fontSize: projectLink, marginBottom: '3px' }}
							href='https://github.com/joshri/is-it-hot'>
							github repo
						</a>
						<iframe
							style={{ width: thumbnail, height: thumbnail }}
							src='https://giphy.com/embed/p8tjjUM7AMJeph1syh'
							frameBorder='0'
							class='giphy-embed'
							allowFullScreen></iframe>
					</div>
					<ul
						style={{
							fontSize: projectDes,
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
