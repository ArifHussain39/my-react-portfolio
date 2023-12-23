import Img from '../assets/imgs/logo-img.jpeg';
import Img2 from '../assets/imgs/hero-devices.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Card from 'react-bootstrap/Card';

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
                        <img src={Img} alt="Arif-Hussain" style={{ height: '200px' }} className="img-fluid hero-img" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-2  col-sm-1 ">

                </div>
                <div className="col-lg-6 col-md-8  col-sm-10 mt-5 d-flex justify-content-center">
                    <img
                        src={Img2}
                        alt="Arif-Hussain"
                        style={{ height: 'auto', maxHeight: '100%' }}
                        className="img-fluid hero-img"
                    />
                </div>
                <div className="col-lg-3 col-md-2  col-sm-1">

                </div>
            </div>


            <div className="Intro-section-outer ">
                <div className="Intro-section">

                    <h1
                        style={{
                            marginTop: '100px',
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            letterSpacing: '1px',
                            color: 'white',
                            fontFamily: 'monospace',
                        }}
                    >Hi, I’m Arif. Nice to meet you.</h1>
                    <p
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: '400',
                            lineHeight: '1.5',
                            letterSpacing: '1px',
                            color: 'white',
                        }}
                    >
                        Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                    </p>
                </div>
            </div>

            <div className='container-fluid'
                style={{ marginTop: '-80px' }}
            >
                <div className="row">

                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <Card style={{ textAlign: 'center', margin: '20px', fontSize: '25px', fontFamily: 'sans-serif' }}>
                            <Card.Body >
                                <Card.Title style={{
                                    fontFamily: 'monospace',
                                    fontWeight: '600',
                                    fontSize: '2.5rem',
                                }}
                                >Designer</Card.Title>
                                <br />
                                <Card.Text>
                                    I value simple content structure, clean design patterns, and thoughtful interactions.
                                </Card.Text>
                                <br />
                                <Card.Text style={{ color: '#6E07F3' }}>
                                    Things I enjoy designing:
                                </Card.Text>
                                <Card.Text>
                                    UX, UI, Web, Apps, Logos
                                </Card.Text>
                                <br />
                                <Card.Text style={{ color: '#6E07F3' }}>
                                    Design Tools:
                                </Card.Text>
                                <Card.Text>
                                    Figma <br />
                                    Font Awesome <br />
                                    Sketch <br />
                                    Webflow <br />
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <Card style={{ textAlign: 'center', margin: '20px', fontSize: '25px', fontFamily: 'sans-serif' }}>
                            <Card.Body >
                                <Card.Title style={{
                                    fontFamily: 'monospace',
                                    fontWeight: '600',
                                    fontSize: '2.5rem',
                                }}
                                >Web App Developer</Card.Title>
                                <br />
                                <Card.Text>
                                    I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                                </Card.Text>
                                <br />
                                <Card.Text style={{ color: '#6E07F3' }}>
                                    Languages I speak:
                                </Card.Text>
                                <Card.Text>
                                    HTML, CSS, JS, Java, PHP, React
                                </Card.Text>
                                <br />
                                <Card.Text style={{ color: '#6E07F3' }}>
                                    Dev Tools:
                                </Card.Text>
                                <Card.Text>
                                    Visual Studio Code <br />
                                    Git <br />
                                    npm <br />
                                    Bootstrap <br />
                                    Vercel <br />
                                    Notion <br />
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <Card style={{ textAlign: 'center', margin: '20px', fontSize: '25px', fontFamily: 'sans-serif' }}>
                            <Card.Body >
                                <Card.Title style={{
                                    fontFamily: 'monospace',
                                    fontWeight: '600',
                                    fontSize: '2.5rem',
                                }}
                                >Web App Developer</Card.Title>
                                <br />
                                <Card.Text>

                                </Card.Text>
                                <br />
                                <Card.Text style={{ color: '#6E07F3' }}>
                                    Things I enjoy designing:
                                </Card.Text>
                                <Card.Text>
                                    UX, UI, Web, Apps, Logos
                                </Card.Text>
                                <br />
                                <Card.Text style={{ color: '#6E07F3' }}>
                                    Design Tools:
                                </Card.Text>
                                <Card.Text>
                                    Figma <br />
                                    Font Awesome <br />
                                    Sketch <br />
                                    Webflow <br />
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>

    );

}

