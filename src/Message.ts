export class Message {
  text: string;
  uid: string;
  id?: string;
  photoURL: string | null;
  createdAt: Date;
  constructor(
    text: string,
    uid: string,
    createdAt: Date,
    photoURL: string,
    id: string
  ) {
    this.text = text;
    this.photoURL = photoURL;
    this.uid = uid;
    this.id = id;
    this.createdAt = createdAt;
  }
}
