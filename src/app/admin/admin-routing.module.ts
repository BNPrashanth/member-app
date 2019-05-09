import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: '', component: AdminHomeComponent },
    { path: 'add-staff', component: AddStaffComponent },
    { path: 'add-member', component: AddMemberComponent },
    { path: '**', redirectTo: '' }
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
