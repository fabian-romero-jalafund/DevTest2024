export class InMemoryStorage<T> {
  private data: T[] = [];

  public add = (item: T) => {
    this.data.push(item);
    return item;
  };

  public getAll = () => {
    return this.data;
  };
}
