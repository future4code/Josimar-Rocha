import { BrowserRouter, Switch, Route } from 'react'
import { HomePage } from "./HomePage";
import { AdminHomePage } from "./privado/AdminHomePage";
import { CreateTripPage } from "./privado/CreateTripPage";
import { LoginPage } from "./privado/LoginPage";
import { TripDetailsPage } from "./privado/TripDetailsPage";
import { ApplicationFormPage } from "./publico/ApplicationFormPage";
import { ListTripPage } from "./publico/ListTripPages";


function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path={"/"}>
          <HomePage />
        </Route>

        <Route path={"/trips/list"}>
          <ListTripPage />
        </Route>

        <Route path={"/trips/application"}>
          <ApplicationFormPage />
        </Route>

        <Route path={"/login"}>
          <LoginPage />
        </Route>

        <Route path={"/admin/trips/list"}>
          <AdminHomePage />
        </Route>

        <Route path={"/admin/trips/create"}>
          <CreateTripPage />
        </Route>

        <Route path={"/admin/trips/:id"}>
          <TripDetailsPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
