import React from 'react';
import { Heading, Box, Text } from '@chakra-ui/react';
const Card = ({ ressource }) => {
  const { title, authors, year } = ressource;
  return (
    <Box
      boxShadow="base"
      p={5}
      borderRadius="lg"
      _hover={{ boxShadow: '2xl' }}
      _focus={{ boxShadow: 'outline' }}
    >
      <Heading as="h4" size="sm">
        {title}
      </Heading>
      <Text mt={3} mb={3}>
        <Text as="strong">Auteurs: </Text>
        {authors.join('; ')}
      </Text>
      <Text>
        <Text as="strong">Année: </Text>
        {year}
      </Text>
    </Box>
  );
};

export default Card;
