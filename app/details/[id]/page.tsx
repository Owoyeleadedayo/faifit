"use client";

import { useParams } from "next/navigation";
import { Flex, Image, Text, Button } from "@chakra-ui/react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import NavBarforOthers from "@/app/components/NavBarforOthers";

// Dummy product data (same as in StorePage)
const productCard = [
  { id: 1, img: "/images/img2.jpg", title: "Oman wor tawa", price: "85,000 00" },
  { id: 2, img: "/images/img6.jpg", title: "Oman wor tawa", price: "85,000 00" },
  { id: 3, img: "/images/img11.jpg", title: "Oman wor tawa", price: "85,000 00" },
  { id: 4, img: "/images/img12.jpg", title: "Oman wor tawa", price: "85,000 00" },
  { id: 5, img: "/images/img13.jpg", title: "Oman wor tawa", price: "85,000 00" },
  { id: 6, img: "/images/img14.jpg", title: "Oman wor tawa", price: "85,000 00" },
];

export default function ProductDetails() {
    const { addToCart } = useCart();
  const params = useParams();
  const id = params?.id; // comes as string

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
      minH="100vh"
      p="30px"
      flexDirection={{ base: "column", md: "row" }}
      gap="40px"
    >
      <Image
        src={product.img}
        alt={product.title}
        objectFit="cover"
        w={{ base: "100%", md: "50%" }}
        h="400px"
      />

      <Flex flexDirection="column" justify="center" gap="20px" w={{ base: "100%", md: "50%" }}>
        <Text fontSize="28px" fontWeight="600">{product.title}</Text>
        <Text fontSize="20px" fontWeight="500">Price: ₦{product.price}</Text>

        <Button
          bg="#000"
          color="white"
          fontSize="16px"
          fontWeight="500"
          leftIcon={<ShoppingCart size={18} />}
          _hover={{ bg: "gray.800" }}
          w="200px"
          onClick={() =>
            addToCart({
              id: product.id,
              title: product.title,
              img: product.img,
              price: product.price,
            })
          }
        >
          Add to Cart
        </Button>
      </Flex>
    </Flex>
    </>
  );
}
