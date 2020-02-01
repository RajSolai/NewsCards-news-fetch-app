import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { Plugins } from "@capacitor/core";
const { Share , Browser } = Plugins;
@Component({
  selector: "app-indianlive",
  templateUrl: "./indianlive.page.html",
  styleUrls: ["./indianlive.page.scss"]
})
export class IndianlivePage implements OnInit {
  showspinner: Boolean = true;
  livenews;
  apiurl =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=b0404985f10f4304bfea8b247262c9b4";
  constructor(private http: HttpClient, private sharing: SocialSharing) {}
  ngOnInit() {
    this.http.get(this.apiurl).subscribe(
      data => {
        this.livenews = data;
        this.showspinner = false;
      },
      error => {
        console.log(error);
        alert("Please Check your internet connection");
      }
    );
  }
  async shareglobal(shareurl: string) {
    await Share.share({
      title: "",
      text: "",
      url: shareurl,
      dialogTitle: "Share with friends"
    });
  }
  async OpenUrl(nurl: string) {
    await Browser.open({ url: nurl });
  }
}
