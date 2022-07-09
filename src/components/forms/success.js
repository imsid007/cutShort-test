import React from "react";

export default function Success({ userDetails }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <img src="/success.png" alt="eden logo" />
      </div>
      <h1 className="title">Congratulations, {userDetails.name}! </h1>
      <h3 className="sub-title" style={{ marginBottom: "50px" }}>
        You have completed Onboarding. You can start using the Eden!
      </h3>
    </div>
  );
}
