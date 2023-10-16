import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from './error-page.jsx';
import Dashboard from './components/Dashboard.jsx'
import TableCP from './tables/Table.jsx';
import AddItemTable from './tables/AddItemTable.jsx'
import store from './store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root /> ,
    errorElement: <ErrorPage />,
    children: [
      {
      path: "DashBoard",
      element: <Dashboard />
    },
    {
      path: "Form",
      element: <h2>Form</h2>
    },
    {
      path: "Table",
      element: <TableCP />
      // <h2>Form</h2>
      // <TableCP />
    },
    {
      path: "addItemTable",
      element: <AddItemTable/>
    },
    {
      path: "List",
      
      element: <h2>errr</h2>
      // <ErrorPage />,
    },

  ]
  },
  {
    path: "/home",
    element: <div>Home</div>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />

    {/* <App /> */}
    </Provider>
  </React.StrictMode>,
)
