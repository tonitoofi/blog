import { Component, OnInit } from "@angular/core";
import { PostService} from '../../posts/post.service';
import {PostI} from '../../../shared/models/post.interface'; 
import { Observable } from 'rxjs';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  // public posts: {
  //   id: string;
  //   titlePost: string;
  //   contentPost: string;
  //   imagePost: string;
  // }[] = [
  //   {
  //     id: "1",
  //     titlePost: "Post1",
  //     contentPost: `It is a long established fact that a reader will be distracted by 
  //     the readable content of a page when looking at its layout. The point of using
  //     Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
  //     opposed to using 'Content here, content here', making it look like readable 
  //     English. Many desktop publishing packages and web page editors now use Lorem 
  //     Ipsum as their default model text, and a search for 'lorem ipsum' will uncover 
  //     many web sites still in their infancy. Various versions have evolved over the
  //     years, sometimes by accident, sometimes on purpose (injected humour and the 
  //     like)`,
  //     imagePost: "https://i.picsum.photos/id/237/200/300.jpg",
  //   },
  //   {
  //     id: "2",
  //     titlePost: "Post2",
  //     contentPost: `It is a long established fact that a reader will be distracted by 
  //     the readable content of a page when looking at its layout. The point of using
  //     Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
  //     opposed to using 'Content here, content here', making it look like readable 
  //     English. Many desktop publishing packages and web page editors now use Lorem 
  //     Ipsum as their default model text, and a search for 'lorem ipsum' will uncover 
  //     many web sites still in their infancy. Various versions have evolved over the
  //     years, sometimes by accident, sometimes on purpose (injected humour and the 
  //     like)`,
  //     imagePost: "https://i.picsum.photos/id/237/200/300.jpg",
  //   },
  //   {
  //     id: "3",
  //     titlePost: "Post3",
  //     contentPost: `It is a long established fact that a reader will be distracted by 
  //     the readable content of a page when looking at its layout. The point of using
  //     Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
  //     opposed to using 'Content here, content here', making it look like readable 
  //     English. Many desktop publishing packages and web page editors now use Lorem 
  //     Ipsum as their default model text, and a search for 'lorem ipsum' will uncover 
  //     many web sites still in their infancy. Various versions have evolved over the
  //     years, sometimes by accident, sometimes on purpose (injected humour and the 
  //     like)`,
  //     imagePost: "https://i.picsum.photos/id/237/200/300.jpg",
  //   },
  //   {
  //     id: "4",
  //     titlePost: "Post4 ",
  //     contentPost: `It is a long established fact that a reader will be distracted by 
  //     the readable content of a page when looking at its layout. The point of using
  //     Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
  //     opposed to using 'Content here, content here', making it look like readable 
  //     English. Many desktop publishing packages and web page editors now use Lorem 
  //     Ipsum as their default model text, and a search for 'lorem ipsum' will uncover 
  //     many web sites still in their infancy. Various versions have evolved over the
  //     years, sometimes by accident, sometimes on purpose (injected humour and the 
  //     like)`,
  //     imagePost: "https://i.picsum.photos/id/237/200/300.jpg",
  //   }
  // ];

  public posts$: Observable<PostI[]>;

  constructor(private postSvc: PostService) {}

  ngOnInit() {
  // this.postSvc.getAllPosts().subscribe(res => console.log('POST', res));
  this.posts$ = this.postSvc.getAllPosts();

  }
}
