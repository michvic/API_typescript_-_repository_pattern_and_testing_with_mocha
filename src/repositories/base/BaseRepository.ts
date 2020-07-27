// import all interfaces
import { IWrite } from '../interfaces/IWrite';
import { IRead } from '../interfaces/IRead';

import Knex, {Transaction, QueryBuilder} from 'knex';

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

  public readonly _collection: QueryBuilder;

  constructor(db: Transaction | Knex) {
    this._collection = db(this.getNameTable());
  }

  abstract getNameTable(): string;

  async create(item: T): Promise<number> {
    const [id]: number[]  = await this._collection.insert(item);
    return id
  }

  update(id: number, item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
 
  async delete(id: number): Promise<boolean> {
    const result:boolean = await this._collection.where('id', id).del()
    return result
  }
 
  find(item: T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }

  async findOne(id: number): Promise<T> {
    const result:T = await this._collection.where('id', id).first();
    return result;
  }
}