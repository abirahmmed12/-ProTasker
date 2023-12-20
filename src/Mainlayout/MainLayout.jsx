
import { Outlet } from 'react-router-dom';
import Navbar from '../Shareing/Navbar';
import Footer from '../Shareing/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;