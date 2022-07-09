import React from "react";
import { userGroupIcon, userIcon } from "../icons";

export default function UserType({ setUserDetails, userDetails }) {
  return (
    <div className="usr-type-container">
      <div
        onClick={() => setUserDetails({ ...userDetails, useType: "own" })}
        className={`user-type-component ${
          userDetails.useType === "own" ? "user-type-component-active" : null
        }`}
      >
        <div
          className={
            userDetails.useType === "own"
              ? "use-type-icon-active"
              : "use-type-icon"
          }
        >
          {userIcon}
        </div>
        <h3>For myself</h3>
        <div className="sub-title">
          White better.Think more clearly. Stay organized.
        </div>
      </div>
      <div
        onClick={() => setUserDetails({ ...userDetails, useType: "team" })}
        className={`user-type-component ${
          userDetails.useType === "team" ? "user-type-component-active" : null
        }`}
      >
        <div
          className={
            userDetails.useType === "team"
              ? "use-type-icon-active"
              : "use-type-icon"
          }
        >
          {" "}
          {userGroupIcon}
        </div>
        <h3>With my Team</h3>
        <div className="sub-title">
          Wikis docs,tasks & projects, all in one place.
        </div>
      </div>
    </div>
  );
}
