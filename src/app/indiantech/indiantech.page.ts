import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { Plugins } from "@capacitor/core";
const { Share, Browser } = Plugins;

@Component({
  selector: "app-indiantech",
  templateUrl: "./indiantech.page.html",
  styleUrls: ["./indiantech.page.scss"]
})
export class IndiantechPage implements OnInit {
  constructor(private http: HttpClient, private sharing: SocialSharing) {}

  technews;
  showspinner: Boolean = true;
  apiurl =
    "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b0404985f10f4304bfea8b247262c9b4";

  ngOnInit() {
    this.http.get(this.apiurl).subscribe(
      data => {
        this.technews = data["articles"];
        this.showspinner = false;
      },
      error => {
        console.log(error);
        alert("Please Check your internet connection");
      }
    );
  }

  doRefresh(event) {
    location.reload();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
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
    await Browser.open({ url: nurl, toolbarColor: "#282a36" });
  }
}
