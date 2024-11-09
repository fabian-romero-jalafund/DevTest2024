export class InMemoryStorage<T> {
  private data: T[] = [];

  public add = (item: T) => {
    this.data.push(item);
    return item;
  };

  public getAll = () => {
    return this.data;
  };

  public updateByKey = (key: keyof T, value: T[keyof T], newItem: T) => {
    let currentItem = this.data.find((item) => item[key] === value);

    if (currentItem) {
      currentItem = newItem;
    }

    return currentItem;
  };

  public findByKey = (key: keyof T, value: T[keyof T]) => {
    let currentItem = this.data.find((item) => item[key] === value);
    return currentItem;
  }
}
