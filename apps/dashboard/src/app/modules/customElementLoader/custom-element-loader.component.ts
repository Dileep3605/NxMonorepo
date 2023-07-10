import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { registry } from '../../constants/registry';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

registry;
@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="!loader">
      <!-- Uncomment to enable custom loader -->
    </div>
    <div #vc></div>
  `,
})
export class WrapperComponent {
  @ViewChild('vc', { read: ElementRef, static: true })
  vc!: ElementRef;
  loader = false;
  manifestConfig = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.dataService.getMfeManifestJson().subscribe((response) => {
      this.manifestConfig = response;
      this.loadCustomElement();
    });
  }

  loadCustomElement() {
    const elementName = this.activatedRoute.snapshot.data['elementName'];
    const importName = this.activatedRoute.snapshot.data['importName'];
    const dynamicScripts = this.activatedRoute.snapshot.data['filesUrl'];
    const framework = this.activatedRoute.snapshot.data['framework'];

    const importFn = registry[importName];

    importFn()
      .then(() => {
        const element = document.createElement(elementName);

        dynamicScripts.forEach((item: string) => {
          const isScriptLoaded = document.getElementById(elementName);
          if (!isScriptLoaded) {
            const script = this.generateScript(item, framework, elementName);
            this.vc.nativeElement.appendChild(script);
          }
        });
        this.vc.nativeElement.appendChild(element);
        this.loader = true;
        // eslint-disable-next-line no-restricted-syntax
      })
      .catch((err: Error) => err);
  }

  generateScript(url: string, framework: string, elementName: string) {
    const script = document.createElement('script');
    script.src = `${url}`;
    script.id = elementName;
    script.type = framework === 'vue' ? 'text/javascript' : 'module';
    script.defer = true;
    return script;
  }
}
