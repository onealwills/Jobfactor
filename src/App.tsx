import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import UsersPage from './pages/Users/UsersPage';
import ConnectionsPage from './pages/Connections/ConnectionsPage';
import MyJobsPage from './pages/MyJobs/MyJobsPage';
import MessagesPage from './pages/Messages/Messages';
import NotificationsPage from './pages/Notifications/NotificationsPags';
import SettingsPage from './pages/Settings/SettingsPage';
import HelpSupportPage from './pages/HelpSupport/HelpSupportPage';
import MainLayout from './pages/MainLayout/MainLayout';
import CoursesPage from './pages/Courses/CoursesPage';
import Login from './pages/Login/Login';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route
                            index
                            element={<MainLayout children={<HomePage />} />}
                        />
                        <Route
                            path="users"
                            element={<MainLayout children={<UsersPage />} />}
                        />
                        <Route
                            path="connections"
                            element={
                                <MainLayout children={<ConnectionsPage />} />
                            }
                        />
                        <Route
                            path="my-jobs"
                            element={<MainLayout children={<MyJobsPage />} />}
                        />

                        <Route
                            path="messages"
                            element={<MainLayout children={<MessagesPage />} />}
                        />

                        <Route
                            path="courses"
                            element={<MainLayout children={<CoursesPage />} />}
                        />
                        <Route
                            path="notifications"
                            element={
                                <MainLayout children={<NotificationsPage />} />
                            }
                        />
                        <Route
                            path="settings"
                            element={<MainLayout children={<SettingsPage />} />}
                        />
                        <Route
                            path="help-support"
                            element={
                                <MainLayout children={<HelpSupportPage />} />
                            }
                        />
                        <Route
                            path="login"
                            element={<Login />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
