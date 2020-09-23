import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

function Confirm(props) {
	return (
		<div className='confirmContainer'>
			<motion.h1
				animate={{ fontSize: ['1vw', '15vw', '30vw'], opacity: [0, 1, 0] }}
				transition={{ duration: 5 }}
				className='welcome'>
				WELCOME
			</motion.h1>
			<div>
				<motion.p
					animate={{ opacity: 1 }}
					transition={{ delay: 4, duration: 2 }}>
					the next page has an animated introduction with autoplaying audio and
					is quite colorful.
				</motion.p>
				<motion.p
					animate={{ opacity: 1 }}
					transition={{ delay: 5, duration: 2 }}>
					{' '}
					If you're scared, press no party.
				</motion.p>
				<motion.p
					animate={{ opacity: 1 }}
					transition={{ delay: 6, duration: 2 }}>
					Otherwise, I'll see you in about thirty seconds.
				</motion.p>
			</div>
			<div className='partyButtons'>
				<Link to='/party'>
					<Button className='bigButt' variant='outline-dark' size='lg'>
						PARTY!
					</Button>
				</Link>
				<Link to='/home'>
					<Button variant='outline-dark' size='sm'>
						no party.
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default Confirm;
