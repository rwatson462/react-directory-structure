import {BrowserRouter, Route, Routes} from "react-router";
import {PokemonDetailsPage} from "../../pages/PokemonDetailsPage.tsx";
import {PokemonListPage} from "../../pages/PokemonListPage.tsx";
import {DefaultLayout} from "./DefaultLayout.tsx";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route index element={<PokemonListPage/>}/>
          <Route path="/:id" element={<PokemonDetailsPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
