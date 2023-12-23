import Img from '../assets/imgs/logo-img.jpeg';
import Img2 from '../assets/imgs/hero-devices.svg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function HeroSection() {
    const [text] = useTypewriter({
        words: [
            'Web Applications Developer',
        ],
        loop: 1,

    });
    return (
        <>
            <div className="conatiner" style={{ padding: '40px', color: 'white' }}>
                <div className="row">
                    <div className=" col-sm-12 col-lg-12 col-md-12 text-center">

                        <h1 className="dancing-script">Arif Hussain</h1>
                        {/* <h2>Web Applications Developer</h2> */}
                        <h1
                            style={{
                                fontSize: '4rem',
                                fontWeight: '700',
                                letterSpacing: '1px',
                                color: '#6E07F3',
                                fontFamily: 'monospace',
                            }}
                        >
                            {text}
                            <Cursor
                                cursorStyle='_'
                            />
                        </h1>
                        <p
                            className="mt-4"
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: '400',
                                lineHeight: '1.5',
                                letterSpacing: '1px',
                            }}
                        >
                            I design and code beautifully simple things, and I love what I do.
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className=" col-sm-12 col-lg-12 col-md-12  justify-content-center d-flex">
                        <img src={Img} alt="Arif-Hussain" style={{ height: '150px' }} className="img-fluid hero-img" />
                    </div>
                </div>
            </div>

            <div className="mt-5 d-flex justify-content-center">
                <img
                    src={Img2}
                    alt="Arif-Hussain"
                    style={{ width: '100%', height: 'auto', maxWidth: '60%' }}
                    className="img-fluid hero-img"
                />
            </div>

            <div className="Intro-section-outer">
                <div className="Intro-section">

                    <h1>Hi, I’m Arif. Nice to meet you.</h1>
                    <p>
                        Since beginning my journey as a freelance designer nearly 10 <br />years ago, I've done remote work for agencies, consulted <br />for startups, and collaborated with talented people to <br />create digital products for both business and consumer <br />use. I'm quietly confident, naturally curious, <br />and perpetually working on improving my chops one design <br />problem at a time.
                    </p>
                </div>
            </div>
        </>

    );

}

