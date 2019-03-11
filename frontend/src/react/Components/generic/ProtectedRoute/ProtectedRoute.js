import React from 'react';
import PropTypes from 'prop-types';


import { Route, Redirect } from 'react-router-dom';
import Layout from "../../generic/Layout/Layout"

import { connect  } from 'react-redux'
import { checkUserStatus } from '../../../../redux/login/actions'

class ProtectedRoute extends React.PureComponent {

  propTypes = {
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    location: PropTypes.object,
  };

  constructor() {
    super();
    this.state = {
      isLogIn: null,
    };
  }

  componentDidMount() {
    //On check le statut de l'utilisateur auprès du serveur, et on agit en conséquance
    this.props.checkUserStatus().then(this.updateUserStatus);
  }

  //Sera appelé lorsque l'on changera de route
  componentWillReceiveProps(nextProps) {

    console.log('nextprops', nextProps)
    this.setState({
      isLogIn: null,
    });
    //On fait également cette vérification lors d'un changement
    this.props.checkUserStatus().then(this.updateUserStatus(this.props.isLogIn));
  }

  updateUserStatus = isLogIn => {
    if (this.state.isLogIn !== isLogIn) {
      this.setState({
        isLogIn,
      });
    }
  };

  render() {
    const { component: Component, ...rest } = this.props;

    return (
        <Route
          {...rest}
          render={props => {
            if (this.props.isLogIn) {
              return (
                <Layout>
                  <Component {...props} />
                </Layout>
              )
            } else if (this.props.isLogIn !== null) {
              return <Redirect to={'/Connexion'} />;
            } else {
              return null;
            }
          }}
        />
    );
  }
}

const mapStateToProps = state  => ({
    isLogIn : state.isLogIn.map,
  }
)

const mapDispatchToProps = {
  checkUserStatus,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute)

