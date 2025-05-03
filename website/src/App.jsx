import "./App.css"
import logo from "./assets/Woodlands_ice_cream_logo_March_24.svg"
import hero from "./assets/hero_banner-1858x1095.jpg"
import image from "./assets/chocolate_tub@2x.png"
import img1 from "./assets/mochi-4_600x0_e1c.webp"
import img2 from "./assets/mochi-3_600x0_e1c.webp"
import img3 from "./assets/mochi-1_600x0_e1c.webp"
import img4 from "./assets/mochi-2_600x0_e1c.webp"
import img5 from "./assets/brauni-kuraga-kopiya-min_600x0_e1c.webp"
import img6 from "./assets/lavanda_600x0_e1c.webp"
export default function App(){
  return(
  <div>
    <header className="container">
      <div>
        <img src={logo} alt="logo" />
      </div>
  <nav className="Nav">
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#services">Services</a>
<a href="#contact">Contact us</a>
  </nav>
    </header>
    <section className="hero-section" id="home">
    <img src={hero} alt="hero-section" />
<h1>Woodlands
of Erbistock Ice Cream</h1>
<h4>Spoonfuls of luscious, smooth perfection, lovingly crafted on our organic dairy farm in North Wales</h4>


    </section>
    <h1 id="about">About Us</h1>
    <section className="section" id="about">
      <div className="col1">
    <img src={image} alt="image" /></div>
    <div className="col2">
      <h1>Delicious ice cream, made from our very own organic milk</h1>
      <p>Twenty five years ago, we set out to create top-notch ice cream, using the organic milk made on our farm in Erbistock, a little village hidden away amongst the gentle hills of North East Wales. We soon converted a little barn and from it, eagerly worked towards our goal; to make a family of ice creams that would be second to none in their taste and creamy texture.</p></div>
    </section>

    <section id="services" className="shop-section">
  <h2>Our Flavours</h2>
  <div className="products-grid">
    <div className="product-card">
      <img src={img1} alt="Raspberry Mochi" />
      <h3>Raspberry Mochi</h3>
      <p>Serving weight: 80g</p>
    </div>
    <div className="product-card">
      <img src={img2} alt="Mango Passion Fruit" />
      <h3>Mango Passion Fruit</h3>
      <p>Serving weight: 70g</p>
    </div>
    <div className="product-card">
      <img src={img3} alt="Pistachio Raspberry Mochi" />
      <h3>Pistachio Raspberry Mochi</h3>
      <p>Serving weight: 80g</p>
    </div>
    <div className="product-card">
      <img src={img4} alt="Chocolate Mochi" />
      <h3>Chocolate Mochi</h3>
      <p>Serving weight: 80g</p>
    </div>
    <div className="product-card">
      <img src={img5} alt="Brownies with Apricot" />
      <h3>Brownies with Apricot</h3>
      <p>Serving weight: 80g</p>
    </div>
    <div className="product-card">
      <img src={img6} alt="Hazelnut" />
      <h3>Hazelnut</h3>
      <p>Serving weight: 80g</p>
    </div>
  </div>
</section>
<section id="contact" className="contact-section">
  <h2>Contact Us</h2>
  <p>Have a question or want to get in touch? We'd love to hear from you!</p>
  <form className="contact-form">
    <div className="form-group">
      <input type="text" placeholder="Your Name" required />
    </div>
    <div className="form-group">
      <input type="email" placeholder="Your Email" required />
    </div>
    <div className="form-group">
      <textarea placeholder="Your Message" rows="5" required></textarea>
    </div>
    <button type="submit">Send Message</button>
  </form>
</section>
<footer className="footer">
  <p>&copy; WoodLands All rights are reserved!!</p>
</footer>
  </div>
  )
}
