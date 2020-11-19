import { useState, useEffect } from 'react';
import { ChakraProvider, Heading, Box, Text, Input } from '@chakra-ui/react';
import CardList from './components/card-list/CardList.js';

const App = () => {
  const [library, setLibrary] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/burundiarxiv/library-parser/master/export/library.json'
    )
      .then((response) => response.json())
      .then((data) => {
        setLibrary(data);
        setBooks(data);
      });
  }, []);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    if (value === '') {
      setBooks(library);
      return;
    }
    const filteredBooks = library.filter(({ line }) =>
      line.toLowerCase().includes(value.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  return (
    <ChakraProvider>
      {/* Header */}
      <Box as="header" boxShadow="sm">
        <Box width="700px" maxW="90%" m="0 auto" textAlign="center" p="30px 0" >
          <Heading as="h1" size="lg" >
            Burundi Open Library
          </Heading>
          <Text mt={2} mb={2}>
            Free and open access to a general library on books written on
            Burundi
          </Text>
          <Input placeholder="Search for books" onChange={onChangeHandler} />
        </Box>
      </Box>

      {/* Main */}
      <Box as="main">
        <Box width="1024px" maxW="90%" m="0 auto">
          <CardList books={books} />
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default App;
