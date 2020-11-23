import React from 'react';
import { Heading, Box, Text } from '@chakra-ui/react';
import { Skeleton } from '@chakra-ui/react';
const Card = ({ book, books }) => {
  const { title, authors, line } = book;

  return (
    <Skeleton isLoaded>
      <Box
        boxShadow="base"
        p={5}
        borderRadius="lg"
        _hover={{ boxShadow: 'md' }}
      >
        <Heading as="h4" size="sm">
          {title}
        </Heading>
        <Text mt={3} mb={3}>
          <Text as="strong">Auteurs: </Text>
          {authors}
        </Text>

        <Text>
          <Text as="strong">Note: </Text>
          {line}
        </Text>
      </Box>
    </Skeleton>
  );
};

export default Card;
