import { connect } from 'react-redux';
import App  from '../App';
import {  saveCart } from '../lib/actions';

const AppContainer = connect(
    function mapStateToProps(state) { 
        return { items: state.items }
    }, 
    function mapDispatchToProps(dispatch) { 
        return {
           saveLocalStorage: items =>  dispatch(saveCart(items))
        }
    }
)(App)

export default AppContainer;