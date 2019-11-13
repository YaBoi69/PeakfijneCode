import { Injectable } from '@angular/core';
import {Post} from "../../model/post";

export interface BaseService {

  add(post: Post): number;

  getAll(): Post[];

  remove(index: number): Post;

  update(index: number, post: Post): void;
}
