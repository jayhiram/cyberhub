import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faEnvelope, faHome, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';

import logo from '../components/images/logo.jpeg';
import CEO from '../components/images/CEO.jpeg';
import sales from '../components/images/sales.png';
import services from '../components/images/services.png';

import phonecases from '../components/images/phonecases.png';
import laptop from '../components/images/laptop.jpg';
import phoneaccessories from '../components/images/phoneaccessories.jpg';
import electronics from '../components/images/electronics.jpg';
import stationary2 from '../components/images/stationary2.jpg';


import extension from '../components/images/extension.jpg';
import watch from '../components/images/watch.jpg';
import stationery from '../components/images/stationery.jpg';
import powerbank from '../components/images/powerbank.jpg';

import earbuds from '../components/images/earbuds.jpg';
import earpods from '../components/images/earpods.jpg';

import bluetooth from '../components/images/bluetooth.jpg';
import earphones from '../components/images/earphones.jpg';
import bulb from '../components/images/bulb.jpg';
import charger from '../components/images/charger.jpg';
import extensions from '../components/images/extensions.jpg';
import headphones from '../components/images/headphones.jpg';
import keyboard from '../components/images/keyboard.jpg';
import charger2 from '../components/images/charger2.jpg';
import stationary1 from '../components/images/stationary1.jpg';

import cables from '../components/images/cables.jpg';
import screenprotector from '../components/images/screenprotector.jpg';
import hdmicable from '../components/images/hdmicable.png';
import mousepads from '../components/images/mousepads.jpg';
import usbflash from '../components/images/usbflash.jpg';
import usbhubs from '../components/images/usbhubs.jpg';
import laptopbag from '../components/images/laptopbag.jpg';
import laptopcharger from '../components/images/laptopcharger.jpg';
import laptopscreen from '../components/images/laptopscreen.jpg';
import monitor from '../components/images/monitor.jpg';
import wirelessmouse from '../components/images/wirelessmouse.jpg';
import wiredkey from '../components/images/wiredkey.jpg';
import printer from '../components/images/printer.jpg';
import fan from '../components/images/fan.jpg';
import ram from '../components/images/ram.jpg';
import typec from '../components/images/typec.jpg';
import wirelesskey from '../components/images/wirelesskey.jpg';




import './Homepage.css';

