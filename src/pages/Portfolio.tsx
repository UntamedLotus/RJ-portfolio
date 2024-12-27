import HealinkLogo from "../assets/Healink.jpeg";
import ViaBrokerLogo from "../assets/ViaBroker.png";
import ScrapcartLogo from "../assets/Scrapcart.png";
import AlcroenLogo from "../assets/app-title.png";

const Portfolio = () => {
	return (
		<div className='px-12'>
			<section className='grid grid-cols-3 gap-8'>
				<div className='border border-zinc-700 rounded-3xl'>
					<div className='w-full h-52'>
						<img
							className='w-full h-full object-content rounded-t-3xl'
							src={HealinkLogo}
							alt='Project logo'
						/>
					</div>
					<section className='px-4 py-2'>
						<h2 className='text-xl'>HeaLink</h2>
						<p className='text-sm text-zinc-500'>Healthcare</p>
					</section>
				</div>

				<div className='border border-zinc-700 rounded-3xl'>
					<div className='w-full h-52'>
						<img
							className='w-full h-full object-cover rounded-t-3xl'
							src={ViaBrokerLogo}
							alt='Project logo'
						/>
					</div>
					<section className='px-4 py-2'>
						<h2 className='text-xl'>Via Broker</h2>
						<p className='text-sm text-zinc-500'>Real Estate</p>
					</section>
				</div>

				<div className='border border-zinc-700 rounded-3xl'>
					<div className='w-full h-52'>
						<img
							className='w-full h-full object-cover rounded-t-3xl'
							src={ScrapcartLogo}
							alt='Project logo'
						/>
					</div>
					<section className='px-4 py-2'>
						<h2 className='text-xl'>Scrapcart</h2>
						<p className='text-sm text-zinc-500'>
							Business to customers
						</p>
					</section>
				</div>

				<div className='border border-zinc-700 rounded-3xl'>
					<div className='w-full h-52'>
						<img
							className='w-full h-full object-content bg-white rounded-t-3xl'
							src={AlcroenLogo}
							alt='Project logo'
						/>
					</div>
					<section className='px-4 py-2'>
						<h2 className='text-xl'>Alcroen</h2>
						<p className='text-sm text-zinc-500'>Healthcare</p>
					</section>
				</div>
			</section>
		</div>
	);
};

export default Portfolio;
