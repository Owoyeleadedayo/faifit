"use client"

import { useCart } from "@/app/context/CartContext";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Footer from "../Footer";

const StorePage = () => {
  const productCard = [
    {
      id: 1,
      img: "/images/img16.jpg",
      title: "Oman wor tawa",
      price: "85,000 00",
    },
    {
      id: 2,
      img: "/images/img17.jpg",
      title: "Oman wor tawa",
      price: "85,000 00",
    },
    {
      id: 3,
      img: "/images/img15.jpg",
      title: "Oman wor tawa",
      price: "85,000 00",
    },
    {
      id: 4,
      img: "/images/img12.jpg",
      title: "Oman wor tawa",
      price: "85,000 00",
    },
    {
      id: 5,
      img: "/images/img13.jpg",
      title: "Oman wor tawa",
      price: "85,000 00",
    },
    {
      id: 6,
      img: "/images/img14.jpg",
      title: "Oman wor tawa",
      price: "85,000 00",
    },
  ];
  return (
    <>
      <Flex
        w={"100%"}
        h={{ base: "80vh", md: "100vh" }}
        pt={"80px"}
        flexDirection={"column"}
        gap="20px"
      >
        <Flex
          flexDirection={"column"}
          gap={2}
          borderY="1px solid #e5e5e5"
          py="20px"
          px={"30px"}
        >
          <Text
            fontSize={"12px"}
            fontWeight={300}
            color="#7c7979"
            textTransform="uppercase"
          >
            home/shop
          </Text>
          <Text
            fontSize={"25px"}
            fontWeight={500}
            color="#000"
            textTransform="uppercase"
          >
            shop
          </Text>
        </Flex>
        <Flex justifyContent={"center"} alignItems="center" py={'20px'}>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={{ base: "10px", md: "20px", lg: "30px" }}
            px={"30px"}
          >
            {productCard.map((item, index) => (
              <Link key={index} href={`/details/${item.id}`} passHref>
                <Card maxW="md" cursor={'pointer'}>
                <Image
                  objectFit="contain"
                  src={item.img}
                  alt="Chakra UI"
                  width={"100%"}
                  height={"500px"}
                />

                <CardFooter justify="space-between" flexWrap="wrap">
                  <Flex w={"100%"} flexDirection={"column"} gap="5px">
                    <Text>{item.title}</Text>
                    <Flex justifyContent={"space-between"} alignItems="center">
                      <Flex>
                        <Text fontSize={"16px"} fontWeight={500}>
                          Price:  ₦{item.price}
                        </Text>
                      </Flex>
                      <Flex justifyContent={"center"} alignItems="center">
                        <Button
                          bg="#000"
                          variant="none"
                          color="white"
                          fontSize="16px"
                          fontWeight={500}
                          // leftIcon={<ShoppingCart size={18} />}
                          // onClick={() =>
                          //   addToCart({ id: item.id, title: item.title, img: item.img, price: item.price })
                          // }
                        >
                          Select Options
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </CardFooter>
              </Card>
              </Link>
            ))}
          </Grid>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default StorePage;
