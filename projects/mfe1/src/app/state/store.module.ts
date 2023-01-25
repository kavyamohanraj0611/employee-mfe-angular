import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from '@ngrx/store';
import { basicDetailReducer } from './basic.reducer';
import { basicDetailsEffect } from './basic.effect';



@NgModule({
    imports: [
        CommonModule,
        
        StoreModule.forFeature(
            'basic',
            basicDetailReducer
        ),
        EffectsModule.forFeature([
            basicDetailsEffect
        ])
    ],
})
export class basicSetailStoreModule {
}