import { useState } from "react";
import "./App.css";
import { HEADERS } from "./components/data";
import Success from "./components/forms/success";
import UserDetailsForm from "./components/forms/userDetailsForm";
import UserType from "./components/forms/userType";
import WorkspaceDetailsForm from "./components/forms/workspaceDetailsForm";
import Steps from "./components/steps";

function App() {
  const [activeState, setActiveState] = useState(1);
  const [userDetails, setUserDetails] = useState({
    name: null,
    "display name": null,
    useType: "own",
  });
  const [workSpaceDetails, setWorkSpaceDetails] = useState({
    name: " ",
    url: " ",
  });

  function forms() {
    switch (activeState) {
      case 1:
        return (
          <UserDetailsForm
            userDetails={userDetails}
            setUserDetails={setUserDetails}
          />
        );
      case 2:
        return (
          <WorkspaceDetailsForm
            setWorkSpaceDetails={setWorkSpaceDetails}
            workSpaceDetails={workSpaceDetails}
          />
        );
      case 3:
        return (
          <UserType setUserDetails={setUserDetails} userDetails={userDetails} />
        );
      case 4:
        return <Success userDetails={userDetails} />;
      default:
        return "something went wrong";
    }
  }

  function handleCreate() {
    if (userDetails.name && userDetails["display name"]) {
      setActiveState((prev) => {
        if (prev < 4) {
          return prev + 1;
        }
        return 1;
      });
    } else {
      alert("Fill all details");
    }
  }

  return (
    <div className="app">
      <div style={{ width: "100%" }}>
        <img src="/eden-logo.png" alt="eden logo" />
        <Steps activeStep={activeState} totalSteps={4} />
        <h1 className="title">{HEADERS[activeState - 1].title}</h1>
        <h3 className="sub-title">{HEADERS[activeState - 1].subTitle}</h3>
        <div className="form-container">
          {forms()}
          <button onClick={handleCreate} className="submit-btn">
            {activeState === 4 ? "Launch Eden" : "Create Workspace"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
