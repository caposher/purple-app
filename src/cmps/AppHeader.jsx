import { CompanyLogo } from './CompanyLogo';

export function AppHeader() {
  return (
    <header className='app-header container  flex space-between align-center '>
      <CompanyLogo />
      <div>
        <img className='user-img' src={require('../assets/imgs/osher-cappelli.png')} alt='user' />
      </div>
    </header>
  );
}
