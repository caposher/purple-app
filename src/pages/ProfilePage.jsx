import { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../store/actions/userActions';
import { CompanyLogo } from '../cmps/CompanyLogo';
import {
  AppProvider,
  Page,
  Card,
  Button,
  FormLayout,
  TextField,
  Layout,
  ChoiceList,
  Icon,
  Select,
  Stack,
  Thumbnail,
  Caption,
  DropZone,
} from '@shopify/polaris';

class _ProfilePage extends Component {
  // state = {
  //   userToEdit: { ...this.props.user },
  //   showImgLoader: false,
  // };

  links = ['How it works?', 'Term of Use', 'About Us', 'Privacy Policy', 'FAQ', 'Contact Us'];
  ShowLinks = this.links.map((link) => {
    return <li key={link}>{link}</li>;
  });

  handleChange = (field, value) => {
    const user = { ...this.props.user, [field]: value };
    this.props.updateUser(user);
  };

  DropZoneExample() {}

  render() {
    const { user } = this.props;
    return (
      <main className='main-content container '>
        <section className='user-profile flex justify-center'>
          <div className='user-personal-data flex column'>
            <img src={require('../assets/imgs/osher-cappelli.png')} alt='' />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
          <div className='user-data'>
            <AppProvider>
              <Page title='User profile'>
                <Card sectioned>
                  <FormLayout>
                    <DropZone accept='image/*' type='image' onDrop={() => {}}></DropZone>
                    <TextField
                      value={user.jobTitle}
                      onChange={(value) => this.handleChange('jobTitle', value)}
                      label='Job title'
                      maxLength={20}
                    />
                    <TextField
                      value={user.company}
                      onChange={(value) => this.handleChange('company', value)}
                      label='Current company'
                      maxLength={20}
                    />
                    <TextField
                      value={user.about}
                      onChange={(value) => this.handleChange('about', value)}
                      label='Account email'
                      multiline={12}
                    />
                    <FormLayout.Group title='Phone number'>
                      <TextField value={user.phonePre} onChange={(value) => this.handleChange('phonePre', value)} />
                      <TextField
                        value={user.phoneNumber}
                        onChange={(value) => this.handleChange('phoneNumber', value)}
                      />
                    </FormLayout.Group>
                  </FormLayout>
                  {/* <Button onClick={() => alert('Button clicked!')}>Example button</Button> */}
                </Card>
              </Page>
            </AppProvider>
            {/* <h3>User profile</h3> */}
          </div>
        </section>
        <section className='more-info'>
          <ul className='links '>{this.ShowLinks}</ul>
          <div className='link-footer flex align-center'>
            <CompanyLogo />
            <h5>&copy All right reserved by PURPLE 2021</h5>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  updateUser,
};

export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(_ProfilePage);
