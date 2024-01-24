import bigSpringPhoto from '../assets/photos/owner-photos/BigSpring.jpeg'

export default function Home() {
    return (
        <section className='page container'>
            <h1 className="page-header page-header-text">Welcome to Morton's Mementos</h1>
            <div>
                <img src={bigSpringPhoto} className='bold-photo' alt='by the pond' />
            </div>
            <div>
                <p>We're happy to see you!</p>
            </div>
        </section>
    );
}
