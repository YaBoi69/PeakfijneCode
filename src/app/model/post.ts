let lastId: number = 0;

export class Post {
  id: number;
  message: string;
  latitude: number;
  longitude: number;
  attachmentPath: string;
  views: number;
  createdAt: Date;
  createdBy: number;
  isActive: boolean;

  /**
   * Creates a new instance of Post class.
   *
   * @param message The post's message
   * @param latitude The post's latitude position
   * @param longitude The post's longitude position
   * @param attachmentPath OPTIONAL: The post's attachment/image
   */
  constructor(message: string, latitude: number, longitude: number, attachmentPath?: string){
    this.id = lastId++;
    this.message = message;
    this.latitude = latitude;
    this.longitude = longitude;
    this.attachmentPath = attachmentPath;
    this.views = 0;
    this.createdAt = new Date();
    this.createdBy = 1;
    this.isActive = true;
  }
}
