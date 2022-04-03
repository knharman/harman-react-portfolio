import './footer.css';
import Link from '../link/link';
import gitHubIcon from '../../images/octocat.svg';
import linkedinIcon from '../../images/linkedin.svg';
import instagramIcon from '../../images/instagram.svg';
import rainbow from '../../images/gifs/rainbow.gif';

function Footer() {
    const links = [
        {
            title: 'github',
            url: 'https://github.com/knharman',
            icon: gitHubIcon
        },
        {
            title: 'linkedin',
            url: 'https://www.linkedin.com/in/kellie-harman/',
            icon: linkedinIcon
        },
        {
            title: 'instagram',
            url: 'https://www.instagram.com/thebluechannel/',
            icon: instagramIcon
        }
    ]
    return (
        <div className="Footer">
            <div className="d-flex justify-content-center">
                {
                    links.map((link) => {
                        return <Link {...link} key={link.url}/>
                    })
                }
            </div>
            <div className="d-flex justify-content-center align-items-baseline mb-3 gap">
                <img className="mx-1 rainbow" src={rainbow} alt="rainbow gif" />
                <span className="mx-1">Copyright Kellie Harman 2022</span>
            </div>
        </div>
    );
}

export default Footer;
