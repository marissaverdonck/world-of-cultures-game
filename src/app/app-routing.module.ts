import { NgModule } from '@angular/core';
// import Routes zodat de app een routing functie kan hebben
import { RouterModule, Routes } from '@angular/router';
import { WerelddeelComponent } from './werelddeel/werelddeel.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { WerelddeelDetailComponent }  from './werelddeel-detail/werelddeel-detail.component';
 
const routes: Routes = [
// Bestaande routes bekend maken. Path is de string in de URL, gaat naar de component
  { path: '', redirectTo: '/werelddeel', pathMatch: 'full' },
  { path: 'werelddeel', component: WerelddeelComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: WerelddeelDetailComponent },
];

//initialiseert de router en luistert naar browser wijzigingen
// forRoot() because you configure the router at the application's root level. 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
