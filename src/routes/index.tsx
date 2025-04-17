import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "@/layouts/AdminLayout";
import MainLayout from "@/layouts/MainLayout";
import ProtectedLayout, {
  loader as userLoader,
} from "@/layouts/ProtectedLayout";
import RootLayout from "@/layouts/RootLayout";
import QuestListPage from "@/pages/admin/quest-list";
import AddQuestPage from "@/pages/admin/add-quest";
import LeaderboardPage from "@/pages/admin/leaderboard";
import Home from "@/pages/public/Home";
import FeedsPage from "@/pages/public/Feeds";
import MyBoxPage from "@/pages/public/MyBox";
import QuestDetails from "@/pages/public/QuestDetails";
import ErrorPage from "@/components/ErrorPage";

const routesConfig = [
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        id: "protected",
        path: "",
        element: <ProtectedLayout />,
        loader: userLoader,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <MainLayout />,
            errorElement: <ErrorPage />,
            children: [
              {
                index: true,
                element: <Home />,
              },
              {
                path: "quest-list",
                element: <QuestListPage />,
              },
              {
                path: "quest-list/:id",
                element: <QuestDetails />,
              },
              {
                path: "feed",
                element: <FeedsPage />,
              },
              {
                path: "my-box",
                element: <MyBoxPage />,
              }
            ]
          },
          {
            path: "admin",
            element: <AdminLayout />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: "quest-list",
                element: <QuestListPage />,
              },
              {
                path: "quest-list/add",
                element: <AddQuestPage />,
              },
              {
                path: "quest-list/edit/:id",
                element: <AddQuestPage />,
              },
              {
                path: "quest-list/leaderboard",
                element: <LeaderboardPage />,
              },
              {
                path: "quest-details/:id",
                element: <AddQuestPage />,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routesConfig);
