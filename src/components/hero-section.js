import Img from '../assets/imgs/logo-img.jpeg';
import Img2 from '../assets/imgs/hero-devices.svg';
export default function HeroSection() {
    return (
        <>
            <div className="conatiner" style={{ padding: '40px', color: 'white' }}>
                <div className="row">
                    <div className=" col-sm-12 col-lg-12 col-md-12 text-center">
                        <h1 className="dancing-script">Arif Hussain</h1>
                        <h3>Web Applications Developer</h3>
                        <p>
                            I design and code beautifully simple things, and I love what I do.
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className=" col-sm-12 col-lg-12 col-md-12  justify-content-center d-flex">
                        <img src={Img} alt="Arif-Hussain" style={{ height: '150px' }} className="img-fluid hero-img" />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className=" col-sm-12 col-lg-12 col-md-12  justify-content-center d-flex">
                        <img src={Img2} alt="Arif-Hussain" style={{ height: '60%' }} className="img-fluid hero-img" />
                    </div>
                </div>
            </div>
        </>

    );

}

