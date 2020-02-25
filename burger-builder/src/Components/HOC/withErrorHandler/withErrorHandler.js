import React,{useState, useEffect} from 'react';
import Aux from './../Aux';
import Modal from './../../../Containers/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return (props) => {
        const [error, setError] = useState(null)
        
            const requestInterceptor = axios.interceptors.request.use((req) => {
                setError(null)
                return req
            })
            const responseInterceptor = axios.interceptors.response.use(res => res,err => {
                setError(err)
            })
        
            // componentWillUnmout (returning a function)
            useEffect(() => { 
                return () => {
                    axios.interceptors.request.eject(requestInterceptor)
                    axios.interceptors.response.eject(responseInterceptor)
                }
            }, [requestInterceptor, responseInterceptor])
        
            
        
        
        const cancelPurchaseHandler = () => {
            setError(null)
        }

        return (
            <Aux>
                <Modal show={error} cancelPurchase={cancelPurchaseHandler}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props}/>
            </Aux>
        )
    }
}

export default withErrorHandler;