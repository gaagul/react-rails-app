import React, { useEffect, useState } from "react";
import { Editor } from "@bigbinary/neeto-editor";
import { setAuthHeaders } from "./apis/axios";

const App = () => {

  useEffect(() => {
    setAuthHeaders();
    }, []);

  return (
    <div>
        <Editor addons={["image-upload"]}/>
    </div>
  );
};

export default App;