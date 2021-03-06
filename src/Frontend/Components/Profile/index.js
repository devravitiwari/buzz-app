import React,{ Component} from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Activity from '../User/Category/Buzz/Activity';
import LostnFound from '../User/Category/Buzz/LostnFound';
import Logout from '../User/Logout'
import Complaints from '../User/Category/Complaints';
import { asyncgetCurrentUser } from '../../actions';
import Navbar from './Navbar'
import headerimg from '../assets/images/newpic.jpeg';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state ={
            islogout: false,
        }
    }
    componentWillMount(){
        this.props.dispatch(asyncgetCurrentUser());
    }

    /*  componentWillUpdate(){
     const { match } = this.props;
     if(match.url == '/profile'){
     this.props.history.push('/profile/activity');
     }
     }*/

    logout =() =>{
        this.setState({
            islogout:false,
        })
    }
    render() {
        let userDetails = this.props.userReducers.users;
        const { match } = this.props;
        return (
            <div>

                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            LOGO
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a
                                    style={{cursor:'pointer'}}
                                    onClick={(e) => this.setState({islogout:true})}>
                                    <span className="glyphicon glyphicon-log-out"></span>Logout</a>
                                    {
                                        this.state.islogout?
                                            <Logout logout={this.logout}/> :""
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid">
                    <div className="row content">
                        <Navbar userprofile = {userDetails} />

                        <div className="col-sm-9">
                            <Route exact
                                   path={`${match.url}/activity`}
                                   render={props => <Activity {...props} userDetails={userDetails}/>}
                            />
                            <Route exact path={`${match.url}/lostnfound`} component={LostnFound}/>
                            <Route exact path={`${match.url}/complaint`} render={props =>
                                <Complaints {...props} userDetails={userDetails}/>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const ProfileContainer = connect(state=>state)(Profile);
export default ProfileContainer;