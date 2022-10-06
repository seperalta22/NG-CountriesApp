import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent, FooterComponent, MenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, FooterComponent, MenuComponent],
})
export class SharedModule {}
