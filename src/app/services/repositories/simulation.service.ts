import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Post} from "../../model/post";

@Injectable({
  providedIn: 'root'
})
export class SimulationService implements BaseService{
  private posts: Post[];

  /**
   * Makes sure the application has test data to work with.
   */
  constructor() {
    this.posts = [];

    let testPosts = [
      new Post("Lorem ipsum", 52.359419717009594, 4.909416979785766),
      new Post("Dolor sit", 52.35760012645642, 4.908305800852419),
      new Post("Amet", 52.35804757370319, 4.9146431839996385)
    ];

    // Now that we prepared some test data, put it inside the posts array
    for(let post of testPosts){
      this.posts.push(post);
    }
  }

  /**
   * Adds a new post into the posts array.
   *
   * @param post The new post that needs to be inserted
   */
  add(post: Post): number {
    return this.posts.push(post);
  }

  /**
   * Gets all the posts saved in the posts array.
   */
  getAll(): Post[] {
    return this.posts;
  }

  /**
   * Removes the post positioned on given index.
   *
   * @param index The post's index
   */
  remove(index: number): Post {

    // Make sure the requested index exists
    if(index < this.posts.length){
      this.posts[index].isActive = false;

      return this.posts[index];
    } else {
      return null;
    }
  }

  /**
   * Updates the post positioned on given index.
   *
   * @param index The post's index
   * @param post The post's new values
   */
  update(index: number, post: Post): void {

    // Make sure the requested index exists
    if(index < this.posts.length){
      this.posts[index] = post;
    }
  }

}
