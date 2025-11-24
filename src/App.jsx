import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import UserManagementPage from "./pages/dashboard/UserManagementPage";
import ContentModeration from "./pages/dashboard/ContentModeration";
import ContentCategoryManagement from "./pages/dashboard/ContentCategoryManagement";
import CommunicationNotificationPage from "./pages/dashboard/CommunicationNotificationPage";
import MonetizationPage from "./pages/dashboard/MonetizationPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="user-management" element={<UserManagementPage />} />
          <Route path="content-moderation" element={<ContentModeration />} />
          <Route
            path="content-category"
            element={<ContentCategoryManagement />}
          />
          <Route
            path="communication-notification"
            element={<CommunicationNotificationPage />}
          />
          <Route
            path="monetization"
            element={<MonetizationPage />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
