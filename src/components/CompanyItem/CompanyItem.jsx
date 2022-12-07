import "./companyItem.css";

import React from "react";

function CompanyItem(props) {
  return (
    <div
      onClick={() => {
        props.setActiveCompany(props.id);
        props.setCompanyId(props.data.id);
        props.setCompanyName(props.data.name);
      }}
      className={
        props.activeCompany == props.id
          ? `company-item company-item--selected`
          : `company-item`
      }
    >
      {props.data.name}
    </div>
  );
}

export default CompanyItem;
