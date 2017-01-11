import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from "../components/movies/movies.component";
import { MovieComponent } from "../components/movie/movie.component";


const APP_ROUTES: Routes = [
  {path: '', component: MoviesComponent},
  {path:'movie/:id', component: MovieComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
