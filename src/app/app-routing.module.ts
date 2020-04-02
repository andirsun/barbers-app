import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'current-order',
    loadChildren: () => import('./pages/current-order/current-order.module').then( m => m.CurrentOrderPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'balance-explain',
    loadChildren: () => import('./pages/balance-explain/balance-explain.module').then( m => m.BalanceExplainPageModule)
  },
  {
    path: 'balance-charge-explai',
    loadChildren: () => import('./pages/balance-charge-explai/balance-charge-explai.module').then( m => m.BalanceChargeExplaiPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./pages/payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'first',
    loadChildren: () => import('./pages/first/first.module').then( m => m.FirstPageModule)
  },
  {
    path: 'first-nequi',
    loadChildren: () => import('./pages/first-nequi/first-nequi.module').then( m => m.FirstNequiPageModule)
  },
  {
    path: 'phisical-payment',
    loadChildren: () => import('./pages/phisical-payment/phisical-payment.module').then( m => m.PhisicalPaymentPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
