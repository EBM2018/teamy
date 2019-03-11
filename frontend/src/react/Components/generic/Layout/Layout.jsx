import React from 'react';
import PropTypes from 'prop-types';
import classNames from './layout.module.css';
import SelectMode from "../SelectMode/SelectMode";
import {checkUserStatus} from "../../../../redux/login/actions";
import connect from "react-redux/es/connect/connect";

class Layout extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };
    render() {
        return (
                <div>
                    <header className={classNames.header}>
                      {this.setHeader()}

                    </header>
                    <main>
                        {this.props.children}
                    </main>
                </div>
        )
    }

  setHeader = () =>{
      this.props.checkUserStatus()
        if(this.props.isLogIn === true){
          return <SelectMode/>;
        }else{
          return null;
        }



  }
}

const mapStateToProps = state  => ({
    isLogIn : state.isLogIn.map,
  }
)

const mapDispatchToProps = {
  checkUserStatus,
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)




