"use client";
import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Logo from "../../public/images/faifitLogoNew.png";
import { Menu } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
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
    { name: "Store", href: "/library" },
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
            icon={<Menu />}
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
