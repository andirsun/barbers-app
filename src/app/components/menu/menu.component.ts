import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/interfaces/barber';
import { UiServiceService } from 'src/app/services/ui-service.service';

import { Observable } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { LoginService } from 'src/app/services/login.service';
import { environment } from 'src/environments/environment';
import { preserveWhitespacesDefault } from '@angular/compiler';

//Native SDK plugins
const { Toast,Browser,Storage,Device} = Plugins;
const URL = environment.url;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  componentes : Observable<Componente[]>;
  nameBarber : string ="Barber";
  imgBarber : string = "/assets/logo.png";
  pointsBarber :string = "0";
  barberId: string = "0";
  appVersion :string = "0.0.0";
  constructor(private dataService : UiServiceService,private loginService : LoginService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
    this.getBarber2();
    this.getAppVersion();
  }
  async getBarber2() {
    const ret = await Storage.get({ key: 'barber' });
    const user = JSON.parse(ret.value);
    this.loginService.getBarberInfo(user.phone).subscribe((res)=>{
        this.pointsBarber = res['content']['points']
        this.imgBarber = URL +"/"+ res['content']['urlImg']
        this.barberId = res['content']['id']
      });
    this.nameBarber =user.name;
  }
  async contactSupport(){
    var message = "Hola, soy%20"+this.nameBarber +"%20barbero%20de%20timugo%20con%20ID:%20"+this.barberId+"%20y%20tengo%20el%20siguiente%20problema:%20(describir el problema)";
    await Browser.open({ url: 'https://www.wa.me/573162452663?text='+message });
  }
  async rateApp(){
    await Browser.open({ url: 'https://play.google.com/store/apps/details?id=com.timugo.barberApp&hl=es' });
  }
  async showToast() {
    await Toast.show({
      text: 'Sigue obteniendo mas puntos y obtendras beneficios :)'
    });
  }
  async getAppVersion(){
    var device = await Device.getInfo();
    console.log(device);
    this.appVersion = device.appVersion || "web version"; 
    
  }

}