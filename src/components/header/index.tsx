import { HeaderContainer } from "./styles";
import logo from "../../assets/logo-github-blog.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  );
};
