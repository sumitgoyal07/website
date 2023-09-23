import React from 'react'
import furniture from './furniture.jpg'
import image from './/Business_woman_at_home_in_her_bedroom_working_on_her_laptop._(51236863108).jpg'
import smhome from './small-home-study-ideas.jpg'
import image1 from './AdobeStock_132869900.jpeg'

import Footer from './Footer'
function Header() {
    return (
        <div className="home">
        <div className='Home-nav' style={{color:'white'}}>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container mx-4">
                    <a className="navbar-brand " href="/">TheWorkPlace</a>
                </div>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown btn btn-primary btn-sm">
                            <a className="nav-link dropdown-toggle " href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            &#9776;
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Home</a></li>
                                <li><hr className="dropdown-divider" /></li>

                                <li><a className="dropdown-item" href="/">About Us</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Amenities</a></li>
                                <li><hr className="dropdown-divider" /></li>

                                <li><a className="dropdown-item" href="/">Pricing</a></li>
                                <li><hr className="dropdown-divider" /></li>

                                <li><a className="dropdown-item" href="/">Contact</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </nav>
                <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                <h1>A Better Place To Work</h1>
                <p className='container my-4' style={{color:'whitesmoke'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quo expedita commodi officia molestias in neque, esse mollitia aliquam magnam accusantium voluptas asperiores voluptatem, alias beatae deleniti sit quas, veniam accusamus! Quaerat culpa vitae dolore recusandae tempore accusamus odio, iure tempora vero a velit nam exercitationem unde quidem, inventore consequuntur commodi delectus? Debitis consequuntur facilis cum quam. Corporis, quidem provident. In autem, quia expedita perspiciatis molestiae molestias excepturi officiis quo suscipit doloribus, ullam reprehenderit, repellendus tenetur aperiam. Facere delectus suscipit accusantium est consequuntur similique unde ratione minus porro neque, voluptates rem blanditiis consectetur nemo nihil saepe voluptas nesciunt sunt dignissimos?</p>
                <button className='btn btn-primary mt-5'>Learn More &rarr;</button>
                </div>
        </div>
<div className=" aboutus container my-5 mt-5">
<h1>A Place That Helps Growth Of Your Work</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto molestias distinctio voluptatibus! Harum ab totam dolor laudantium voluptatem! Pariatur corrupti, consequatur numquam dolor veritatis fugit nam iure et? Tenetur sint quae sed perspiciatis cum minima assumenda nulla? Eveniet aliquam in reiciendis consequuntur. Non consectetur aut facilis sit praesentium velit animi?</p>
<button className='btn btn-primary my-3'>About US &rarr;</button>

<div className=" container card-home my-5">
    <h1>🕓</h1>
<h2 className=''>24 Hrs Access</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa ea animi quisquam fugit molestiae facilis fuga temporibus architecto accusantium quaerat quo vero iste, nesciunt nemo cupiditate perspiciatis non illum.</p>
</div>

<div className=" container card-home my-5">
    <h1>🚻</h1>
<h2 className=''>Confrence Room</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa ea animi quisquam fugit molestiae facilis fuga temporibus architecto accusantium quaerat quo vero iste, nesciunt nemo cupiditate perspiciatis non illum.</p>
</div>

<div className=" container card-home my-5">
    <h1>🎰</h1>
<h2 className=''>High Speed Internet</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa ea animi quisquam fugit molestiae facilis fuga temporibus architecto accusantium quaerat quo vero iste, nesciunt nemo cupiditate perspiciatis non illum.</p>
</div>

<div className=" container card-home my-5">
    <h1>🧑‍🍳</h1>
<h2 className=''>Full Kitchen</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa ea animi quisquam fugit molestiae facilis fuga temporibus architecto accusantium quaerat quo vero iste, nesciunt nemo cupiditate perspiciatis non illum.</p>
</div>

<div className=" container card-home my-5">
    <h1>🖨️</h1>
<h2 className=''>Wireless Fax & Printer</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa ea animi quisquam fugit molestiae facilis fuga temporibus architecto accusantium quaerat quo vero iste, nesciunt nemo cupiditate perspiciatis non illum.</p>
</div>


</div>
<div className=" image">
    <img className='img1' src={furniture} height={'500px'} width={'600px'} alt="image1" />
    <img className='img2' src={image} height={'500px'} width={'600px'} alt="image2" />
    <h1 className='container textimg'>Space to make your greatest impact.</h1>
    <p className='container textimg my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum in obcaecati voluptas aliquid maiores nemo minima laborum quam temporibus dolorem commodi iusto, amet nisi qui praesentium rem dicta eaque pariatur esse voluptate! Ex voluptatum excepturi tempora repellendus dignissimos eaque obcaecati, rerum labore unde voluptas nisi consequuntur, sit voluptatibus corporis porro.</p>
    <button className='btn btn-outline-light btnimg' style={{color:'white'}}> Get Your Choice &rarr;</button>

</div>

<div className="container  mt-5">
    <h1>We Provides All Facilites For Better Work Environment</h1>
     <p className='my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam officia voluptate, modi quidem vero dolores ad, repellendus est aperiam quod doloremque suscipit consectetur consequatur a, incidunt totam expedita corporis fugit! Aut fugit porro voluptatem dolores error assumenda tempore dolorem sapiente autem, at dolorum molestiae ad numquam debitis perspiciatis repellat quos architecto deleniti doloribus eos odio ut soluta neque corrupti. Ad quae nihil, laboriosam delectus architecto autem cum, officia perspiciatis culpa repudiandae earum odio aperiam itaque repellendus ullam dicta eum. Animi perferendis non voluptatem officiis nostrum eius ratione ea dolore distinctio ipsum aliquam tenetur similique corrupti facilis quas, explicabo ipsa.</p>
      <div className="d-flex icon">
     <h5 className='mt-2'>🏢</h5>
     <h5 className='icon1 mt-2'>🛃</h5>
      </div>
      <div className="d-flex icon">
      <strong className='mt-2'>Flexible Private Office</strong>
      <div className="vertical"></div>
      <strong className='startimg mt-2'>Fully Custom Space</strong>
      </div>
      <button className='btn' style={{color:"blue" , border:"1px solid blue" , position:"relative" , bottom:"30px"}}>Learn More &rarr;</button>
 </div>

<div className=" mt-5 imgages">
<img className='smhome' src={smhome} alt="img" />

<div className="smhome1 mt-5 cardimg">
    <h1 className='container textcardimg'>🛄</h1>
     <h3 className='container textcard'>Anything You Need</h3>
     <p className='container textcard'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem?</p>
</div>
<div className="imagetxt">
<img className='smhome2' src={image1} alt="" />
</div>
<div className="smhome3 mt-5 cardimg">
    <h1 className='container textcardimg'>🛄</h1>
     <h3 className='container textcard'>Anything You Need</h3>
     <p className='container textcard'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem?</p>
</div>
<div className=" container ptext">
<p className='container'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum magni delectus dignissimos repudiandae quam pariatur libero saepe inventore? Eveniet quasi, eum maiores praesentium, ratione minima id amet vel eligendi voluptas ipsa facere earum fuga blanditiis officiis tempora quos. Natus eius temporibus sunt quae totam a ullam deleniti dolore et, magni culpa eveniet obcaecati voluptates unde dolorum architecto maiores. Odio hic minima asperiores maiores culpa? Optio iusto, neque enim nisi est culpa veniam sequi, totam corrupti dolor sit incidunt pariatur sed beatae aut eius.</p>

</div>



      <div className="container d-flex icon2">
     <h5 className='container icon5'>🏢</h5>
     <h5 className='container icon4 mt-2'>🛃</h5>
      </div>
      <div className="container d-flex icon2">
      <strong className='icon6'>Membership Package</strong>
      <strong className='startimg icon7'>Dedicate Ofice Package</strong>
      </div>
      <button className='btn' style={{color:"blue" , border:"1px solid blue" , position:"relative" , bottom:"70px" ,left:"120px"}}>Learn More &rarr;</button>
 </div>

<div className="footer">

    <Footer/>
</div>
 

</div>




    )
}

export default Header
