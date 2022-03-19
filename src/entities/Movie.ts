import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'
import { MovieCategory } from './MovieCategory';

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
  category_id: string;

  @ManyToOne(() => MovieCategory)
  @JoinColumn({ name: 'category_id' })
  category: MovieCategory;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
