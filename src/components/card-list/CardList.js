import React from 'react';
import { Heading, Box, SimpleGrid } from '@chakra-ui/react';
import Card from '../card.js/Card';

const CardList = ({ ressources }) => (
  <Box>
    <Heading as="h2" m="30px 0">
      {ressources.length} {ressources.length === 1 ? 'résultat' : 'résultats'}
    </Heading>

    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
      {ressources.map((ressource, ressourceIndex) => (
        <Card
          key={`${ressource.title}-${ressourceIndex}`}
          ressource={ressource}
        />
      ))}
    </SimpleGrid>
  </Box>
);

export default CardList;
