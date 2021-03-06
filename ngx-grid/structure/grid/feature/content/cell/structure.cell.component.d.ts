import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CellTemplateWithAccessor } from '../../../../../composition/core/domain-read/definition/cell-template-with-accessor';
import { StructureCellEditArchive } from '../../edit/structure.cell-edit.archive';
import { StructureCellEditStore } from '../../edit/structure.cell-edit.store';
import { SourceCommandInvoker } from '../../../../source/core/api/source.command-invoker';
import { ChangedValueEmitter } from '../../../../../composition/core/domain-read/edit/changed-value.emitter';
import { ItemEntity } from '../../../../source/core/domain/core/item/item.entity';
import { StructureCellEditCloseAllService } from '../../edit/structure.cell-edit-close-all.service';
export declare class StructureCellComponent extends SmartComponent implements AfterViewInit {
    private readonly changeDetectorRef;
    private readonly elementRef;
    private readonly structureCellEditArchive;
    private readonly structureCellEditStore;
    private readonly cellEditCloseAllService;
    private readonly sourceCommandService;
    entity: ItemEntity;
    cell: CellTemplateWithAccessor;
    editMode: boolean;
    cellEditingEnabled: boolean;
    searchPhrase: string;
    inEditMode: boolean;
    editContext: any;
    valueChanges$: ChangedValueEmitter<any>;
    status$: ChangedValueEmitter<any>;
    actualValue: any;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureCellEditArchive: StructureCellEditArchive, structureCellEditStore: StructureCellEditStore, cellEditCloseAllService: StructureCellEditCloseAllService, sourceCommandService: SourceCommandInvoker);
    ngAfterViewInit(): void;
    isCellEditingEnabled(): boolean;
    enterEditMode(forceCheck?: boolean): void;
    exitEditMode(): void;
    submitChangesAndExit(): void;
    private observeFieldStatus;
    private observeValueChanges;
    private publishEditState;
    private publishEditEnter;
    private publishEditCancel;
    private publishEditSubmit;
}
