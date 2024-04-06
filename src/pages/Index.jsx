import React, { useState } from "react";
import { Box, Heading, Text, Image, SimpleGrid, Container, Button, Input, Stack, IconButton } from "@chakra-ui/react";
import { FaSearch, FaPhone } from "react-icons/fa";

const carData = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2018,
    price: 18000,
    image: "https://images.unsplash.com/photo-1524095838546-2d9b8d00f212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwyMDE4JTIwVG95b3RhJTIwQ2Ftcnl8ZW58MHx8fHwxNzEyNDI0NDAyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    make: "Honda",
    model: "Accord",
    year: 2017,
    price: 16500,
    image: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwyMDE3JTIwSG9uZGElMjBBY2NvcmR8ZW58MHx8fHwxNzEyNDI0NDAyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2019,
    price: 24000,
    image: "https://images.unsplash.com/photo-1555160329-6a0ccf5c91f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwyMDE5JTIwRm9yZCUyME11c3Rhbmd8ZW58MHx8fHwxNzEyNDI0NDA0fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = carData.filter((car) => `${car.make} ${car.model} ${car.year}`.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box>
      <Box backgroundImage="https://images.unsplash.com/photo-1574023240744-64c47c8c0676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZWFsZXJzaGlwfGVufDB8fHx8MTcxMjQyNDQwNXww&ixlib=rb-4.0.3&q=80&w=1080" backgroundSize="cover" backgroundPosition="center" height="400px" display="flex" alignItems="center" justifyContent="center" flexDirection="column" textAlign="center" color="white">
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to Used Car Dealership
        </Heading>
        <Text fontSize="xl">Find your dream car at an affordable price</Text>
      </Box>
      <Container maxW="container.lg" py={8}>
        <Stack direction="row" mb={8}>
          <Input placeholder="Search cars..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <IconButton icon={<FaSearch />} aria-label="Search" />
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {filteredCars.map((car) => (
            <Box key={car.id} borderWidth={1} borderRadius="lg" overflow="hidden">
              <Image src={car.image} alt={`${car.make} ${car.model}`} />
              <Box p={4}>
                <Heading as="h3" size="lg">
                  {car.make} {car.model}
                </Heading>
                <Text>Year: {car.year}</Text>
                <Text fontWeight="bold">Price: ${car.price}</Text>
                <Button mt={4} colorScheme="blue">
                  View Details
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
      <Box bg="gray.100" py={8} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Contact Us
        </Heading>
        <Text fontSize="xl">Have questions or want to schedule a test drive? Give us a call!</Text>
        <Button leftIcon={<FaPhone />} size="lg" colorScheme="blue" mt={4}>
          (123) 456-7890
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
