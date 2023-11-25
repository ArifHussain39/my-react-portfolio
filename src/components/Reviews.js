import ReviewImg from '../assets/imgs/logo-img.jpeg';
import { Star } from 'lucide-react';

export default function Reviews() {
    return (
        <div style={{ textAlign: 'center', color: 'white' }}>
            <h1>Reviews</h1>
            <div className="row mt-5 mb-5">
                <div>
                    <img src={ReviewImg} alt="ReviewImg" style={{ height: '70px' }} />
                    <h3>Arif Hussain</h3>
                    <Star size={20} style={{ color: 'yellow' }} />
                    <Star size={20} style={{ color: 'yellow' }} />
                    <Star size={20} style={{ color: 'yellow' }} />
                    <Star size={20} style={{ color: 'yellow' }} />
                    <Star size={20} style={{ color: 'yellow' }} />
                    <p>Arif is a very talented developer. He is very good at what he does. 
                        <br />He is very professional and always delivers on time. I would highly recommend him.</p>
                </div>
            </div>
        </div>
    );
}