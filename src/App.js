import { useState, useEffect } from 'react';
import { ChakraProvider, Heading, Box, Text, Input } from '@chakra-ui/react';
import Nav from './components/Nav/Nav';
import Content from './components/Content';
import About from './components/About';
import Usage from './components/Usage';
import OurWork from './components/OurWork';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
      <Router>
        {/* Header */}

        <Nav />
        <Route exact path="/">
          <Box as="header" boxShadow="sm">
            <Box width="50%" m="0 auto" textAlign="center" p="30px 0">
              <Heading as="h1" size="lg">
                Librairie Numérique sur le Burundi
              </Heading>
              <Text mt={2} mb={2}>
                Trouver les références de toutes ressources écrites sur le
                Burundi entre 1962 et 2019.
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
        </Route>
        <Route path="/about" component={About} />
        <Route path="/ourwork" component={OurWork} />
        <Route path="/how-to-use-the-platform" component={Usage} />
        <Route path="/bibligrapic-content" component={Content} />
      </Router>
    </ChakraProvider>
  );
};

export default App;
