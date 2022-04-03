import './footer.css';
import Link from '../link/link';
import gitHubIcon from '../../images/octocat.svg';
import linkedinIcon from '../../images/linkedin.svg';
import instagramIcon from '../../images/instagram.svg';

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
        <div className="Footer d-flex justify-content-center">
            {
                links.map((link) => {
                    return <Link {...link} key={link.url}/>
                })
            }
        </div>
    );
}

export default Footer;
