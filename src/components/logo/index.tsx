import Logo1 from "@components/icons/ValleyLogo1";
import Logo2 from "@components/icons/ValleyLogo2";
import Styles from "@styles/logo.module.css";
const Logo:React.FC = () => {
  return (
    <span className="mr-1">
      <Logo1 className={Styles.logo} />
      <Logo2/>
    </span>
  );
};

export default Logo;
