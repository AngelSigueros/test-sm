import { Routes } from '@angular/router';
import { HomeWallComponent } from './home-wall/home-wall.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { GroupListComponent } from './group-list/group-list.component';
import { HobbyListComponent } from './hobby-list/hobby-list.component';
import { HobbyDetailComponent } from './hobby-detail/hobby-detail.component';
import { HobbyFormComponent } from './hobby-form/hobby-form.component';
import { BlogComponent } from './blog/blog.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { UserFormComponent } from './user-form/user-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeWallComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'groups',
    component: GroupListComponent
  },
  {
    path: 'groups/create',
    component: GroupFormComponent
  },
  {
    path: 'groups/:id/detail',
    component: GroupDetailComponent
  },
  {
    path: 'hobbies',
    component: HobbyListComponent
  },
  {
    path: 'hobbies/:id/detail',
    component:HobbyDetailComponent
  },
  {
    path: 'hobbies/create',
    component:HobbyFormComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'posts',
    component: PostComponent
  },
  {
    path: 'user-profile/:id/detail',
    component: UserProfileComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/:id/detail',
    component: UserDetailComponent
  },
  {
    path: 'users/create',
    component: UserFormComponent
  },
  {
    path: 'users/:id/update',
    component: UserFormComponent
  },
  {
    path: '**', 
    component: NotFoundComponent
  }
];
