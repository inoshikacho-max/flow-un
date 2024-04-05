import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FlowPage from './FlowPage.tsx'
import './index.css'
import Dashboard from './routes/Dashboard.tsx';
import FlowPageLayout from './layouts/FlowPageLayout.tsx';
import { ReactFlowProvider } from 'reactflow';

const router = createBrowserRouter([
  {
    path: "/",
    element: <FlowPageLayout><FlowPage /></FlowPageLayout>,
  },
  {
    path: "flow/:flowID",
    element: <FlowPageLayout><FlowPage /></FlowPageLayout>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactFlowProvider>
      <RouterProvider router={router} />
    </ReactFlowProvider>
  </React.StrictMode>,
)
