import { useState } from 'react';
import JobfactorAppBar from './components/JobfactorAppBar';
import SideNav from './components/Navigation/SideNav';
import CommonPage from './pages/common/CommonPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import UsersPage from './pages/Users/UsersPage';
import ConnectionsPage from './pages/Connections/ConnectionsPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<HomePage />} />
                        <Route path="users" element={<UsersPage />} />
                        <Route
                            path="connections"
                            element={<ConnectionsPage />}
                        />
                        {/* <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>
            {/* <JobfactorAppBar /> */}
            {/* <SideNav setSelectedOption={setSelectedOption} />
            <CommonPage selectedOption={selectedOption} /> */}
        </>
    );
}

export default App;
