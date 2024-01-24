import weddingBundle1 from '../assets/photos/proj-photos/Craft_Lindsey-34.jpg'
import weddingBundle2 from '../assets/photos/proj-photos/Craft_Lindsey-35.jpg'
import weddingBundle3 from '../assets/photos/proj-photos/Craft_Lindsey-39.jpg'

export default function Packages() {

    return (
        <section className='page container'>
            <img src={weddingBundle1} className='bold-photo' alt='wedding bundle tray' width={1920} />
            <h1 className="page-header page-header-text">Custom Wedding Bundle</h1>
            <div className='grid'>
                <img src={weddingBundle2} className='bold-photo' alt='wedding bundle tray' />
                <img src={weddingBundle3} className='bold-photo' alt='wedding bundle tray' />
            </div>
            <h3>We offer a special bundle for your Special Day!</h3>
            <p>More details on this package coming soon!</p>
        </section>
    )
}