import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  popularCategories: typeCategory[] = [
    {
      url: '../../assets/images/Daco_1558328.png',
      title: 'category1',
      info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam fug dolores non veritatis sequi sit deserunt delec',
    },
    {
      url: '../../assets/images/Daco_1558328.png',
      title: 'category2',
      info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam fug dolores non veritatis sequi sit deserunt delec',
    },
    {
      url: '../../assets/images/Daco_1558328.png',
      title: 'category3',
      info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam fug dolores non veritatis sequi sit deserunt delec',
    },
    {
      url: '../../assets/images/Daco_1558328.png',
      title: 'category4',
      info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam fug dolores non veritatis sequi sit deserunt delec',
    },
    {
      url: '../../assets/images/Daco_1558328.png',
      title: 'category5',
      info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam fug dolores non veritatis sequi sit deserunt delec',
    },
    {
      url: '../../assets/images/Daco_1558328.png',
      title: 'category6',
      info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam fug dolores non veritatis sequi sit deserunt delec',
    },
  ];

  constructor() {}
}
export interface typeCategory {
  url: string;
  title: string;
  info: string;
}
