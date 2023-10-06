import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'appointment',
        data: { pageTitle: 'Appointments' },
        loadChildren: () => import('./appointment/appointment.module').then(m => m.AppointmentModule),
      },

      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
function CanActivate(arg0: any): any {
  throw new Error('Function not implemented.');
}

function Roles(arg0: string[]): any {
  throw new Error('Function not implemented.');
}
