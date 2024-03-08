import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: null,
})
export class DialogService {
  private _config = {
    panelClass: 'dialog__container',
    maxWidth: 'auto',
    autoFocus: false,
  };
  constructor(private readonly dialog: MatDialog) {}

  show<T>(
    component: ComponentType<T> | TemplateRef<T>,
    data?: any
  ): Observable<any> {
    // IMPROVEMENT: should receive the component and wrap it with the dialog component, if its a small screen then open the component in the panel
    const dialogRef = this.dialog.open(component, { ...this._config, data });
    return dialogRef.afterClosed();
  }

}
