import { Component } from "@angular/core";
import { Network } from "@ionic-native/network/ngx";
import { Platform } from "@ionic/angular";
import { ToastController } from "@ionic/angular";
import { Plugins } from "@capacitor/core";
const { StatusBar,SplashScreen } = Plugins;

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  counter: number = 0;
  constructor(
    private platform: Platform,
    private net: Network,
    private ts: ToastController
  ) {
    this.initializeApp();
    /* this.showad(); */
  }
  // id : 'ca-app-pub-7461368310551653/7258622237',
  //ads banner config
/*   showad() {
    const bannerConfig: AdMobFreeBannerConfig = {
      isTesting: false,
      autoShow: true,
      id: "ca-app-pub-7461368310551653/7258622237",
      size: "BANNER"
    };
    this.admobFree.banner.config(bannerConfig);
    this.admobFree.banner
      .prepare()
      .then(() => {
        this.admobFree.banner.show();
      })
      .catch(e => console.log(e));
  }
 */
  //function for showing toast message
  async presentToast() {
    const toast = await this.ts.create({
      message: "Tap again to exit app",
      showCloseButton: true,
      duration: 2000
    });
    toast.present();
  }

  //init the app
  initializeApp() {
    this.platform.ready().then(() => {
      // platform is ready
     StatusBar.setBackgroundColor({color:"#282a36"});
     SplashScreen.hide();
      let disconnectSubscription = this.net.onDisconnect().subscribe(() => {
        alert(
          "Hey ! It seems you are offline , Connect to internet an try again"
        );
      });
      //to exit app
      this.platform.backButton.subscribe(() => {
        if (this.counter == 0) {
          this.counter++;
          this.presentToast();
          setTimeout(() => {
            this.counter = 0;
          }, 2000);
        } else {
          navigator["app"].exitApp();
        }
      });
      //showing ads
    });
  }
}
