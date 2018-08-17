import React from "react";
import { performLogout } from "../Login/loginActions";
import connect from "react-redux/es/connect/connect";

const Home = (props) => {

    console.log(props);

    const efetuarLogout = () =>{
        const {performLogout, history} = props;
        performLogout(document.cookies, history);
    };

   return <div className="app-content container grid-xl">
        <div className="column col-12 col-gapless px-0">
            <div className="empty">
                <div className="empty-icon"><i className="icon icon-3x icon-people"/></div>
                <p className="empty-title h5">Página Principal</p>
                <p className="empty-title subtitle">Gerenciador Financeiro</p>
                <button onClick={efetuarLogout} className="btn btn-primary"><i className="icon icon-shutdown"/> Logout
                </button>
            </div>
        </div>
    </div>
};

const mapStateToProps = ({ loginReducer }) => ({
    logoutData: loginReducer.logoutData,
    isLoadingLogin: loginReducer.isLoadingLogout,
    logoutError: loginReducer.logoutError
});


const mapDispatchToProps = dispatch => ({
    performLogout: (userAuthToken, history) => {
        dispatch(performLogout(userAuthToken, history));
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

