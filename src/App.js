import { useState, useEffect } from 'react';
import { ChakraProvider, Heading, Box, Text, Input } from '@chakra-ui/react';
import CardList from './components/card-list/CardList.js';

const App = () => {
  const [library, setLibrary] = useState([]);
  const [ressources, setRessouces] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/burundiarxiv/library-parser/master/export/library.json'
    )
      .then((response) => response.json())
      .then((data) => {
        setLibrary(data);
        setRessouces(data);
      });
  }, []);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    if (value === '') {
      setRessouces(library);
      return;
    }
    const filteredRessources = library.filter(({ line }) =>
      line.toLowerCase().includes(value.toLowerCase())
    );
    setRessouces(filteredRessources);
  };

  return (
    <ChakraProvider>
      {/* Header */}
      <Box as="header" boxShadow="sm">
        <Box width="50%" m="0 auto" textAlign="center" p="30px 0">
          <Heading as="h1" size="lg">
            Librairie Numérique sur le Burundi
          </Heading>
          <Text mt={2} mb={2}>
            Trouver les références de toutes ressources écrites sur le Burundi
            entre 1962 et 2019.
          </Text>
          <Input
            placeholder="Rechercher une ressource"
            onChange={onChangeHandler}
          />
        </Box>
      </Box>

      {/* Main */}
      <Box as="main">
        <Box width="1024px" maxW="90%" m="0 auto">
          <CardList ressources={ressources} />
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default App;
