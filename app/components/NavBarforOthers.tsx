"use client";
import {
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
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
import { MenuIcon, ShoppingBag, ShoppingCart, Trash2 } from "lucide-react";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
} from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CartItem, useCart } from "../context/CartContext";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const NavBarforOthers = () => {
  const { cart, removeFromCart } = useCart();
  const {
    isOpen: isNavOpen,
    onOpen: onNavOpen,
    onClose: onNavClose,
  } = useDisclosure();

  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();
  const pathname = usePathname();

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);


  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Store", href: "/store" },
  ];

  return (
    <>
      <Flex
        width="100%"
        bgColor="white"
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
            onClick={onCartOpen}
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
         <Flex>
         <Box position="relative">
        <IconButton
          aria-label="Cart"
          icon={<ShoppingBag />}
          variant="ghost"
          size="sm"
          onClick={onCartOpen}
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
            color="black"
          >
            {itemCount}
          </Badge>
        )}
      </Box>

      {/* Drawer */}
      <Drawer isOpen={isCartOpen} placement="right" onClose={onCartClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
            {cart.length === 0 ? (
              <Text fontSize="14px" color="gray.500">
                Your cart is empty
              </Text>
            ) : (
              <>
                {cart.map((item: CartItem, index) => (
                  <Flex
                    key={index}
                    align="center"
                    gap={3}
                    borderBottom="1px solid #eee"
                    pb={3}
                    mb={3}
                  >
                    <Image
                      src={item.img}
                      alt={String(item.title)}
                      width={60}
                      height={60}
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />

                    <Flex flexDirection="column" flex="1">
                      <Text fontSize="14px" fontWeight="500">
                        {item.title}
                      </Text>
                      <Text fontSize="14px" color="gray.600">
                        ₦{item.price}
                      </Text>
                      <Text fontSize="14px" color="gray.600">
                        Color: {item.color}
                      </Text>
                      <Text fontSize="14px" color="gray.600">
                        Size: {item.size}
                      </Text>
                      <Text fontSize="14px" color="gray.600">
                        Qty: {item.quantity}
                      </Text>
                    </Flex>

                    <Trash2
                      className="cursor-pointer"
                      onClick={() =>
                        removeFromCart(item.id, item.color, item.size)
                      }
                    />
                  </Flex>
                ))}

                {/* Checkout button */}
                <Link href="/checkout">
                  <Button w="100%" mt={3} colorScheme="blackAlpha">
                    Go to Checkout
                  </Button>
                </Link>
              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
         </Flex>
        </Flex>
      </Flex>

      <Drawer isOpen={isNavOpen} placement="right" onClose={onNavClose}>
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
                  onClick={onNavClose}
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

export default NavBarforOthers;
