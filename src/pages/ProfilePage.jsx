import { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../store/actions/userActions';
import { CompanyLogo } from '../cmps/CompanyLogo';
import { Page, Card, FormLayout, TextField, Layout, Select, DropZone, Avatar, Heading } from '@shopify/polaris';

class _ProfilePage extends Component {
  state = {
    showLoader: false,
  };

  renderInputs() {
    const inputFields = [
      { field: 'jobTitle', label: 'Job title', params: { maxLength: 20 } },
      { field: 'company', label: 'Current company', params: { maxLength: 20 } },
      { field: 'about', label: 'Account email', params: { multiline: 12 } },
    ];

    return inputFields.map((input) => {
      return (
        <TextField
          key={input.field}
          value={this.props.user[input.field]}
          onChange={(value) => this.handleChange(input.field, value)}
          onFocus={() => this.setState({ showLoader: true })}
          onBlur={() => this.setState({ showLoader: false })}
          label={input.label}
          maxLength={input.params.maxLength}
          multiline={input.params.multiline}
        />
      );
    });
  }

  handleChange = (field, value) => {
    const user = { ...this.props.user, [field]: value };
    this.props.updateUser(user);
  };

  handleDrop = (files, acceptedFile) => {
    // debugger;
    const img = URL.createObjectURL(acceptedFile[0]);
    const user = { ...this.props.user, imgFile: img };
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
                  {/* <Avatar size='large' name={user.name} source={require('../assets/imgs/osher-cappelli.png')} /> */}
                  <Avatar size='large' name={user.name} source={user.imgFile} />
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
                      {this.state.showLoader && (
                        <DropZone accept='image/*' type='image' allowMultiple={false} onDrop={this.handleDrop}>
                          <DropZone.FileUpload actionTitle='Add file' actionHint='or drop files to upload' />
                        </DropZone>
                      )}
                      {this.renderInputs()}
                      {/* <TextField
                        value={user.jobTitle}
                        onChange={(value) => this.handleChange('jobTitle', value)}
                        onFocus={() => this.setState({ showLoader: true })}
                        onBlur={() => this.setState({ showLoader: false })}
                        label='Job title'
                        maxLength={20}
                      />
                      <TextField
                        value={user.company}
                        onChange={(value) => this.handleChange('company', value)}
                        onFocus={() => this.setState({ showLoader: true })}
                        onBlur={() => this.setState({ showLoader: false })}
                        label='Current company'
                        maxLength={20}
                      />
                      <TextField
                        value={user.about}
                        onChange={(value) => this.handleChange('about', value)}
                        onFocus={() => this.setState({ showLoader: true })}
                        onBlur={() => this.setState({ showLoader: false })}
                        label='Account email'
                        multiline={12}
                      /> */}
                      <FormLayout.Group title='Phone number'>
                        <Select
                          options={[{ label: '+972', key: '1' }]}
                          onChange={(value) => this.handleChange('phonePre', value)}
                          onFocus={() => this.setState({ showLoader: true })}
                          onBlur={() => this.setState({ showLoader: false })}
                          value={user.phonePre}
                        />
                        <TextField
                          value={user.phoneNumber}
                          error={this.isInvalid()}
                          onChange={(value) => this.handleChange('phoneNumber', value)}
                          onFocus={() => this.setState({ showLoader: true })}
                          onBlur={() => this.setState({ showLoader: false })}
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
