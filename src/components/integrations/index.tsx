import React from "react";
import Integration from "@components/integration";
import Styles from "@styles/integrations.module.css";
import dynamic from "next/dynamic";

const index: React.FC = (): JSX.Element => {
  const items = [
    {
      name: "JIRA",
      img: "/static/jiraLogo.svg",
      description:
        "Enable Sending new incidents, remedation and insights data directly into your own Jira Instance",
      modal: dynamic(
        () => import("@components/integrationModals/jiraModal/index")
      ),
    },
    {
      name: "Slack",
      img: "/static/slackLogo.svg",
      description:
        "Enable Sending new incidents, remedation and insights data directly into Slack",
      modal: dynamic(
        () => import("@components/integrationModals/slackModal/index")
      ),
    },
  ];

  return (
    <div className={Styles.main}>
      {items.map((i) => (
        <Integration name={i.name} img={i.img} description={i.description} Modal={i.modal}/>
      ))}
    </div>
  );
};
export default index;
