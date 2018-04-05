import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tweet App';
  searchquery = '';
  tweetsdata: any [];

  constructor(private http: Http) {}
  ngOnInit(): void {
    this.authorize();
  }
  authorize() {
    const headers = new Headers();

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      console.log(res);
    });
  }

  searchcall() {
    const headers = new Headers();
    const searchterm = 'query=' + this.searchquery;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/search', searchterm, {headers: headers}).subscribe((res) => {
      this.tweetsdata = res.json().data.statuses;
    });
  }

  onRemoveTweet(tweetIndex: number) {
    this.tweetsdata.splice(tweetIndex, 1);
  }
}





