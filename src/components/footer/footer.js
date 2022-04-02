import './footer.css';
import Link from '../link/link';

function Footer() {
    const links = [
        {
            title: 'github',
            url: '#'
        },
        {
            title: 'linkedin',
            url: '#'
        },
        {
            title: 'instagram',
            url: '#'
        }
    ]
  return (
    <div className="Footer">
      {
          links.map((link) => {
              return <Link title={link.title} url={link.url} />
          })
      }
    </div>
  );
}

export default Footer;
