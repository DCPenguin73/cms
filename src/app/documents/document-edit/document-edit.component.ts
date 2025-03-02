import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-edit',
  standalone: false,
  
  templateUrl: './document-edit.component.html',
  styleUrl: './document-edit.component.css'
})
export class DocumentEditComponent implements OnInit {
  originalDocument: Document;
  document: Document = new Document('', '', '', '', []);
  editMode: boolean = false;

  constructor(private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.originalDocument = this.documentService.getDocument(id);
        if (this.originalDocument) {
          this.editMode = true;
          this.document = { ...this.originalDocument };
        }
      }
    });
  }

  onCancel() {
    this.router.navigate(['/documents']);
  }

  onSubmit(form: NgForm) {
    if (this.editMode) {
      // Update the existing document
      this.documentService.updateDocument(this.originalDocument, form.value);
    } else {
      // Add a new document
      const newDocument = new Document(
        form.value.id,
        form.value.name,
        form.value.description,
        form.value.url,
        []
      );
      this.documentService.addDocument(newDocument);
    }
    this.onCancel();
  }

}
