import React from "react";

const BasicInfo = () => {
	const Card = ({
		icon,
		title,
		content,
	}: {
		icon: React.ReactNode;
		title: string;
		content: React.ReactNode;
	}) => (
		<li className='flex items-center gap-5'>
			<span className='text-[#b6517e] p-5 shadow-sm rounded-xl shadow-zinc-700'>
				{icon}
			</span>
			<section>
				<h3 className='text-zinc-400'>{title}</h3>
				<p>{content}</p>
			</section>
		</li>
	);

	return (
		<div className='bg-zinc-800 rounded-xl border border-zinc-700 p-5 text-white grid grid-rows-[auto_5%]'>
			<main>
				{" "}
				<section className='border-b border-zinc-600 p-7 pb-12 text-center space-y-10'>
					<h1 className='font-semibold text-6xl text-zinc-300'>
						Ruttika Jadhav
					</h1>
					<p className='bg-zinc-700 p-1 rounded-lg'>
						Software Development Engineer
					</p>
				</section>
				<ul className='space-y-10 pt-12 pl-7'>
					<Card
						icon={
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='size-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
								/>
							</svg>
						}
						title='EMAIL'
						content={
							<a href='mailto:ruttikajadhav@gmail.com'>
								ruttikajadhav@gmail.com
							</a>
						}
					/>

					<Card
						icon={
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='size-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
								/>
							</svg>
						}
						title='PHONE'
						content={<a href='tel:9527495098'>+91 9527495098</a>}
					/>

					<Card
						icon={
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='size-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
								/>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
								/>
							</svg>
						}
						title='LOCATION'
						content={<p>Pune, Maharashtra, India</p>}
					/>
				</ul>
			</main>
			<footer className='flex items-center justify-center pb-10'>
				<section className='flex items-center gap-5'>
					<a
						href='https://www.linkedin.com/in/ruttika-jadhav-31717122b/'
						target='_blank'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							x='0px'
							y='0px'
							width='24'
							height='24'
							viewBox='0,0,256,256'
						>
							<g
								fill='#71717a'
								fill-rule='nonzero'
								stroke='none'
								stroke-width='1'
								stroke-linecap='butt'
								stroke-linejoin='miter'
								stroke-miterlimit='10'
								stroke-dasharray=''
								stroke-dashoffset='0'
								font-family='none'
								font-weight='none'
								font-size='none'
								text-anchor='none'
							>
								<g transform='scale(5.12,5.12)'>
									<path d='M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z' />
								</g>
							</g>
						</svg>
					</a>{" "}
					<a href='https://github.com/UntamedLotus' target='_blank'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							x='0px'
							y='0px'
							width='24'
							height='24'
							viewBox='0,0,256,256'
						>
							<g
								fill='#71717a'
								fill-rule='nonzero'
								stroke='none'
								stroke-width='1'
								stroke-linecap='butt'
								stroke-linejoin='miter'
								stroke-miterlimit='10'
								stroke-dasharray=''
								stroke-dashoffset='0'
								font-family='none'
								font-weight='none'
								font-size='none'
								text-anchor='none'
							>
								<g transform='scale(5.12,5.12)'>
									<path d='M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z'></path>
								</g>
							</g>
						</svg>
					</a>
					<a
						href='https://www.instagram.com/ruru.yin_/'
						target='_blank'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							x='0px'
							y='0px'
							width='30'
							height='30'
							viewBox='0,0,256,256'
						>
							<g
								fill='#71717a'
								fill-rule='nonzero'
								stroke='none'
								stroke-width='1'
								stroke-linecap='butt'
								stroke-linejoin='miter'
								stroke-miterlimit='10'
								stroke-dasharray=''
								stroke-dashoffset='0'
								font-family='none'
								font-weight='none'
								font-size='none'
								text-anchor='none'
							>
								<g transform='scale(8,8)'>
									<path d='M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z'></path>
								</g>
							</g>
						</svg>
					</a>
				</section>
			</footer>
		</div>
	);
};

export default BasicInfo;
