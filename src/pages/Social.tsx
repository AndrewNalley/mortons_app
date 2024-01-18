import babyMarty from '../assets/photos/stock-photos/BabyMarty.jpeg'

export default function Woof() {

    return (
        <section className='page'>
            <h2 className='page-header'>WOOF! ;)</h2>
            <img src={babyMarty} alt='Marty the dog' />
            <p>Working dogs run on coffee and donuts!!</p>
        </section>
    )
}