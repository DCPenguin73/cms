import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-detail',
  standalone: false,
  
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent  {
  @Input() contact: Contact;  
  getLastWord(name: string): string {
    const words = name.split(' ');
    return words[words.length - 1];
  }
  constructor() {}
}
