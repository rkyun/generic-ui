import { ElementRef, Renderer2, OnDestroy, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormationQueryService } from 'structure/app/formation/formation-query.service';
import { SelectedRowsList } from 'structure/domain/formation/query/selected-rows/selected-rows-list';
import { SchemaRowColoring } from 'structure/domain/schema/schema-row-coloring';
import { Entity } from 'structure/domain/source/entity';
import { SourceQueryService } from 'structure/app/source/source-query.service';
import { StructureId } from 'structure/domain/structure-id';
import { ResizeDetector } from 'util/fabric/ui/behaviour/resize-detector/resize.detector';
import { CellTemplateWithAccessor } from 'structure/domain/presentation/query/templates/cell-template-with-accessor';
import { SchemaQueryService } from 'structure/app/schema/schema-query.service';
import { PresentationQueryService } from 'structure/app/presentation/presentation-query.service';
import { PresentationCommandService } from 'structure/app/presentation/presentation-command.service';
export declare class StructureContainerComponent implements OnInit, AfterViewInit, OnDestroy {
    private elementRef;
    private renderer;
    private changeDetectorRef;
    private structureId;
    private sourceQueryService;
    private schemaQueryService;
    private presentationCommandService;
    private presentationQueryService;
    private formationQueryService;
    private resizeDetector;
    private structureParent;
    containerRef: ElementRef;
    columns: Array<CellTemplateWithAccessor>;
    source: Array<Entity>;
    height: number;
    selectedRows: SelectedRowsList;
    rowColoring: SchemaRowColoring;
    private autoResizeWidthEnabled;
    private unsubscribe$;
    constructor(elementRef: ElementRef, renderer: Renderer2, changeDetectorRef: ChangeDetectorRef, structureId: StructureId, sourceQueryService: SourceQueryService, schemaQueryService: SchemaQueryService, presentationCommandService: PresentationCommandService, presentationQueryService: PresentationQueryService, formationQueryService: FormationQueryService, resizeDetector: ResizeDetector, structureParent: any);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setHeight(height: number): void;
    private recalculateContainer;
}