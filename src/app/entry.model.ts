export class Entry {
  public title: string;
  public minutes: number;
  public hours: number;

  // need to display time
  // but also add it up later !!
  // public time: number + ':' + number;

  // public billingRate: number;
  public client: string;
  public project: string;
  public description: string;

  constructor(title: string, desc: string, hours: number, min: number) {
    this.title = title;
    this.description = desc;
      this.hours = hours;
      this.minutes = min;
      // !! be able to add up hrs & min later !!
  }
}
