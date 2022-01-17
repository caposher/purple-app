import { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../store/actions/userActions';
import { CompanyLogo } from '../cmps/CompanyLogo';
import { Page, Card, FormLayout, TextField, Layout, Select, DropZone, Avatar, Heading } from '@shopify/polaris';

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

  isInvalid = () => {
    return RegExp('^[0-9]{9}$').test(this.props.user.phoneNumber) ? '' : 'Phone number is not valid ';
  };

  render() {
    const { user } = this.props;
    return (
      <main className='main-content container maximum-size '>
        <section className='user-profile  justify-center'>
          <Layout>
            <Layout.Section secondary>
              <div className='user-personal-data'>
                <Card sectioned>
                  <Avatar size='large' name={user.name} source={require('../assets/imgs/osher-cappelli.png')} />
                  <Heading variation='strong'>{user.name}</Heading>
                  <p>{user.email}</p>
                </Card>
              </div>
            </Layout.Section>
            <Layout.Section>
              <div className='user-data'>
                <Page title='User profile'>
                  <Card sectioned>
                    <FormLayout>
                      <DropZone accept='image/*' type='image' allowMultiple={false} onDrop={() => {}}>
                        <DropZone.FileUpload actionTitle='Add file' actionHint='or drop files to upload' />
                      </DropZone>
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
                        <Select
                          options={[{ label: '+972', key: '1' }]}
                          onChange={(value) => this.handleChange('phonePre', value)}
                          value={user.phonePre}
                        />
                        <TextField
                          value={user.phoneNumber}
                          error={this.isInvalid()}
                          onChange={(value) => this.handleChange('phoneNumber', value)}
                        />
                      </FormLayout.Group>
                    </FormLayout>
                  </Card>
                </Page>
              </div>
            </Layout.Section>
          </Layout>
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
