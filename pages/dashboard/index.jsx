import Dashboard from "../../components/backend/Dashboard/Dashboard";
import BackendLayout from "../../components/layout/BackendLayout";
import React, { Fragment } from "react";

const index = () => {
  return (
    <Fragment>
      <BackendLayout>
        <Dashboard />
      </BackendLayout>
    </Fragment>
  );
};

export default index;