function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handlePurchaseClick = () => {
    const productName = 'Phone cases';
    const productImageURL = window.location.origin + phonecases; // Generates the full URL of the image
    const message = `Is this available?\nProduct: ${productName}\nImage: ${productImageURL}`;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
  };

  const products = [
    { name: 'Keyboards', image: wiredkey, price: 'KES 850-1,000' },
    { name: 'Phone cases', image: phonecases, price: 'KES 500-1,500' },
    { name: 'Bluetooth', image: bluetooth, price: 'KES 2,000-16,000' },
    { name: 'Laptops', image: laptop, price: 'KES 20,000 - 110,000' },
    { name: 'Extension', image: extension, price: 'KES 450-2,500' },
{ name: 'Stationeries', image: stationery, price: 'KES 100-50,000' },
    { name: 'Watch', image: watch, price: 'KES 500 - 4,500' },
    { name: 'Power Bank', image: powerbank, price: 'KES 2,800-35,000' },
    { name: 'Oraimo Earpods', image: earbuds, price: 'KES 3,000-40,000' },
    { name: 'Oraimo Earbuds', image: earpods, price: 'KES 1,000 - 6,000' },
 { name: 'Bluetooth Earphones', image: earphones, price: 'KES 1,000-6,000' },
    { name: 'Phone Chargers', image: charger2, price: 'KES 450 - 2,800' },

    { name: 'Wireless keyboards', image: keyboard, price: 'KES 100-500' },

    { name: 'Quality Bulbs', image: bulb, price: 'KES 200-3,000' },
    { name: 'BT Headphones', image: headphones, price: 'KES 850 - 10,000' },
    { name: 'Extensions', image: extensions, price: 'KES 450-2,500' },
    { name: 'Complete Charger', image: charger, price: 'KES 600-4,500' },
    { name: 'All Stationery', image: stationary1, price: 'KES 100-10,000' },
    { name: 'Screen Protector', image: screenprotector, price: 'KES 100-1,500' },
    { name: 'HDMI cables', image: hdmicable, price: 'KES 800 - 4,500' },
    { name: 'Mouse pads', image: mousepads, price: 'KES 200-600' },
    { name: 'USB Flash', image: usbflash, price: 'KES 600-4,500' },
    { name: 'USB Hubs', image: usbhubs, price: 'KES 1,000-6,000' },
    { name: 'Cables', image: cables, price: 'KES 400-1500' },
    { name: 'Laptop bag', image: laptopbag, price: 'KES 1,600-7,500' },

    { name: 'Laptop charger', image: laptopcharger, price: 'KES 1,600 - 6,000' },
    { name: 'laptop screen', image: laptopscreen, price: 'KES 10,000-50,000' },
    { name: 'Type C charger', image: typec, price: 'KES 800-2,000' },
    { name: 'Wireless keyboard', image: wirelesskey, price: 'KES 400-1000' },
    { name: 'wired keyboard', image: wiredkey, price: 'KES 200 - 600' },
    { name: 'Wireless mouse', image: wirelessmouse, price: 'KES 900-1,900' },
    { name: 'Printer', image: printer, price: 'KES 25,000-660,000' },
    { name: 'Monitor', image: monitor, price: 'KES 5,000-25,000' },
    { name: 'Fan', image: fan, price: 'KES 3,500-40,000' },
    { name: 'RAM', image: ram, price: 'KES 2,500-20,000' },
  ]




  return (
    <div className="App">

<nav>
<div className='logo-container'>
            <img src={logo} alt="logo" />

            </div>

  <FontAwesomeIcon
    icon={menuOpen ? faXmark : faBars}
    className="menu-icon"
    onClick={handleMenuToggle}
  />
  <div className="nav-icons">
  <a href="mailto:brandcyber003@gmail.com">
  <FontAwesomeIcon icon={faEnvelope} /> Email Us
</a>
<a href="https://wa.me/+254112763036" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us
</a>
  </div>
  <ul className={menuOpen ? 'active' : ''}>
    <li>
      <a href="#home" onClick={handleLinkClick}>
        <FontAwesomeIcon icon={faHome} />
      </a>
    </li>
    <li>
      <a href="#about" onClick={handleLinkClick}>About Us</a>
    </li>
    <li>
      <a href="#products" onClick={handleLinkClick}>Products</a>
    </li>
    <li>
      <a href="#services" onClick={handleLinkClick}>Services</a>
    </li>
    <li>
      <a href="#shop" onClick={handleLinkClick}>Shop</a>
    </li>
    <li>
      <a href="#offers" onClick={handleLinkClick}>Special Offers</a>
    </li>
    <li>
      <a href="#faq" onClick={handleLinkClick}>FAQs</a>
    </li>
    <li>
      <a href="#contact" onClick={handleLinkClick}>Contact Us</a>
    </li>
  </ul>
</nav>



      <main id="home">
      
        <div className='welcome-section'>
        <h1>Welcome to BRAND CYBER & STATIONERY</h1>
        <img src={logo} alt="logo" />
        <div class="card">
            <p>Your one-stop shop for all stationery,
               tech products, and phone accessories.</p>
        </div>
        <div>
        <button>
        <a href="#shop" onClick={handleLinkClick}>Shop Now</a>
  
</button>
<button>
<a href="#contact" onClick={handleLinkClick}>Contact Us</a>
</button>

        </div>
        </div>



        <section id="about">
        <h2>About Us</h2>
<p>BRAND CYBER & STATIONERY is your premier destination for all your stationery,
   technology, and accessory needs. We pride ourselves on offering top-quality 
  products and services to cater to both personal and professional requirements.</p>
<p>At BRAND CYBER & STATIONERY, we understand 
  the importance of staying ahead in a fast-paced 
  world. That's why we constantly update our inventory with the latest tech trends 
  and timeless stationery classics, ensuring you have access to the tools you need to succeed.</p>
<p>Our mission is simple: to provide excellence 
  and innovation in every product and service 
  we offer. We strive to ensure customer 
  satisfaction at every step of the journey,
   from browsing our extensive range of products
    to receiving top-notch support and assistance.</p>
<p>But our commitment doesn't stop there.
   We're also deeply rooted in our community,
    actively supporting local initiatives
     and fostering a culture of sustainability. 
     From eco-friendly stationery options to
      responsible business practices, we're 
      dedicated to making a positive impact,
       one purchase at a time.</p>
<p>Experience convenience, quality, and
   reliability with every purchase at BRAND 
   CYBER & STATIONERY. Discover the difference when you choose us for your stationery and tech needs.</p>


            <h2>Our Team</h2>
            <div className="team">
            <div className="team-member">
              <img src={CEO} alt="CEO" />
              <h4>Mr. Zac Muchiri</h4>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src={sales} alt="sales" />
              <h4>Madam Peris</h4>
              <p>Sales Person</p>
            </div>
            <div className="team-member">
              <img src={services} alt="services" />
              <h4>Miss Rebecca</h4>
              <p>Service Provider</p>
            </div>
          </div>
        </section>



        <section id="products">
  <h2>Our Products</h2>
  <div className="product-list">
  <div className="product-item">
    <h3>Office Supplies</h3>
    <div className="product-content">
      <img src={stationary2} alt="" />
      <ul>
        <li>Pens & Pencils</li>
        <li>Notebooks</li>
        <li>Staplers</li>
        <li>Folders & Binders</li>
        <li>Desk Organizers</li>
        <li>Mouse Pads</li>
        <li>Laptop Sleeves/Cases</li>
        <li>USB Flash Drives</li>
        <li>Passport Holders</li>
        <li>Sunglasses</li>
      </ul>
    </div>
  </div>
  <div className="product-item">
    <h3>Electronics</h3>
    <div className="product-content">
      <img src={electronics} alt="" />
      <ul>
        <li>Laptops</li>
        <li>Desktops</li>
        <li>Monitors</li>
        <li>Keyboards & Mice</li>
        <li>Printers</li>
        <li>Phone Cases</li>
        <li>Charging Cables</li>
        <li>Earphones & Headphones</li>
        <li>Screen Protectors</li>
        <li>PopSockets</li>
      </ul>
    </div>
  </div>
  <div className="product-item">
    <h3>Accessories</h3>
    <div className="product-content">
      <img src={phoneaccessories} alt="" />
      <ul>
        <li>Oraimo Earphones</li>
        <li>Bluetooth Earphones</li>
        <li>Wireless Keyboards</li>
        <li>Quality Bulbs</li>
        <li>BT Headphones</li>
        <li>Extensions</li>
        <li>Complete Charger</li>
        <li>Wireless keyboards</li>
        <li>BT Headphones</li>
        <li>Extensions</li>
      </ul>
    </div>
  </div>
</div>
</section>
    

<section id="services">
  <h2>Our Services</h2>
  <div className="service-cards">
    <div className="service-card">
      <h3>Tax Services</h3>
      <ul>
        <li>
          <h4>Filing KRA Returns</h4>
          <ul>
            <li>Nil Returns</li>
            <li>PAYE</li>
            <li>Company Nil Return</li>
          </ul>
         
        </li>
        <li>
          <h4>KRA PIN Services</h4>
          <ul>
            <li>New KRA PIN Application</li>
            <li>KRA PIN Retrieval</li>
            <li>KRA Certificate Reprinting</li>
            <li>KRA PIN Email Retrieval</li>
          </ul>
        </li>
        <li>
          <h4>KRA Information Updates</h4>
          <ul>
            <li>KRA Email Change</li>
            <li>KRA Penalty Waiver/Removal</li>
          </ul>
        </li>
      </ul>
</div>

    <div className="service-card">
      <h3>Document Services</h3>
      <ul>
        <li>
          <h4>Printing & Photocopying</h4>
          <ul>
            <li>General Printing</li>
            <li>Photocopying</li>
            <li>Typesetting</li>
          </ul>
        </li>
        <li>
          <h4>Lamination</h4>
          <ul>
            <li>Document Lamination</li>
          </ul>
        </li>
      </ul>
    </div>

    <div className="service-card">
      <h3>Photography Services</h3>
      <ul>
        <li>Passport Pictures</li>
      </ul>
      
    </div>

    <div className="service-card">
      <h3>Government and Legal Services</h3>
      <ul>
        <li>
          <h4>KRA Registrations</h4>
          <ul>
            <li>New KRA PIN Application</li>
          </ul>
        </li>
        <li>IFMIS</li>
        <li>
          <h4>TSC Services</h4>
          <ul>
            <li>TSC Payslip Account Opening</li>
            <li>TSC Number Application</li>
            <li>TSC Email Activation</li>
            <li>TSC Phone Number Update</li>
          </ul>
        </li>
        <li>
          <h4>NHIF and NSSF Services</h4>
          <ul>
            <li>NHIF Registration</li>
            <li>NHIF Number Retrieval</li>
            <li>NSSF Registration</li>
          </ul>
        </li>
        <li>
          <h4>E-Citizen Services</h4>
          <ul>
            <li>All E-Citizen Services</li>
            <li>E-Citizen Registration</li>
            <li>Change of Mobile Number and Email in E-Citizen Account</li>
          </ul>
        </li>
        <li>
          <h4>NTSA Services</h4>
          <ul>
            <li>All NTSA Services</li>
          </ul>
        </li>
      </ul>
      
    </div>

    <div className="service-card">
      <h3>Compliance and Certification Services</h3>
      <ul>
        <li>Tax Compliance Certificate</li>
        <li>Good Conduct Application</li>
        <li>Helb Compliance Certificate</li>
      </ul>
    </div>

    <div className="service-card">
      <h3>Business Services</h3>
      <ul>
        <li>
          <h4>Business Registration</h4>
          <ul>
            <li>Business Registration</li>
            <li>Limited Company and Group KRA PIN Registration</li>
          </ul>
        </li>
        <li>Registrar of Companies Returns</li>
        <li>VAT Services</li>
        <li>MRI (Monthly Rental Income)</li>
      </ul>
  
    </div>

    <div className="service-card">
      <h3>Application Services</h3>
      <ul>
        <li>CHRIS Account Opening</li>
        <li>NHIF Number Retrieval</li>
        <li>Passport Application</li>
        <li>Birth Certificate Application</li>
      </ul>
     
    </div>

    <div className="service-card">
      <h3>Miscellaneous Services</h3>
      <ul>
        <li>Browsing and Data Entry</li>
      </ul>
     
    </div>

    <div className="service-card">
      <h3>Custom Printing</h3>
      <p>We offer a variety of custom printing services including business cards, 
        flyers, brochures, posters, and banners.</p>
        
    </div>

    <div className="service-card">
      <h3>IT Services</h3>
      <ul>
        <li>Computer Repair</li>
        <li>Software Installation</li>
        <li>Data Recovery</li>
        <li>Network Setup</li>
        <li>Technical Support</li>
      </ul>
     
    </div>

    <div className="service-card">
      <h3>Phone Repair</h3>
      <ul>
        <li>Screen Replacement</li>
        <li>Battery Replacement</li>
        <li>Button & Camera Repairs</li>
        <li>Water Damage Repair</li>
        <li>General Diagnostics</li>
      </ul>
      
    </div>
  </div>
</section>


<section id="shop">
      <h2>Shop</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>Various options available</p>
            <p>{product.price}</p>
            <button onClick={() => handlePurchaseClick(product.name, product.image)}>Purchase</button>
          </div>
        ))}
      </div>
      <button>
      <a href="#shop" onClick={handleLinkClick}>See More</a>
      </button>
    </section>

    <section id="offers">
  <h2>Special Offers</h2>
  <div class="offer-list">
    <div class="offer-item">
      <h3>Discount on Stationery</h3>
      <p>Revitalize your workspace with our exceptional stationery collection 
        nd enjoy a 20% discount
         on all stationery items. From pens and notebooks to desk organizers and folders,
          find everything you need to boost productivity. Hurry, this limited-time 
          offer won't last long!</p>
    </div>
    <div class="offer-item">
      <h3>Bundle Deals</h3>
      <p>Upgrade your tech arsenal with our unbeatable bundle deals.
         Purchase a laptop and receive a complimentary mouse and keyboard,
          Whether you're a student, professional,
          or gaming enthusiast, our bundle deals offer exceptional value and performance.</p>
    </div>
    <div class="offer-item">
      <h3>Clearance Sale</h3>
      <p>Explore our clearance sale and discover incredible savings of
         on select phone accessories. From stylish cases to
          practical chargers and innovative gadgets, seize this opportunity to 
          accessorize your device while stocks last! Don't miss out on these amazing deals.</p>
    </div>
  </div>
