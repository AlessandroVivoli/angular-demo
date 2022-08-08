import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccommodationTypeEnum } from 'src/app/enums/accommodation-type.enum';

@Component({
  selector: 'app-my-accommodation-form',
  templateUrl: './my-accommodation-form.component.html',
  styleUrls: ['./my-accommodation-form.component.scss']
})
export class MyAccommodationFormComponent implements OnInit, AfterViewInit {
  name = new FormControl();
  shortDesc = new FormControl();
  longDesc = new FormControl();
  categorization = new FormControl();
  type = new FormControl();
  price = new FormControl();
  location = new FormControl();
  postalCode = new FormControl();
  freeCancellation = new FormControl<boolean>(false);

  @ViewChild('stars')
  starContainer: ElementRef<HTMLDivElement>;

  data: { inputValue: string, label: string }[] = Object.keys(AccommodationTypeEnum).filter(item => {
    return isNaN(Number(item));
  }).map(item => { return { inputValue: item, label: item } });

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const children = this.starContainer.nativeElement.children;

    for (let i = 0; i < children.length; i++)
      (children.item(i) as HTMLButtonElement)!.addEventListener('click', () => {
        this.categorization.setValue(children.length - i);
        for (let i = 0; i < children.length; i++) {
          if (i < this.categorization.value)
            children.item(children.length - 1 - i)?.classList.add('selected');
          else children.item(children.length - 1 - i)?.classList.remove('selected');
        }
      });

    console.log(this.data);
  }

}
