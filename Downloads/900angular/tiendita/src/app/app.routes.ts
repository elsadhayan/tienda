import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/home/products/products';
import { Formulario } from './pages/home/formulario/formulario';


export const routes: Routes = [
{
  path:'home',component:(Home)

},
{
  path:'',redirectTo:'home',pathMatch:'full'
},
{
  path: 'products', component: Products
},
{
  path: 'formulario', component: Formulario
}

]
