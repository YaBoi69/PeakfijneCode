import {Gps} from './gps';
import {User} from './user';

let lastId = 0;

export class Post {
  id: number;
  message: string;
  latlng: Gps;
  attachmentPath: string;
  //views: number;
  createdAt: Date;
  createdBy: number;
  isActive: boolean;
  createdById: number;
  viewed: User[] = [];

  /**
   * Creates a new instance of Post class.
   *
   * @param createdById id of the user who created the post
   * @param message The post's message
   * @param latitude The post's latitude position
   * @param longitude The post's longitude position
   * @param attachmentPath OPTIONAL: The post's attachment/image
   */
  constructor(createdById: number, message: string, latitude: number, longitude: number, attachmentPath?: string) {
    this.id = lastId++;
    this.message = message;
    this.latlng = new Gps(latitude, longitude);
    this.attachmentPath = attachmentPath;
    //this.views = 0;
    this.createdAt = new Date();
    this.createdBy = 1;
    this.isActive = true;
    this.createdById = createdById;
  }

  addView(user: User) {
    this.viewed.push(user);
  }

  getViews() {
    return this.viewed;
  }
}
