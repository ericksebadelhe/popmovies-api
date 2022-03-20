import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'
import { Category } from './Category';

@Entity('movies')
export class Movie {

  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  thumbnail: string;

  @Column()
  synopsis: string;

  @Column()
  rating: number;

  @Column()
  duration: number;

  @Column()
  year: number;

  @Column()
  release_date: Date;

  @Column()
  category_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
