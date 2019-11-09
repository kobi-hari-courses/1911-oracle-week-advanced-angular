import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

const modules = [
    MatButtonModule, 
    MatIconModule, 
    MatToolbarModule, 
    MatCardModule
];

@NgModule({
    imports: [
        CommonModule, 
        ...modules
    ], 
    exports: [
        ...modules
    ]
})
export class AppMaterialModule {}