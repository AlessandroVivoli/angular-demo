import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccomodationTypeEnum } from 'src/app/enums/accomodation-type.enum';

@Component({
  selector: 'app-my-accomodation-form',
  templateUrl: './my-accomodation-form.component.html',
  styleUrls: ['./my-accomodation-form.component.scss']
})
export class MyAccomodationFormComponent implements OnInit, AfterViewInit {
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

  data: { inputValue: string, label: string }[] = Object.keys(AccomodationTypeEnum).filter(item => {
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
  }

}
