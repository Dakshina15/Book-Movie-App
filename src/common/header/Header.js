import React,{useEffect} from 'react'
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

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [loginStatus, setLoginStatus] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleLogout(){
        const userDetails=JSON.parse(localStorage.getItem("userDetails"))
        userDetails.loginStatus = false
        localStorage.setItem("userDetails", JSON.stringify(userDetails))
        setLoginStatus(false) 
    }

    function updateLoginStatus(){
        const login=JSON.parse(localStorage.getItem("userDetails"))
        if(login&&login.loginStatus){
            setLoginStatus(true)
        }else{
            setLoginStatus(false)
        }
    }

    useEffect(updateLoginStatus)

    return (
        <div>
            <div>
                <div className="header">
                    <img className="logo rotate linear infinite" src={ReactLogo} alt='' />
                    
                    
                    {!loginStatus&&<Button variant="contained" className="btnLogin" onClick={() => { openModal() }} >Login</Button>}
                    {loginStatus&&<Button variant="contained" className="btnLogin" onClick={handleLogout}>Logout</Button>}
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        ariaHideApp={false}>

                        <ModalTabs {...props} setLoginStatus={setLoginStatus} setIsOpen={setIsOpen}/>
                    </Modal>
                </div>

            </div>
        </div>
    )
}
ReactDOM.render(<Header />,document.getElementById('root') );
export default Header






