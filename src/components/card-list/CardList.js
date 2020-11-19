import { Heading, Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Card from '../card.js/Card';
import './CardList.css';

const CardList = ({ books }) => (
  <Box>
    <Heading as="h2" m="30px 0">Books found</Heading>
    
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3}}  spacing={10}>
      {books.map((book, bookIndex) => (
        <Card key={bookIndex} book={book} />
      ))}
    </SimpleGrid>
  </Box>
    
);

export default CardList;
