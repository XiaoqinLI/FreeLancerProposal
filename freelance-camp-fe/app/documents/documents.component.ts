import { Component } from '@angular/core';
import { Document } from './document'

@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
    pageTitle: string = "Document Dashboard"

    documents: Document[] = [
        {
           title: "My first Doc",
           description: "first first Doc",
           file_url: "https://www.google.com",
           updated_at: "03/03/17",
           image_url: "https://www.google.com",
        },
        {
           title: "My Second Doc",
           description: "first Second Doc",
           file_url: "https://www.google.com",
           updated_at: "03/03/17",
           image_url: "https://www.google.com",
        },
               {
           title: "My third Doc",
           description: "first third Doc",
           file_url: "https://www.google.com",
           updated_at: "03/03/17",
           image_url: "https://www.google.com",
        }
    ]
}