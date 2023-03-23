import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import UsersPage from './pages/Users/UsersPage';
import ConnectionsPage from './pages/Connections/ConnectionsPage';
import MyJobsPage from './pages/MyJobs/MyJobsPage';
import MessagesPage from './pages/Messages/Messages';
import CoursesPage from './pages/Courses/ConnectionsPage';
import NotificationsPage from './pages/Notifications/NotificationsPags';
import SettingsPage from './pages/Settings/SettingsPage';
import HelpSupportPage from './pages/HelpSupport/HelpSupportPage';

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
                        <Route path="my-jobs" element={<MyJobsPage />} />
                        <Route path="messages" element={<MessagesPage />} />
                        <Route path="courses" element={<CoursesPage />} />
                        <Route
                            path="notifications"
                            element={<NotificationsPage />}
                        />
                        <Route path="settings" element={<SettingsPage />} />
                        <Route
                            path="help-support"
                            element={<HelpSupportPage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
