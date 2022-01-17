import { Avatar } from '@shopify/polaris';
import { CompanyLogo } from './CompanyLogo';

export function AppHeader() {
  return (
    <header className='app-header   '>
      <div className='container  flex space-between align-center maximum-size'>
        <CompanyLogo />
        <Avatar size='small' source={require('../assets/imgs/osher-cappelli.png')} />
      </div>
    </header>
  );
}