</section>


<p>Experience the convenience and affordability of shopping at 
  BRAND CYBER & STATIONERY. Shop now and elevate your stationery
   and tech game with our exclusive offers!</p>

<section id="faq">
  <h2>FAQs</h2>
  <div class="faq-list">
    <div class="faq-item">
      <h3>Q: Do you offer services online?</h3>
      <p><strong>A:</strong> Yes, we proudly serve our services online.
       Whether you're looking for tax services,documents services,tech products, or personalized services,
        we're here to meet your needs.</p>
    </div>
    <div class="faq-item">
      <h3>Q: What are your store hours?</h3>
      <p><strong>A:</strong> Our store hours may vary, but we're typically open [from 7am-7pm]. 
      Feel free to visit us during these times to explore our products and services.</p>
    </div>
    <div class="faq-item">
      <h3>Q: Do you offer delivery?</h3>
      <p><strong>A:</strong> Yes, we offer delivery services to all our customers. 
      Simply place your order and contact us directly to arrange delivery.</p>
    </div>
    <div class="faq-item">
      <h3>Q: What payment methods do you accept?</h3>
      <p><strong>A:</strong> We accept various payment methods, including cash, credit/debit cards, and mobile payments.
       Rest assured, we strive to make your shopping experience convenient and seamless.</p>
    </div>
    <div class="faq-item">
      <h3>Q: Do you offer any discounts?</h3>
      <p><strong>A:</strong> Yes, we occasionally offer special discounts and promotions for our customers.
       Keep an eye on our website or visit our store to stay updated on the latest deals.</p>
    </div>
  </div>
