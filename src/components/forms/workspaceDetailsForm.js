import React from "react";

export default function WorkspaceDetailsForm({
  setWorkSpaceDetails,
  workSpaceDetails,
}) {
  return (
    <div>
      <div className="form-item">
        <div>
          <label>Workspace Name</label>
        </div>
        <input
          onChange={(e) =>
            setWorkSpaceDetails({
              ...workSpaceDetails,
              name: e.target.value,
            })
          }
          name="workSpace Url"
          placeholder="Eden"
          value={workSpaceDetails.name}
        />
      </div>
      <div className="form-item">
        <div>
          <label>
            Workspace URL <span className="optional-txt">(optional)</span>
          </label>
        </div>
        <div className="workspace-url-container">
          <div className="disabled-link">
            <div>www.eden.com/</div>
          </div>
          <input
            className="url-input"
            onChange={(e) =>
              setWorkSpaceDetails({
                ...workSpaceDetails,
                url: e.target.value,
              })
            }
            value={workSpaceDetails.url}
            name="workSpace Name"
            placeholder="Example "
          />
        </div>
      </div>
    </div>
  );
}
