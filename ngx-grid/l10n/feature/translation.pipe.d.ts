import { ChangeDetectorRef, PipeTransform } from '@angular/core';
import { TranslationService } from '../core/api/translation.service';
export declare class TranslationPipe implements PipeTransform {
    private readonly changeDetectorRef;
    private readonly translationService;
    private actualTranslationValue;
    private subscription;
    constructor(changeDetectorRef: ChangeDetectorRef, translationService: TranslationService);
    ngOnDestroy(): void;
    transform(key: string): string;
}
