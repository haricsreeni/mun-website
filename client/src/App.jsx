import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import SidebarTracker from './components/SidebarTracker';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';

function App() {
    return (
        <>
            <Navbar />
            <SidebarTracker />
            <FloatingCTA />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
