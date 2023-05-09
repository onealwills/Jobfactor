import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/context/AuthContext';
import MainLayout from '../pages/MainLayout/MainLayout';
import ConnectionsPage from '../pages/Connections/ConnectionsPage';
import MyJobsPage from '../pages/MyJobs/MyJobsPage';
import MessagesPage from '../pages/Messages/Messages';
import CoursesPage from '../pages/Courses/CoursesPage';
import NotificationsPage from '../pages/Notifications/NotificationsPags';
import HelpSupportPage from '../pages/HelpSupport/HelpSupportPage';
import SettingsPage from '../pages/Settings/SettingsPage';
import HomePage from '../pages/Home/HomePage';
import UsersPage from '../pages/Users/UsersPage';
import PendingConnection from '../pages/Connections/PendingConnection';
import JobFactorThemePage from '../pages/Theme/JobFactorThemePage';
import JobItemDetail from '../pages/MyJobs/components/JobItem/JobItemDetail';
import JobFactorScore from '../pages/JobFactorScore';

function RequireAuth({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    return isAuthenticated ? (
        <>{children}</>
    ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
}

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/*">
                <Route
                    path=""
                    element={
                        <RequireAuth>
                            <MainLayout children={<HomePage />} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="users"
                    element={
                        <RequireAuth>
                            <MainLayout children={<UsersPage />} />
                        </RequireAuth>
                    }
                />

                <Route
                    path="connections"
                    element={
                        <RequireAuth>
                            <MainLayout children={<ConnectionsPage />} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="pending-connections"
                    element={
                        <RequireAuth>
                            <MainLayout children={<PendingConnection />} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="my-jobs"
                    element={
                        <RequireAuth>
                            <MainLayout children={<MyJobsPage />} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="my-jobs/:id"
                    element={
                        <RequireAuth>
                            <MainLayout children={<JobItemDetail />} />
                        </RequireAuth>
                    }
                />

                <Route
                    path="messages"
                    element={
                        <RequireAuth>
                            <MainLayout children={<MessagesPage />} />
                        </RequireAuth>
                    }
                />

                <Route
                    path="courses"
                    element={
                        <RequireAuth>
                            <MainLayout children={<CoursesPage />} />
                        </RequireAuth>
                    }
                />

                <Route
                    path="notifications"
                    element={
                        <RequireAuth>
                            <MainLayout children={<NotificationsPage />} />
                        </RequireAuth>
                    }
                />

                <Route
                    path="settings"
                    element={
                        <RequireAuth>
                            <MainLayout children={<SettingsPage />} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="help-support"
                    element={
                        <RequireAuth>
                            <MainLayout children={<HelpSupportPage />} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="jobfactor-score"
                    element={
                        <RequireAuth>
                            <MainLayout children={<JobFactorScore />} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="theme"
                    element={
                        <RequireAuth>
                            <JobFactorThemePage />
                        </RequireAuth>
                    }
                />
            </Route>
        </Routes>
    );
};

export default PrivateRoutes;
