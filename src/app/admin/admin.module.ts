import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AddMemberComponent } from './add-member/add-member.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    AddStaffComponent,
    AddMemberComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  exports: [],
  providers: []
})
export class AdminModule {}
