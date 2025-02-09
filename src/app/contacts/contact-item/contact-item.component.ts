import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-item',
  standalone: false,
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css'
})
export class ContactItemComponent {
  @Input() contact: Contact;
  @Output() contactSelected = new EventEmitter<void>();

  getLastWord(name: string): string {
    const words = name.split(' ');
    return words[words.length - 1];
  }

  onSelect() {
    this.contactSelected.emit();
  }
}