import React from 'react'
import furniture from './furniture.jpg'
import images from './images.jpg'
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

<div className="image my-5">
    <img src={furniture} height={'400px'} width={'300px'} alt="image1" />
    <img src={images} height={'400px'} width={'300px'} alt="image2" />
</div>

</div>

<Footer/>
        </div>




    )
}

export default Header
