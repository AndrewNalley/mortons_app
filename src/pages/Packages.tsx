import FillerText from "../components/FillerText"
import weddingBundle1 from '../assets/photos/proj-photos/Craft_Lindsey-34.jpg'
import weddingBundle2 from '../assets/photos/proj-photos/Craft_Lindsey-35.jpg'
import weddingBundle3 from '../assets/photos/proj-photos/Craft_Lindsey-39.jpg'

export default function Packages() {

    return (
        <section className='page'>
            <img src={weddingBundle1} alt='wedding bundle tray' width={1920} />
            <h1 className="page-header">Custom Wedding Bundle</h1>
            <div className='grid'>
                <img src={weddingBundle2} alt='wedding bundle tray' />
                <img src={weddingBundle3} alt='wedding bundle tray' />
            </div>

            <FillerText />
        </section>
    )
}