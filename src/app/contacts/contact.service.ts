// contact.service.ts
import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [];
  contactChangedEvent = new Subject<Contact[]>(); 
  contactSelectedEvent = new EventEmitter<Contact>();
  maxContactId: number;

  constructor() {
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId();
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getMaxId(): number {
    let maxId = 0;
  
    for (let contact of this.contacts) {
      const currentId = parseInt(contact.id, 10);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
  
    return maxId;
  }

  getContact(id: string): Contact {
    return this.contacts.find(contact => contact.id === id) || null;
  }

  addContact(newContact: Contact) {
    if (!newContact) {
      return;
    }
  
    this.maxContactId++;
    newContact.id = this.maxContactId.toString();
    this.contacts.push(newContact);
    const contactsListClone = this.contacts.slice();
    this.contactChangedEvent.next(contactsListClone);
  }

  updateContact(originalContact: Contact, newContact: Contact) {
    if (!originalContact || !newContact) {
      return;
    }
  
    const pos = this.contacts.indexOf(originalContact);
    if (pos < 0) {
      return;
    }
  
    newContact.id = originalContact.id;
    this.contacts[pos] = newContact;
    const contactsListClone = this.contacts.slice();
    this.contactChangedEvent.next(contactsListClone);
  }

  deleteContact(contact: Contact) {
    if (!contact) {
      return;
    }
  
    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
      return;
    }
  
    this.contacts.splice(pos, 1);
    const contactsListClone = this.contacts.slice();
    this.contactChangedEvent.next(contactsListClone);
  }
}