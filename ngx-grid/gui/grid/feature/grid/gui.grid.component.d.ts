import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { GuiGridGateway } from './gui.grid-gateway';
import { GuiGridIdGenerator } from './register/gui.grid-id.generator';
import { GuiGridRegister } from './register/gui.grid.register';
import { GuiGridApi } from './api/gui.grid.api-provider';
import { FormationCommandInvoker } from '../../../../structure/source/core/api/formation/formation.command-invoker';
import { SourceCommandInvoker } from '../../../../structure/source/core/api/source.command-invoker';
import { FormationWarehouse } from '../../../../structure/source/core/api/formation/formation.warehouse';
import { SearchCommandInvoker } from '../../../../structure/search/core/api/search.command-invoker';
import { SchemaCommandInvoker } from '../../../../schema/core/api/schema.command-invoker';
import { StructureCommandDispatcher } from '../../../../structure/core/api/structure.command-dispatcher';
export declare class GuiGridComponent extends GuiGridGateway implements OnInit {
    private readonly platformId;
    private readonly elementRef;
    private readonly changeDetectorRef;
    private readonly gridRegister;
    private readonly gridIdGenerator;
    private readonly formationCommandDispatcher;
    private readonly formationWarehouse;
    private readonly sourceCommandDispatcher;
    private readonly searchCommandInvoker;
    private readonly schemaCommandInvoker;
    private readonly structureCommandDispatcher;
    structureRef: any;
    gridId: string;
    private localGridId;
    api: GuiGridApi;
    private readonly gridThemeCommandInvoker;
    constructor(platformId: any, elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, gridRegister: GuiGridRegister, gridIdGenerator: GuiGridIdGenerator, formationCommandDispatcher: FormationCommandInvoker, formationWarehouse: FormationWarehouse, sourceCommandDispatcher: SourceCommandInvoker, searchCommandInvoker: SearchCommandInvoker, schemaCommandInvoker: SchemaCommandInvoker, structureCommandDispatcher: StructureCommandDispatcher);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getElementRef(): ElementRef;
    getGridId(): string;
    detectChanges(): void;
    private exposeGridId;
    private initApi;
}