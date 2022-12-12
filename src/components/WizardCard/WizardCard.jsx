import React from "react";
import "./WizardCard.css";

function WizardCard(props) {
  const select = function () {
    // Lets create only one state  props.setActiveItem(selectedItem); and get the all data from that object
    // I'm using more generic name because you are using card for both candidate and company
    props.setActiveCandidate(props.id);
    props.setCandidateId(props.data.id);
    props.setCandidateName(props.data.name);
  };
  return (
    <div
      onClick={select}
      className={
        props.activeCandidate == props.id
          ? `wizard-card wizard-card--selected`
          : `wizard-card`
      }
    >
      <img
        className="wizard-card--avatar"
        src="https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-1024.png"
        alt={props.data.name}
      />
      <div className="wizard-card--text">
        <span className="wizard-card--name">{props.data.name}</span>
        <span className="wizard-card--email">{props.data.email}</span>
      </div>
    </div>
  );
}

export default WizardCard;
