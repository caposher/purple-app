import logoImg from '../assets/imgs/logo.png';
import logoText from '../assets/imgs/logo-text.svg';

export function CompanyLogo() {
  return (
    <div className='logo-container'>
      <img className='logo' src={logoImg} alt='purple logo' />
      <img src={logoText} alt='purple logo' />
    </div>
  );
}
