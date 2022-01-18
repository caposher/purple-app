import { Avatar } from '@shopify/polaris';
import { connect } from 'react-redux';
import { CompanyLogo } from './CompanyLogo';

function _AppHeader({ userImg }) {
  return (
    <header className='app-header   '>
      <div className='container  flex space-between align-center maximum-size'>
        <CompanyLogo />
        <Avatar size='small' source={userImg} />
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    userImg: state.user.imgFile,
  };
};

export const AppHeader = connect(mapStateToProps)(_AppHeader);
