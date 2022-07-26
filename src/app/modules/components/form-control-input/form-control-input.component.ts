import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control-input',
  templateUrl: './form-control-input.component.html',
  styleUrls: ['./form-control-input.component.scss']
})
export class FormControlInputComponent implements OnInit {
  @Input() type: string;
  @Input() name: string;
  @Input() required: boolean;
  @Input() label: string;
  @Input() control: FormControl = new FormControl;
  @Input() id: string;

  @ViewChild('#control') controlElement: ElementRef<HTMLElement>;

  @Input() data: { inputValue: string, label: string }[] = [];

  @Input() icon: string;

  hasIcon: boolean = false;

  constructor() {
    this.type = '';
    this.name = '';
    this.required = false;
    this.label = '';
    this.icon = '';
  }

  ngOnInit(): void {
    this.hasIcon = this.icon.length > 0;
  }

  OnChange(event: any) {
    const element = event.target as HTMLInputElement | HTMLSelectElement;

    if(!this.control.valid) 
      element.setCustomValidity('error')
    else element.setCustomValidity('')
  }
}
