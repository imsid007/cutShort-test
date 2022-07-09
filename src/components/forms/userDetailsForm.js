import React from "react";

export default function UserDetailsForm({ userDetails, setUserDetails }) {
  return (
    <div>
      <div className="form-item">
        <div>
          <label>Full Name</label>
        </div>
        <input
          onChange={(e) =>
            setUserDetails({ ...userDetails, name: e.target.value })
          }
          name="name"
          placeholder="steve jobs"
        />
      </div>
      <div className="form-item">
        <div>
          <label>Display Name</label>
        </div>
        <input
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              "display name": e.target.value,
            })
          }
          name="display name"
          placeholder="steve "
        />
      </div>
    </div>
  );
}
