import React from 'react'

function Footer() {
    return (
        <div>
            <div className="container-fluid footer ">

                <div className="container d-flex flex-column">

                <h1 className='mx-4'>TheWorkPlace</h1>
                <p className='mx-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eligendi, tempora itaque deleniti ipsam sed animi obcaecati debitis dicta in magnam voluptatum quibusdam at, excepturi nam expedita, dolorem aperiam sapiente. Magnam rem ratione ex eum consectetur reiciendis obcaecati natus nihil vero quae! Nobis eius magni, voluptas quae officiis harum vel.</p>

                <h1 className='mx-4'>QuickLines</h1>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Amenities</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>

                <h1 className='mx-4'>ImportantLinks</h1>
                <ul>
                    <li>Terms and Condition</li>
                    <li>Legal</li>
                    <li>Business</li>
                    <li>Partners</li>
                </ul>
                <h1 className='mx-4'>Let's Connect</h1>
                <p className='mx-4'>Connect With entrepreneurs, build ypur network, make great business</p>

            </div>
            <li><hr className="divider my-5" /></li>

            <div className="d-flex justify-content-center align-items-center flex-column ">
            <p>Copyright &copy; 2023 Co-Working Space</p>
            <p>Powered by Co-Working Space</p>
            </div>
        </div>
        </div>
    )
}

export default Footer