</section>

        <section id="contact">
          <h2>Contact Us</h2>
          <form>
            <label>Name:</label>
            <input type="text" name="name" required />
            <label>Email:</label>
            <input type="email" name="email" required />
            <label>Message:</label>
            <textarea name="message" required></textarea>
            <button type="submit">Send</button>
          </form> 
        </section>
      </main>

      <footer>
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#offers">Special Offers</a></li>  
          </ul>
        </div>
       
        <div className="services-contact">
          <h4>Reach Us for any service</h4>
          <a href="brandcyber003@gmail.com">
  <FontAwesomeIcon icon={faEnvelope} /> Email Us
</a>
<a href="tel:+254112763036">
  <FontAwesomeIcon icon={faPhone} /> Call Us
</a>
<a href="https://wa.me/+254112763036" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us
</a>   
        </div>

        <div className="contact-info">
          <h4>Contact Information</h4>
          <p>Phone: +254112763036</p>
          <p>Email: brandcyber003@gmail.com</p>
          <p>Kilifi Watergate Building,opposite Co-operative bank</p>
        </div>



        <div className="legal">
          <p>&copy; 2024 BRAND CYBER & STATIONERY. All rights reserved.</p>
        </div>
        
      </footer>
      
    </div>
  );
}

export default Homepage;