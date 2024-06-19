import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './post/view/view.component';

export const routes: Routes = [{
    path: "", redirectTo: "index", pathMatch: 'full'},
    {
        path: "create", component: CreateComponent
    },
    {
        path: "index", component: IndexComponent
    },
    {
        path: "edit", component: EditComponent
    },
    {
        path: "view", component: ViewComponent
    }
];
