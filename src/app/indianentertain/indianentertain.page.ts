import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Plugins } from "@capacitor/core";
const { Share } = Plugins;
@Component({
  selector: "app-indianentertain",
  templateUrl: "./indianentertain.page.html",
  styleUrls: ["./indianentertain.page.scss"]
})
export class IndianentertainPage implements OnInit {
  constructor(private http: HttpClient) {}

  //this stores all the articles
  entertainews;
  showspinner: Boolean = true;
  apiurl =
    "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=b0404985f10f4304bfea8b247262c9b4";

  ngOnInit() {
    //get entertainment news
    this.http.get(this.apiurl).subscribe(
      data => {
        this.entertainews = data;
        this.showspinner = false;
      },
      error => {
        console.log(error);
        alert("Please Check your internet connection");
      }
    );
  }

  async share(shareurl: string) {
    await Share.share({
      title: "",
      text: "",
      url: shareurl,
      dialogTitle: "Share with friends"
    });
  }
}
