import React from "react";

import { FormTestFolder } from "newapp1/app";
// const OtherComponent = React.lazy(() => import("newapp1/app1"));

export const App = () => {
  return (
    <>
      <h1>App1</h1>
      <div>App rendered second time</div>

      {/* <App1 /> */}
      <FormTestFolder />
    </>
  );
};
