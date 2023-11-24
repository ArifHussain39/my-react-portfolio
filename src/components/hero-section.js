import Img from '../assets/imgs/logo-img.jpeg';
export default function HeroSection() {
    return (
        <>
            <div className="conatiner" style={{ padding: '40px', color:'white'}}>
                <div className="row">
                    <div className=" col-sm-12 col-lg-12 col-md-12 text-center">
                        <h1 className="dancing-script">Arif Hussain</h1>
                        <h3>Web Applications Developer</h3>
                        <p>Hi, I am a Full Stack Developer. I have 2 years of experience in developing
                            web applications <br /> using ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, HTML, CSS, Bootstrap, Material UI, <br />JavaScript, jQuery, AJAX, JSON, REST API, Git, GitHub, Heroku, Netlify, and Firebase.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className=" col-sm-12 col-lg-12 col-md-12  justify-content-center d-flex">
                        <img src={Img} alt="Arif-Hussain-picture" style={{height:'200px'}} className="img-fluid hero-img"  />
                    </div>
                </div>
            </div>
        </>

    );

}

