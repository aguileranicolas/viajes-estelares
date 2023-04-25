import './about.css'
import profile from '../assets/images/background/profile.jpg'
import flag from '../assets/images/background/Flag_of_Argentina.svg'
const About = () => {
	return (
		<>
			<div className='about-container'>
				<div className='imagen-container'>
					<img src={profile} alt='Imagen de Hugo Nicolas Aguilera' />
				</div>
				<div className='info-container'>
					<h2>Nombre: Hugo Nicolas Aguilera</h2>
					<p>Edad: 20</p>
					<p>Profesión: Fullstack Developer at Henry Bootcamp</p>
					<p>Cohorte: FT36a</p>
					<p>
						Location: Posadas, Misiones{' '}
						<img src={flag} alt='Banderita de Argentina' />
					</p>
				</div>
			</div>
		</>
	)
}
export default About
