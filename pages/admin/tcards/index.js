import Tcards from "@/components/backend/admin/tcards/Tcards";
import BackendLayout from "@/components/layout/BackendLayout";
import React, { Fragment } from "react";

const index = () => {
  return (
    <Fragment>
      <BackendLayout>
        <Tcards />
      </BackendLayout>
    </Fragment>
  );
};

export default index;
