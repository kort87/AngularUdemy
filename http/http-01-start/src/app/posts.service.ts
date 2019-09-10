import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
    .post<{name: string}>(
      'https://rbeangularudemy.firebaseio.com/posts.json',
      postData,
      {
        observe: 'response'
      }
    )

    .subscribe(responseData => {
      console.log(responseData);
    }, error => {
      this.error.next(error.message);
    } );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'customData');
    return this.http
    .get<{[key: string]: Post}>(
      'https://rbeangularudemy.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({'Custom-header': 'hello'}),
        params: searchParams,
        responseType: 'json'
      }
      )
    .pipe(
      map((responseData) => {
      const postsArray: Post[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postsArray.push({...responseData[key], id: key});
        }
      }
      return postsArray;
    }),
    catchError(errorRes => {
      // Do something
      return throwError(errorRes);
    }));
  }

  clearPosts() {
    return this.http
    .delete<{name: string}>(
      'https://rbeangularudemy.firebaseio.com/posts.json',
      {
        observe: 'events',
        responseType: 'json'
      }
    ).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Response) {
        // Do something else
      }
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    }));
  }
}
