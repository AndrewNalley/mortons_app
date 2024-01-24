import babyMarty from '../assets/photos/stock-photos/BabyMarty.jpeg'

export default function Woof() {

    return (
        <section className='page container'>
            <h1 className='page-header page-header-text'>WOOF! ;)</h1>
            <section>
                <img src={babyMarty} alt='Marty the dog' />
            </section>
            <p>Working dogs run on coffee and donuts!!</p>
        </section>
    )
}