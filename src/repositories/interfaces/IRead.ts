export interface IRead<T> {
  find(item: T): Promise<T[]>;
  findOne(id: number): Promise<T>;
}