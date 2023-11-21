import Herosection from "./Hero-section";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./Projects";
import Socials from "./Social-profiles";
import Contact from "./Contact";


export default function Welcomepage() {
    return (
        <>
            <Herosection />
            <Projects />
            <Socials />
            <Contact />
        </>
    );
}
