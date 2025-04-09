import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryList } from '@domain/models/category.model';
import { ListCategoryUseCase } from '@domain/use-cases/category/list-category.use-case';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {imgDefault} from "@domain/utils/constants";

@Component({
  selector: 'app-list-categorie',
  imports: [RouterLink, NgbPagination, FormsModule],
  templateUrl: './list-categorie.component.html',
})
export class ListCategorieComponent implements OnInit {
  private $listUseCase = inject(ListCategoryUseCase);
  private sanitizer = inject(DomSanitizer);
  categories = signal<CategoryList[]>([]);
  search = '';
  totalPages = 0;
  pageSize = 5;
  currentPage = 1;

  private getList() {
    let params = {
      search: this.search,
      page: this.currentPage,
      pageSize: this.pageSize,
    };
    this.$listUseCase.execute(params).subscribe((response) => {
      this.categories.set(response.data);
      this.totalPages = response.totalRecords;
    });
  }

  refresh() {
    this.getList();
  }

  ngOnInit() {
    this.getList();
  }

  sanitizedSvg(icon: string) {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  loadPage($event: any) {
    this.currentPage = $event;
    this.getList();
  }

  setDefaultImg(event: Event) {
    (event.target as HTMLImageElement).src = imgDefault();
  }

}
