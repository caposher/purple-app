import { AppFooter } from './cmps/AppFooter';
import { AppHeader } from './cmps/AppHeader';
import { ProfilePage } from './pages/ProfilePage';

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <ProfilePage />
      <AppFooter />
    </div>
  );
}

export default App;
