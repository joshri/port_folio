import React, { useState, useRef } from 'react';
import title_photo from './images/TitlePhoto2.jpg';
import theme from './audio/PortfolioThemeLowest.mp3';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Title(props) {
	let [loaded, setLoaded] = useState(false);
	let [finished, setFinished] = useState('none');
	setTimeout(() => setFinished('flex'), 24000);

	const audioTag = useRef(null);

	return (
		<div onLoad={window.scrollTo(0, 1)} className='titleContainer'>
			<audio
				id='audio'
				ref={audioTag}
				preload
				onCanPlay={() => {
					setLoaded(true);
					audioTag.current.play();
				}}
				src={
					'https://raw.githubusercontent.com/joshri/port_folio/master/src/audio/PortfolioThemeLowest.mp3'
				}
			/>
			{!loaded ? (
				<div
					style={{
						width: '100%',
						height: '100vh',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'center',
						margin: 0,
					}}>
					<h1>LOADING</h1>
					<h6>Stuck? Give it a second.</h6>
					<h6>
						On mobile? Try this?{' '}
						<Button variant='outline-dark' size='sm'
							onClick={() => {
								setLoaded(true);
								audioTag.current.play();
							}}>
							play?
						</Button>
					</h6>
					<h6 style={{ textDecoration: 'underline' }}>
						<Link to='/'>back to the start</Link>
					</h6>
					<h6 style={{ textDecoration: 'underline' }}>
						<Link to='/home'>onward to the portfolio</Link>
					</h6>
				</div>
			) : (
				<div>
					<motion.div
						animate={{ borderColor: 'black', opacity: 1 }}
						transition={{ duration: 2 }}
						className='row titleEdge'
						style={{ borderBottom: '5px solid #ffcf3d', opacity: 0 }}>
						<h1 className='col zoom'>MEET</h1>
						<h1 className='col zoom forYour'>YOUR</h1>
						<h1 className='col zoom forNew'>NEW</h1>
					</motion.div>

					<div className='nameContainer'>
						<motion.div
							animate={{ scale: 3, opacity: 0 }}
							transition={{ delay: 17.5, duration: 0.5 }}
							className='skillsContainer'>
							<div className='row skillsRow'>
								<h3 className='col skillsItem g'>HTML</h3>
								<h3 className='col skillsItem c'>CSS</h3>
								<h3 className='col skillsItem d' style={{ fontSize: '3.5vw' }}>
									BOOTSTRAP
								</h3>
								<h3 className='col skillsItem h'>SASS</h3>
							</div>
							<div className='row skillsRow'>
								<h3 className='col skillsItem a'>JAVASCRIPT</h3>
								<h3 className='col skillsItem b'>REACT</h3>
							</div>
							<div className='row skillsRow'>
								<h3 className='col skillsItem e'>EXPRESS</h3>
								<h3 className='col skillsItem i'>PYTHON</h3>
								<h3 className='col skillsItem f'>AWS</h3>
							</div>
						</motion.div>
						<motion.img
							animate={{ width: '75%', height: '75%', opacity: 1 }}
							transition={{ delay: 20, duration: 4 }}
							src={title_photo}
							className='image'></motion.img>
						<Link className='link' to='/home'>
							<motion.Button
								style={{ display: finished, fontSize: '175%' }}
								className='link'
								animate={{ opacity: [0, 1], display: 'flex' }}
								transition={{ duration: 2, delay: 24 }}
								variant='danger'>
								ENTER
							</motion.Button>
						</Link>
						<h1 className='title'>JOSHUA</h1>
						<h1 className='title' style={{ animationDelay: '18.5s' }}>
							ISRAEL
						</h1>
					</div>
					<motion.div
						animate={{ borderColor: 'black', opacity: 1 }}
						transition={{ duration: 2 }}
						style={{ borderTop: '5px solid #ffcf3d', opacity: 0 }}
						className='row titleEdge'>
						<h1 className='col zoom forBot'>SOFTWARE</h1>
						<h1 className='col zoom forBot'> ENGINEER</h1>
					</motion.div>
				</div>
			)}
		</div>
	);
}

export default Title;
