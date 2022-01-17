import { CompanyLogo } from './CompanyLogo';

export function AppFooter() {
  const links = ['How it works?', 'About Us', 'FAQ', 'Contact Us', 'Term of Use', 'Privacy Policy'];
  const ShowLinks = links.map((link) => {
    return <li key={link}>{link}</li>;
  });

  return (
    <section className='app-footer flex justify-center'>
      <div className=' container maximum-size'>
        <ul className='links '>{ShowLinks}</ul>
        <div className='link-footer flex align-center'>
          <CompanyLogo />
          <h5>© All right reserved by PURPLE 2021</h5>
        </div>
      </div>
    </section>
  );
}
