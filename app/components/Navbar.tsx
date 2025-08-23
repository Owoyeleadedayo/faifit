"use client";
import {
  Badge,
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Logo from "../../public/images/faifitLogoNew.png";
import { MenuIcon, ShoppingCart } from "lucide-react";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const Navbar = () => {
  const { cart, removeFromCart } = useCart();

  const itemCount = cart.reduce((sum: any, item: { quantity: any; }) => sum + item.quantity, 0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("navBar");
      if (window.scrollY >= 500) {
        nav?.classList.add("scroll");
      } else {
        nav?.classList.remove("scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Store", href: "/store" },
  ];

  return (
    <>
      <Flex
        id="navBar"
        width="100%"
        bgColor="transparent"
        px={{ base: "20px", md: "30px", lg: "30px" }}
        py={{ base: "10px", md: "15px" }}
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        top="0"
        zIndex={1000}
        transition="background-color 0.3s ease"
      >
        <Flex
          display={{ base: "none", md: "flex" }}
          gap={{ base: "15px", md: "20px" }}
          alignItems="center"
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              fontFamily="Sora"
              textDecoration="none"
              gap={{ base: "20px", md: "30px", lg: "30px" }}
              color={pathname === item.href ? "#000" : "#333"}
              fontWeight={pathname === item.href ? "600" : "500"}
              fontSize={{ base: "14px", md: "16px" }}
              _hover={{ textDecoration: "none", color: "#000" }}
            >
              {item.name}
            </Link>
          ))}
        </Flex>

        <Flex justifyContent="center" alignItems="center" gap="10px">
          <Box>
            <Image
              src={Logo}
              alt="Logo"
              width={80}
              height={40}
              style={{ height: "auto" }}
              priority
            />
          </Box>
        </Flex>

        <Flex justifyContent={"space-between"} alignItems="center">
          <IconButton
            display={{ base: "flex", md: "none", lg: "none" }}
            aria-label="Open menu"
            icon={<MenuIcon />}
            variant="ghost"
            color="black"
            onClick={onOpen}
          />

          <Link
            href="/contact"
            justifyContent={"center"}
            alignItems={"center"}
            fontFamily="Sora"
            color={"#000"}
            fontWeight={"600"}
            display={{ base: "none", md: "flex" }}
            fontSize={{ base: "14px", md: "16px" }}
            _hover={{ textDecoration: "none", color: "#000" }}
            textDecoration="none"
            gap={"5px"}
          >
            Contact
          </Link>
          <Menu>
            <Box position="relative">
              <MenuButton
                as={IconButton}
                icon={<ShoppingCart />}
                variant="none"
                size="lg"
              />
              {itemCount > 0 && (
                <Badge
                  colorScheme="red"
                  borderRadius="full"
                  position="absolute"
                  top="0"
                  right="0"
                  px="2"
                  fontSize="0.7em"
                >
                  {itemCount}
                </Badge>
              )}
            </Box>

            <MenuList p={3} minW="300px">
              {cart.length === 0 ? (
                <Text fontSize="14px" color="gray.500">
                  Your cart is empty
                </Text>
              ) : (
                <>
                  {cart.map((item: { img: string | StaticImport; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; quantity: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; id: any; }, index: Key | null | undefined) => (
                    <MenuItem key={index} p={2}>
                      <Flex align="center" w="100%" justify="space-between">
                        <Flex align="center" gap={2}>
                          <Image
                            src={item.img}
                            alt={String(item.title)} 
                            width={40}
                            height={40}
                            objectFit="cover"
                          />
                          <Text fontSize="14px">{item.title}</Text>
                        </Flex>
                        <Text fontSize="14px">x{item.quantity}</Text>
                        <Button
                          size="xs"
                          colorScheme="red"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </Button>
                      </Flex>
                    </MenuItem>
                  ))}
                  <Link href="/checkout">
  <Button w="100%" mt={3} colorScheme="blackAlpha">
    Go to Checkout
  </Button>
</Link>
                </>
              )}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="#FFFF">
          <DrawerCloseButton color="#000" />
          <Flex flexDirection={"column"}>
            <VStack
              align="start"
              spacing="20px"
              mt="80px"
              pl="20px"
              color="#000"
            >
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  fontSize="18px"
                  cursor="pointer"
                  onClick={onClose}
                  color={pathname === item.href ? "#000" : "#333"}
                  fontWeight={pathname === item.href ? "600" : "500"}
                  _hover={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#EC1B25",
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </VStack>
            <Link
              href="/contact"
              fontFamily="Sora"
              px={"20px"}
              pt="20px"
              color={"#333"}
              fontWeight={"600"}
              fontSize="18px"
              _hover={{ textDecoration: "none", color: "#000" }}
              textDecoration="none"
            >
              Contact
            </Link>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
