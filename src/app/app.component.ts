import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    works: any[];

    singleWork: any;

  constructor(){

    this.singleWork = {
      id: 1,
      name: ' ',
      bg: ' ',
      content: ' ',
      images: [

      ]

    }

    this.works = [
      {
          id: 1,
          name: 'Work1',
          bg: 'assets/img/work/proj-1/thumb.jpg',
          content: `TYPO: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
          images: [
            '/assets/img/work/proj-1/img1.jpg',
            '/assets/img/work/proj-1/img2.jpg',
            '/assets/img/work/proj-1/img3.jpg',
            '/assets/img/work/proj-1/img4.jpg',
            '/assets/img/work/proj-1/img5.jpg'
          ]
      },
      {
        id: 2,
        name: 'Work2',
        bg: 'assets/img/work/proj-2/thumb.jpg',
        content: 'qwertyuu tttutu tfututf ftututfu  ututfu tutu tututu tutut',
        images: [
          '/assets/img/work/proj-2/CityIn-AntonSkvortsov.jpg'
        ]
      },
      {
        id: 3,
        name: 'Work3',
        bg: 'assets/img/work/proj-3/thumb.jpg',
        content: 'qwertyuu tttutu tfututf ftututfu  ututfu tutu tututu tutut',
        images: [
          '/assets/img/work/proj-1/img1.jpg',
          '/assets/img/work/proj-1/img2.jpg',
          '/assets/img/work/proj-1/img3.jpg',
          '/assets/img/work/proj-1/img4.jpg',
          '/assets/img/work/proj-1/img5.jpg'
        ]
      },
      {
        id: 4,
        name: 'Work4',
        bg: 'assets/img/work/proj-4/thumb.jpg',
        content: 'qwertyuu tttutu tfututf ftututfu  ututfu tutu tututu tutut',
        images: [
          '/assets/img/work/proj-1/img1.jpg',
          '/assets/img/work/proj-1/img2.jpg',
          '/assets/img/work/proj-1/img3.jpg',
          '/assets/img/work/proj-1/img4.jpg',
          '/assets/img/work/proj-1/img5.jpg'
        ]
      },
      {
        id: 5,
        name: 'Work5',
        bg: 'assets/img/work/proj-5/thumb.jpg',
        content: 'qwertyuu tttutu tfututf ftututfu  ututfu tutu tututu tutut',
        images: [
          '/assets/img/work/proj-1/img1.jpg',
          '/assets/img/work/proj-1/img2.jpg',
          '/assets/img/work/proj-1/img3.jpg',
          '/assets/img/work/proj-1/img4.jpg',
          '/assets/img/work/proj-1/img5.jpg'
        ]
      },
      {
        id: 6,
        name: 'Work6',
        bg: 'assets/img/work/proj-6/thumb.jpg',
        content: 'Lrem Lorem 1111',
        images: [
          '/assets/img/work/proj-1/img1.jpg',
          '/assets/img/work/proj-1/img2.jpg',
          '/assets/img/work/proj-1/img3.jpg',
          '/assets/img/work/proj-1/img4.jpg',
          '/assets/img/work/proj-1/img5.jpg'
        ]
      },
      {
        id: 7,
        name: 'Work7',
        bg: 'assets/img/work/proj-7/thumb.jpg',
        content: `qwertyuu tttutu tfututf ftututfu  ututfu tutu tututu tutut`,
        images: [
          '/assets/img/work/proj-1/img1.jpg',
          '/assets/img/work/proj-1/img2.jpg',
          '/assets/img/work/proj-1/img3.jpg',
          '/assets/img/work/proj-1/img4.jpg',
          '/assets/img/work/proj-1/img5.jpg'
        ]
      },
      {
        id: 8,
        name: 'Work8',
        bg: 'assets/img/work/proj-8/thumb.jpg',
        content: 'qwertyuu tttutu tfututf ftututfu  ututfu tutu tututu tutut',
        images: [
          '/assets/img/work/proj-1/img1.jpg',
          '/assets/img/work/proj-1/img2.jpg',
          '/assets/img/work/proj-1/img3.jpg',
          '/assets/img/work/proj-1/img4.jpg',
          '/assets/img/work/proj-1/img5.jpg'
        ]
      }


    ]
  }

  title = 'app works!';
  size = 0;
  show: string = 'none';

  workBelt(work): any {
    this.size = -100;
    this.show = 'block';
    console.log(work);

    this.singleWork = {
      id: work.id,
      name:  work.name,
      bg:  work.bg,
      content:  work.content,
      images: work.images

    }




  }

  returnWorkBelt(){
    this.size = 0;
    this.show = 'none';
  }





}
