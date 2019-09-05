export class Server {
  instanceType: string;
  name: string;
  status: string;
  started: Date;

  constructor(instType: string, serverName: string, serverStatus: string, startingDate: Date) {
    this.instanceType = instType;
    this.name = serverName;
    this.status = serverStatus;
    this.started = startingDate;
  }
}
