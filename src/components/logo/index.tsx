import Logo1 from "@components/icons/ValleyLogo1";
import Logo2 from "@components/icons/ValleyLogo2";
import Styles from "@styles/logo.module.css";
const Logo: React.FC<{ className: string }> = ({ className }) => {
  return (
    <span className={className}>
      <Logo1 className={Styles.logo} />
      <Logo2 />
    </span>
  );
};

export default Logo;
