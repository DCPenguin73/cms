import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  standalone: false,
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent {
  documents: Document[] = [
    new Document(1, 'Document 1', 'Description 1', 'http://example.com/1', []),
    new Document(2, 'Document 2', 'Description 2', 'http://example.com/2', []),
    new Document(3, 'Document 3', 'Description 3', 'http://example.com/3', []),
    new Document(4, 'Document 4', 'Description 4', 'http://example.com/4', [])
  ];

  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  onSelectedDocument(document: Document) {
    // console.log('📢 Emitting Document:', document); // 🔍 Debugging log
    this.selectedDocumentEvent.emit(document);
  }
}
