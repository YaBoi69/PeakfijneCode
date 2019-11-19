import {EventEmitter, Injectable} from '@angular/core';
import {Post} from '../model/post';
import {User} from '../model/user';
import {SessionService} from './session.service';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  constructor(private sessionService: SessionService) {
  }

  postAddView(post: Post) {
    const currentUser = this.sessionService.getUserRepository().getAll()[0]; // get faked current user
     // get fake faked current user
    const oldViews = post.getViews(); // get the views of the post
    const pointArray = [10, 8, 6, 4, 2, 1]; // get faked amount of points from settings
    if (!oldViews.includes(currentUser)) { // check if the player is in the point bracket
      if (oldViews.length <= pointArray.length) {
        currentUser.givePoints(pointArray[oldViews.length]); // add points to the player
        post.addView(currentUser); // add the viewer to the post
      } else {
        // TODO show message: sorry there couldn't be any points obtained
        console.log("no points left");
      }
    } else {
      // TODO show message: you have already opened this message
      console.log("message already opened");
    }
    console.log(currentUser.getPoints());
  }
}
