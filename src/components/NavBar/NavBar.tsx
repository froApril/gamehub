import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" className="pr-3">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
