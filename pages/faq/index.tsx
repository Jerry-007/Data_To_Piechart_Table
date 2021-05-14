import React from "react";
import Markdown from "markdown-to-jsx";
import readme from "!!raw-loader!./README.md";
import Styles from "@styles/faq.module.css"

const index: React.FC = (): JSX.Element => {
  return (
    <div className={Styles.content}>
      <Markdown>{readme}</Markdown>
    </div>
  );
};

export default index;
