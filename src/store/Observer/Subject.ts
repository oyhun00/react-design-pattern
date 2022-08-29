import { Observer } from "./Observer";

export interface Subject {
  subscribe(obs: Observer): void;
  unsubscribe(obs: Observer): void;
  notify(data: String): void;
}

class Observable implements Subject {
  private observers: Observer[];

  constructor() {
    this.observers = [];
  }

  subscribe(obs: Observer) {
    this.observers.push(obs);
  }

  unsubscribe(obs: Observer) {
    this.observers = this.observers.filter((observer) => observer !== obs);
  }

  notify(data: String) {
    this.observers.forEach((observer) => observer(data));
  }
}

export default new Observable();
