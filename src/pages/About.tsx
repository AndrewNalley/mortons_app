import ownerPhoto from '../assets/photos/owner-photos/winter.jpeg'
import mementoPhoto from '../assets/photos/proj-photos/Craft_Lindsey-19.jpg'
import div1 from '../assets/SVGs/Other/div1.svg'

export default function About() {
  return (
    <section className='page container'>
      <h1 className='page-header page-header-text'>About</h1>
      <div className='grid'>
        <h4>Wedding Flower Preservation </h4>
        <h4>Resin Coasters and Decorative Serving Trays </h4>
        <h4>Candles, Extracts, and more!</h4>
      </div>
      <div className='article grid about'>
        <img src={ownerPhoto} className='bold-photo photo-center' alt='beach' width={300} />
        <div>
        <br />
        <h3>Hello!</h3>
          <p>Anyone who knows me could tell you the most important thing to me is my baby boy Morton. 🐶🩵 </p>
          <p>He is a Samoyed, almost 2 years old and the bestest boy. The second thing someone who knows me will tell you, is that I love gift giving and saving memories of a special moment. From those loves, this shop was born… </p>
          <p>We started about a year ago, preserving a close friends wedding bouquet, and loved it so much!</p>
          <div className='divider-header'>
            <img src={div1} className='divider-header' alt='divider' />
          </div>
        </div>
      </div>
      <br />
      <div className='article grid about'>
        <div>

          <p>Here at Morton's Mementos, I can preserve your wedding flowers in resin, for you to cherish them forever. You can customize your pieces, with multiple different styles or bring in your favorite serving tray.</p>

          <p>Creating exactly what you want is my top priority and I can't wait to work with you and make those pieces a reality!  </p>
          <div className='divider-header'>
            <img src={div1} className='divider-header' alt='divider' />
          </div>
        </div>
        <img src={mementoPhoto} className='bold-photo' alt='beach' width={600} />
      </div>
    </section>
  )
}