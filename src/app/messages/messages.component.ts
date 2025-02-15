import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'cms-messages',
  standalone: false,
  
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {} // Inject MessageService

  ngOnInit(): void {
    this.messages = this.messageService.getMessages(); // Fetch initial messages
  }

  onAddMessage(message: Message) {
    console.log('Message received:', message);
    this.messages.push(message);
  }
}