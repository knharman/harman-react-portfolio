import './footer.css';
import Link from '../link/link';

function Footer() {
    const links = [
        {
            title: 'github',
            url: 'https://github.com/knharman'
        },
        {
            title: 'linkedin',
            url: 'https://www.linkedin.com/in/kellie-harman/'
        },
        {
            title: 'instagram',
            url: 'https://www.instagram.com/thebluechannel/'
        }
    ]
    return (
        <div className="Footer">
            {
                links.map((link) => {
                    return <Link title={link.title} url={link.url} key={link.url}/>
                })
            }
        </div>
    );
}

export default Footer;
