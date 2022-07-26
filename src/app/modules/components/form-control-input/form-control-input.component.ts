import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-control-input',
  templateUrl: './form-control-input.component.html',
  styleUrls: ['./form-control-input.component.scss']
})
export class FormControlInputComponent implements OnInit {
  @Input() type: string;
  @Input() name: string;
  @Input() required: boolean;
  @Input() invalidFeedback: string;
  @Input() validFeedback: string;
  @Input() label: string;

  @Input() keyValues: { inputValue: string, label: string }[] = [
    { inputValue: 'test', label: 'test' },
    { inputValue: 'test2', label: 'Test2' }
  ];

  @Input() icon: string;

  hasInvalid: boolean = false;
  hasValid: boolean = false;

  hasIcon: boolean = false;

  constructor() {
    this.type = '';
    this.name = '';
    this.required = false;
    this.invalidFeedback = '';
    this.validFeedback = '';
    this.label = '';
    this.icon = '';
  }

  ngOnInit(): void {
    this.hasInvalid = this.invalidFeedback.length > 0;
    this.hasValid = this.validFeedback.length > 0;
    this.hasIcon = this.icon.length > 0;
  }
}
