import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { Plugins } from "@capacitor/core";
const { Share } = Plugins;

@Component({
  selector: "app-indiansports",
  templateUrl: "./indiansports.page.html",
  styleUrls: ["./indiansports.page.scss"]
})
export class IndiansportsPage implements OnInit {
  constructor(private http: HttpClient, private sharing: SocialSharing) {}

  sportnews;
  showspinner: Boolean = true;
  apiurl =
    "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b0404985f10f4304bfea8b247262c9b4";

  ngOnInit() {
    this.http.get(this.apiurl).subscribe(
      data => {
        this.sportnews = data["articles"];
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
}
