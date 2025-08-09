import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserProduct } from '../../../shared/models/userProduct.model';
import { CommonService } from '../../../shared/services/common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: UserProduct[] = [
    {
      image: 'https://1drv.ms/i/c/f343ed142930869c/IQTDH_xaXzMaRrJLZRxi93mtASR3D4H7rL3GKEzG8SBYcNY',
      name: 'CustomCv',
      description: 'App web che mostra il mostra il CV personalizzato',
      link: 'https://ameapps.github.io/CustomCv/#',
      tags: ['app'],
    },
    {
      image: 'https://cdn.pixabay.com/photo/2022/07/05/11/06/mountains-7302806__480.jpg',
      name: 'SportTracker',
      description: 'App per il monitoraggio delle attività sportive e del cibo assunto',
      link: 'https://ameapps.github.io/SportTracker/#/menu/homepage',
      tags: ['app'],
    },
    {
      image: 'https://1drv.ms/i/c/f343ed142930869c/IQTjurlK7ovuRaoUvV_-Z0xkAYbZha4TrbCHFx6zltjD0d8',
      name: 'GameScopa',
      description: 'Celebre gioco di carte italiano',
      link: 'https://ameapps.github.io/GameScopa',
      tags: ['game']
    },
    {
      image: 'https://1drv.ms/i/c/f343ed142930869c/IQSkyAtp9mrgQY7NhqzPFWQhAdHiaU1GSZU_XS5QwM63VHk',
      name: 'MomsDay',
      description: 'App per la celebrazione della giornata della mamma',
      link: 'https://ameapps.github.io/MomsDay2025/',
      tags: ['game']
    },
    {
      image: 'https://1drv.ms/i/c/f343ed142930869c/IQS6QCMacAoET7lgaav6UFUhAd7oQ2CE78A5qN0I3-3BN8c',
      name: 'WordleClone',
      description: 'App che simula il gioco Wordle',
      link: 'https://ameapps.github.io/WordleClone/',
      tags: ['app']
    },
    {
      image: 'https://1drv.ms/i/c/f343ed142930869c/IQQptkhzQhBjQb9Q2UDvUyW8ARFWdYxZfTGlI3NNyL5djgU?width=320&height=398',
      name: 'LovePurpose',
      description: 'App per dichiarare il proprio amere ad una ragazza',
      link: 'https://ameapps.github.io/LovePurpose/',
      tags: ['game']
    },
    {
      image: 'https://1drv.ms/i/c/f343ed142930869c/IQRsRF0jY2W8QYvl9BOkxeT-AQvhdaQy-pT_PkliSa54mNo',
      name: 'WorkTools',
      description: 'App che propone una serie di tools da usare sul lavoro',
      link: 'https://ameapps.github.io/WorkToolsV2.0/',
      tags: ['app']
    }
  ];

  // Filtro tag
  allTags: string[] = [];
  selectedTags: string[] = [];
  filteredProducts: UserProduct[] = [];

  constructor(public common: CommonService, private router: Router) {
    this.updateTags();
    this.filterProducts();
  }

  updateTags() {
    const tagsSet = new Set<string>();
    this.products.forEach(p => p.tags?.forEach(t => tagsSet.add(t)));
    this.allTags = Array.from(tagsSet);
  }

  toggleTag(tag: string) {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    } else {
      this.selectedTags.push(tag);
    }
    this.filterProducts();
  }


  filterProducts() {
    console.log('Filtraggio prodotti con tag:', this.selectedTags);
    if (this.selectedTags.length === 0) {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(p =>
        p.tags?.some(t => this.selectedTags.includes(t))
      );
    }
  }

  openProductLink(link: string) {
    window.open(link, '_blank');
  }

  addProduct() {
    this.router.navigate(['/products/add']);
  }
}
