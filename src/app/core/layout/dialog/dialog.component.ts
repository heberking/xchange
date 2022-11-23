import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  HostListener,
  OnDestroy,
  Type,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { DialogAnimation } from './dialog-animation';
import { DialogRef } from './dialog-ref';
import { InsertionDirective } from './insertion.directive';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [DialogAnimation],
})
export class DialogComponent implements AfterViewInit, OnDestroy {
  private readonly _onClose = new Subject<any>();

  public onClose = this._onClose.asObservable();

  public componentRef!: ComponentRef<any>;

  public childComponentType!: Type<any>;

  @ViewChild(InsertionDirective) insertionPoint!: InsertionDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    private dialogRef: DialogRef
  ) {}

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.dialogRef.close();
    }
  }

  onOverlayClicked(evt?: MouseEvent) {
    this.dialogRef.close();
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }

  loadChildComponent(componentType: Type<any>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
