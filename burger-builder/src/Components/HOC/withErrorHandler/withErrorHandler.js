import React,{Component} from 'react';
import Aux from './../Aux';
import Modal from './../../../Containers/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
            this.requestInterceptor = axios.interceptors.request.use((req) => {
                this.setState({error: null})
                return req
            })
            this.responseInterceptor = axios.interceptors.response.use(res => res,err => {
                this.setState({error: err})
            })
        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor)
            axios.interceptors.response.eject(this.responseInterceptor)
        }
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} cancelPurchase={this.cancelPurchaseHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
        cancelPurchaseHandler = () => {
            this.setState({error:null})
        }
    }
}

export default withErrorHandler;