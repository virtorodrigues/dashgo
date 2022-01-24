import { Icon, Link, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";

type NavLinkProps = ChakraLinkProps & {
  icon: ElementType;
  children: string;
}

export default function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link
      display="flex"
      align="center"
      {...rest}
    >
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}