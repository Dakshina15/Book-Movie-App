import React, { useEffect, useState } from 'react'
import "./Header.css"
import ReactLogo from '../../assets/logo.svg';
import { Button } from '@material-ui/core'
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import ModalTabs from '../ModalTabs';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


function Header(props) {
    const initialLoginStatus = localStorage.getItem("userDetails") ? true : false;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [loginStatus, setLoginStatus] = React.useState(false);
    const [isLogin, setIsLogin] = useState(initialLoginStatus);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleLogout() {
        const userDetails = JSON.parse(localStorage.getItem("userDetails"))
        setIsLogin(false)
        userDetails.loginStatus = false
        localStorage.setItem("userDetails", JSON.stringify(userDetails))
        setLoginStatus(false)
    }

    function updateLoginStatus() {
        const login = JSON.parse(localStorage.getItem("userDetails"))
        if (login && login.loginStatus) {
            setLoginStatus(true)
        } else {
            setLoginStatus(false)
        }
    }

    useEffect(updateLoginStatus)

    const bookShowHandler = () => {
        if (!isLogin) {
            setIsOpen(true);
            return;
        }
        if (props.movieId && props.history) {
            props.history.push("/bookshow/" + props.movieId);
        }
    };

    return (
        <div>
            <div>
                <div className="header">
                    <img className="logo rotate linear infinite" src={ReactLogo} alt='' />

                    <div className="groupingButton">

                        {props.movieId && (
                            <Button
                                variant="contained"
                                color="primary"
                                id="btnBookShow"
                                onClick={bookShowHandler}
                            >
                                Book Show
                            </Button>
                        )}

                         {!loginStatus && (
                            <Button
                                variant="contained"
                                className="btnLogin"
                                onClick={() => {
                                    openModal();
                                }}
                            >
                                Login
                            </Button>
                        )}
                        {loginStatus && (
                            <Button
                                variant="contained"
                                className="btnLogin"
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        )} 

                   

                {/* {!loginStatus && <Button variant="contained" className="btnLogin" onClick={() => { openModal() }} >Login</Button>}
                 {loginStatus && <Button variant="contained" className="btnLogin" onClick={handleLogout}>Logout</Button>} */}
 </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        ariaHideApp={false}>

                        <ModalTabs {...props} setLoginStatus={setLoginStatus} setIsOpen={setIsOpen} />

                    </Modal>



                </div>
            </div>
        </div>
    )
}
ReactDOM.render(<Header />, document.getElementById('root'));
export default Header






