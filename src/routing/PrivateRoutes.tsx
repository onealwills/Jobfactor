import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/context/AuthContext';
import MainLayout from '../pages/MainLayout/MainLayout';
import ConnectionsPage from '../pages/Connections/ConnectionsPage';
import MyJobsPage from '../pages/MyJobs/MyJobsPage';
import MessagesPage from '../pages/Messages/Messages';
import ReviewsPage from '../pages/Reviews';
import CoursesPage from '../pages/Courses/CoursesPage';
import NotificationsPage from '../pages/Notifications/NotificationsPags';
import HelpSupportPage from '../pages/HelpSupport/HelpSupportPage';
import SettingsPage from '../pages/Settings/SettingsPage';
import HomePage from '../pages/Home/HomePage';
import UsersPage from '../pages/Users';
import Activities from '../pages/Activities/ActivitiesPage';
import PendingConnection from '../pages/Connections/PendingConnection';
import JobFactorThemePage from '../pages/Theme/JobFactorThemePage';
import JobItemDetail from '../pages/MyJobs/components/JobItem/JobItemDetail';
import JobFactorScore from '../pages/JobFactorScore';
import JobPostings from '../pages/MyJobs/JobPostings';
import JobPostDetail from '../pages/MyJobs/components/JobPost/JobPostDetail';
import JobApplications from '../pages/MyJobs/JobApplications';
import SavedApplications from '../pages/MyJobs/SavedApplications';
import NewJobPost from '../pages/MyJobs/NewJobPost';
import JobPreference from '../pages/MyJobs/JobPreference';
import SavedJobs from '../pages/MyJobs/SavedJobs';
import AppliedJobs from '../pages/MyJobs/AppliedJobs';
import AboutCompany from '../pages/AboutCompany/AboutCompany';
import CompanyActivities from '../pages/CompanyActivities/CompanyActivities';

function RequireAuth({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    return isAuthenticated ? (
        <>{children}</>
    ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
    );

    //   return <>{children}</>;
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
                    path="users/:slug?"
                    element={
                        <RequireAuth>
                            <MainLayout children={<UsersPage />} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="about-company"
                    element={
                        <RequireAuth>
                            <MainLayout children={<AboutCompany />} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="company-activities"
                    element={
                        <RequireAuth>
                            <MainLayout children={<CompanyActivities />} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="activities"
                    element={
                        <RequireAuth>
                            <MainLayout children={<Activities />} />
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
                    path="messages"
                    element={
                        <RequireAuth>
                            <MainLayout children={<MessagesPage />} />
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
                    path="sent-requests"
                    element={
                        <RequireAuth>
                            <MainLayout children={<ReviewsPage />} />
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
                    path="job-posting"
                    element={
                        <RequireAuth>
                            <MainLayout children={<JobPostings />} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="job-preference"
                    element={
                        <RequireAuth>
                            <MainLayout children={<JobPreference />} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="job-postdetail/:id"
                    element={
                        <RequireAuth>
                            <MainLayout children={<JobPostDetail />} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="save-job"
                    element={
                        <RequireAuth>
                            <MainLayout children={<SavedJobs />} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="job-applications"
                    element={
                        <RequireAuth>
                            <MainLayout children={<JobApplications />} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="save-applications"
                    element={
                        <RequireAuth>
                            <MainLayout children={<SavedApplications />} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="new-jobpost"
                    element={
                        <RequireAuth>
                            <MainLayout children={<NewJobPost />} />
                        </RequireAuth>
                    }
                />
                <Route
                    path="job-applied"
                    element={
                        <RequireAuth>
                            <MainLayout children={<AppliedJobs />} />
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
                <Route
                    path="reviews/:slug?"
                    element={
                        <RequireAuth>
                            <MainLayout children={<ReviewsPage />} />
                        </RequireAuth>
                    }
                />
            </Route>
        </Routes>
    );
};

export default PrivateRoutes;
