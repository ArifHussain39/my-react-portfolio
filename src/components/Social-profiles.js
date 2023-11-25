import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';

export default function Socials() {
    return (
        <div className='container'>
            <h1 className="text-white text-center mb-5">Socials</h1>

            <div className="row justify-content-between">
                <div className="col-2">
                    <a href="https://www.linkedin.com/in/arif-hussain-01395b185/" className="mr-3">
                        <Linkedin size={30} style={{ color: 'white' }} />
                    </a>
                </div>
                <div className="col-2">
                    <a href="https://github.com/ArifHussain39" className="mr-3">
                        <Github size={30} style={{ color: 'white' }} />
                    </a>
                </div>
                <div className="col-2">
                    <a href="https://www.instagram.com/arif.hussain_/" className="mr-3">
                        <Instagram size={30} style={{ color: 'white' }} />
                    </a>
                </div>
                <div className="col-2">
                    <a href="mailto:arif.bssef21@iba-suk.edu.pk" className="mr-3">
                        <Mail size={30} style={{ color: 'white' }} />
                    </a>
                </div>
                <div className="col-2">
                    <a href="tel:+923163401145">
                        <Phone size={30} style={{ color: 'white' }} />
                    </a>
                </div>
            </div>
        </div>
    );
}
