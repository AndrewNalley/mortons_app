import { NavLink } from 'react-router-dom'
import weddingBundle1 from '../assets/photos/proj-photos/Craft_Lindsey-34.jpg'
import weddingBundle2 from '../assets/photos/proj-photos/Craft_Lindsey-35.jpg'
import weddingBundle3 from '../assets/photos/proj-photos/Craft_Lindsey-39.jpg'

export default function Package() {

    return (
        <section className='page container'>
            <h1 className='page-header page-header-text'>Custom Wedding Bundle</h1>
            <div>
                    <NavLink className='link-btn' to='form'>Choose your bundle!</NavLink>
            </div>
            <img src={weddingBundle1} className='bold-photo' alt='wedding bundle tray' width={1920} />
            <h3 className='page-header'>We offer a special bundle for your Special Day!</h3>
            <div className='article about'>
                <p>At Morton's Mementos, we love preserving your special moments. To order your custom wedding bundle, select your pieces and give me an idea of your style and colors, then I will do the rest! All you have left to do is enjoy your special day! ❤️

                    Thank you so much for choosing Morton's Mementos! We look forward to making your dreams a reality!
                </p>
            </div>
            <div>
                    <NavLink className='link-btn' to='form'>Choose your bundle!</NavLink>
            </div>

        </section>
    )
}