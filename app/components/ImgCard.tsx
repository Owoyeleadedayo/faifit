"use client";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/rename3.jpg",
  "/images/rename4.jpg",
  "/images/rename5.jpeg",
  "/images/rename6.jpg",
  "/images/rename7.jpg",
  "/images/rename8.jpg",
  // "/images/rename9.jpg",
  // "/images/rename10.jpg",
];

const ImgCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardRef = useRef(null);

  // Number of cards visible at once
  const visibleCards = { base: 1, sm: 2, md: 2, lg: 3 };
  const cardWidth = { base: "calc(100vw - 30px)", sm: 300, md: 350, lg: 300 }; // Dynamic width
  const gap = 20; // Matches Swiper's spaceBetween
  const paddingX = { base: 15, md: 0 }; // Matches px in Flex

  // Calculate max index
  const maxIndex = images.length - Object.values(visibleCards)[3]; // Based on 'lg'

  // Handle navigation
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setIsPaused(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    setIsPaused(true);
  };

  // Auto-slide every 8 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  // Handle dot click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
  };

  return (
    <Flex
      width="100%"
      py={{ base: "20px", md: "50px" }}
      px={{ base: `${paddingX.base}px`, md: `${paddingX.md}px` }}
      bg="#FFF"
      justifyContent="center"
      alignItems="center"
      position="relative"
      flexDirection="column"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Track */}
      <Box
        width="100%"
        maxWidth={{
          base: `calc(100vw - ${paddingX.base * 2}px)`,
          sm: `${cardWidth.sm * 2 + gap}px`,
          md: `${cardWidth.md * 3 + gap * 2}px`,
          lg: `${cardWidth.lg * 3 + gap * 2}px`,
        }}
        overflow="hidden"
        position="relative"
      >
        <motion.div
          ref={cardRef}
          style={{
            display: "flex",
            gap: `${gap}px`,
            width: "max-content",
          }}
          animate={{
            x: `-${
              currentIndex *
              (typeof cardWidth.lg === "string"
                ? parseFloat(cardWidth.lg)
                : cardWidth.lg + gap)
            }px`, // Adjust for dynamic width
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {images.map((src, index) => (
            <Box
              key={index}
              width={{
                base: cardWidth.base,
                sm: `${cardWidth.sm}px`,
                md: `${cardWidth.md}px`,
                lg: `${cardWidth.lg}px`,
              }}
              height={{ base: "200px", md: "350px" }}
              overflow="hidden"
              borderRadius="md"
              boxShadow="md"
              position="relative"
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={typeof cardWidth.lg === "string" ? 350 : cardWidth.lg} // Fallback to 350px
                height={440}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 350px"
                priority={index < 3}
              />
            </Box>
          ))}
        </motion.div>
      </Box>

      {/* Navigation Buttons */}
      <IconButton
        aria-label="Previous slide"
        icon={<ChevronLeft />}
        onClick={handlePrev}
        isDisabled={currentIndex === 0}
        position="absolute"
        left={{ base: "5px", md: "10px" }}
        zIndex={10}
        bg="white"
        boxShadow="md"
        borderRadius="full"
        _hover={{ bg: "gray.100" }}
      />
      <IconButton
        aria-label="Next slide"
        icon={<ChevronRight />}
        onClick={handleNext}
        isDisabled={currentIndex >= maxIndex}
        position="absolute"
        right={{ base: "5px", md: "10px" }}
        zIndex={10}
        bg="white"
        boxShadow="md"
        borderRadius="full"
        _hover={{ bg: "gray.100" }}
      />

      {/* Pagination Dots */}
      <Flex mt="10px" justifyContent="center" gap="8px">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <Box
            key={i}
            w="8px"
            h="8px"
            borderRadius="full"
            bg={i === currentIndex ? "blue.500" : "gray.300"}
            cursor="pointer"
            onClick={() => handleDotClick(i)}
            transition="background-color 0.3s"
            _hover={{ bg: "blue.400" }}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default ImgCard;
