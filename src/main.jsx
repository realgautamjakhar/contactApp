import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRoutesFromElements, Route } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./App";
import Contact from "./Contact";
import "./index.css";
import { loadContacts, loadContact } from "./loader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} loader={loadContacts}>
        <Route
          path="/contact/:contactId"
          loader={({ params }) => loadContact(params.contactId)}
          element={<Contact />}
        ></Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
