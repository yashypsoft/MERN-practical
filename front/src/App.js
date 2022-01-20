import React from 'react';
import {Route,Switch,BrowserRouter as Router} from "react-router-dom";

//Import all pages
import { ChakraProvider } from '@chakra-ui/react'

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CoursePage from './pages/CoursePage';
import RegisterPage from './pages/RegisterPage';


const App = () => (
<Router>
  <ChakraProvider>
  <Switch>
    <Route path="/" exact component = {HomePage}/>
    <Route path="/login" exact component = {LoginPage}/>
    <Route path="/registration" exact component = {RegisterPage}/>
    <Route path="/courses/:id" exact component={CoursePage} />
  </Switch>
  </ChakraProvider>
</Router>

);

export default App;