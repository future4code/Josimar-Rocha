import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {HomePage} from "./HomePage/HomePage";
import {AdminHomePage} from "./privado/AdminHomePage";
import {CreateTripPage} from "./privado/CreateTripPage/CreateTripPage";
import {LoginPage} from "./privado/LoginPage";
import {TripDetailsPage} from "./privado/TripDetailsPage/TripDetailsPage";
import {ApplicationFormPage} from "./publico/ApplicationFormPage";
import {ListTripPage} from "./publico/ListTripPages";
import { ErroPage } from "./ErroPage/ErroPage"
import Styled  from 'styled-components';


const AppContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding: 16px;
`

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
       <Switch>
          <Route exact path={"/"}>
           <HomePage />
          </Route>

          <Route exact path={"/trips/list"}>
           <ListTripPage />
          </Route>

          <Route exact path={"/trips/application"}>
            <ApplicationFormPage />
          </Route>

          <Route exact path={"/login"}>
            <LoginPage />
          </Route>

          <Route exact path={"/admin/trips/list"}>
            <AdminHomePage />
          </Route>

          <Route exact path={"/admin/trips/create"}>
            <CreateTripPage />
          </Route>

          <Route exact path={"/admin/trips/:id"}>
            <TripDetailsPage />
          </Route>

          <Route >
            <ErroPage />
          </Route>

        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;

