"use client";

import { useParams } from "next/navigation";
import {
  Flex,
  Image,
  Text,
  Button,
  Select,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import NavBarforOthers from "@/app/components/NavBarforOthers";
import { useState } from "react";
import Footer from "@/app/components/Footer";
import { InputNumber } from "antd";

const productCard = [
  {
    id: 1,
    img: "/images/img16.jpg",
    title: "Oman wor tawa",
    price: 85000,
  },
  {
    id: 2,
    img: "/images/img17.jpg",
    title: "Oman wor tawa",
    price: 85000,
  },
  {
    id: 3,
    img: "/images/img15.jpg",
    title: "Oman wor tawa",
    price: 85000,
  },
  {
    id: 4,
    img: "/images/img12.jpg",
    title: "Oman wor tawa",
    price: 85000,
  },
  {
    id: 5,
    img: "/images/img13.jpg",
    title: "Oman wor tawa",
    price: 85000,
  },
  {
    id: 6,
    img: "/images/img14.jpg",
    title: "Oman wor tawa",
    price: 85000,
  },
];

export default function page() {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const { addToCart, openCart } = useCart();
  const params = useParams();
  const id = params?.id;

  const handleAddToCart = async () => {
    if (!selectedColor || !selectedSize || !product) return;

    setLoading(true);

    setTimeout(() => {
      addToCart({
        id: product.id,
        title: product.title,
        img: product.img,
        price: product.price,
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
      });

      setLoading(false);
      openCart?.();
    }, 1000);
  };

  const product = productCard.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <Flex w="100%" h="100vh" justify="center" align="center">
        <Text fontSize="20px" fontWeight="500">
          Product not found
        </Text>
      </Flex>
    );
  }

  return (
    <>
      <NavBarforOthers />
      <Flex
        w="100%"
        minH="92vh"
        px={{ base: "20px", md: "30px" }}
        pt={{ base: "80px", md: "80px", lg: "80px" }}
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "20px", md: "40px", lg: "40px" }}
      >
        <Flex>
          <Image
            src={product.img}
            alt={product.title}
            objectFit={{ base: "cover", md: "contain" }}
            w={{ base: "100%", md: "50%", lg: "500px" }}
            h={{ base: "100%", md: "600px", lg: "600px" }}
          />
        </Flex>

        <Flex
          flexDirection="column"
          gap="10px"
          w={{ base: "100%", md: "50%" }}
          pt={{ base: "0px", md: "50px", lg: "50px" }}
        >
          <Flex
            flexDirection="column"
            w={{ base: "100%", md: "50%" }}
            py="10px"
            borderBottom="1px solid #e5e5e5"
            gap="5px"
          >
            <Text fontSize="18px" fontWeight="500" textTransform={"uppercase"}>
              {product.title}
            </Text>
            <Text fontSize="16px" fontWeight="400">
              ₦{product.price.toLocaleString()}
            </Text>
          </Flex>

          <Flex width={"100%"} flexDirection={"column"} gap="10px">
            <Flex
              width={{ base: "100%", md: "50%", lg: "50%" }}
              flexDirection={"column"}
              gap="5px"
            >
              <Text
                fontSize="14px"
                fontWeight="500"
                textTransform={"uppercase"}
              >
                Color
              </Text>
              <Select
                width={"100%"}
                variant="none"
                border={"1px solid #e5e5e5"}
                fontSize="16px"
                fontWeight="400"
                textTransform={"capitalize"}
                borderRadius="none"
                _hover={{
                  border: "1px solid black",
                }}
                placeholder="Select option"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                <option value="pink">Pink</option>
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
                <option value="black">Black</option>
              </Select>
            </Flex>
            <Flex
              width={{ base: "100%", md: "50%", lg: "50%" }}
              flexDirection={"column"}
              gap="5px"
            >
              <Text
                fontSize="14px"
                fontWeight="500"
                textTransform={"uppercase"}
              >
                size
              </Text>
              <Select
                width={"100%"}
                variant="none"
                border={"1px solid #e5e5e5"}
                fontSize="16px"
                fontWeight="400"
                textTransform={"capitalize"}
                borderRadius="none"
                _hover={{
                  border: "1px solid black",
                }}
                placeholder="Select option"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </Select>
            </Flex>
          </Flex>

          <Flex gap="20px">
            <InputNumber
              min={1}
              max={10}
              value={quantity}
              onChange={(value) => setQuantity(Number(value))}
              style={{
                width: "60px",
                height: "40px",
                border: "1px solid #000",
                borderRadius: "0",
                justifyContent: "center",
                alignItems: "center",
              }}
            />

            <Button
              width={{ base: "100%", md: "180px", lg: "280px" }}
              bg="#000"
              color="white"
              fontSize="16px"
              fontWeight="500"
              borderRadius={"none"}
              textTransform="uppercase"
              boxShadow={"md"}
              leftIcon={!loading ? <ShoppingCart size={18} /> : undefined}
              _hover={{
                bg: "white",
                color: "#000",
                border: "1px solid #000",
                boxShadow: "md",
              }}
              onClick={handleAddToCart}
              isDisabled={!selectedColor || !selectedSize || loading}
            >
              {loading ? <Spinner size="sm" color="white" /> : "Add to Cart"}
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}
