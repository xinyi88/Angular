import { RouterModule, Routes } from '@angular/router';
import { CircularComponent } from './circular/circular.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { InteractionComponent } from './interaction/interaction.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateForm2Component } from './template-form2/template-form2.component';
export const appRoutes: Routes = [
    {
        path: 'circular',
        component: CircularComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'user/:userId', // userId: parameter
        component: SearchResultComponent
    },
    {
        path: 'vote',
        component: VotetakerComponent
    },
    {
        path: 'template',
        component: TemplateFormComponent
    },
    {
        path: 'reactive',
        component: ReactiveFormComponent
    },
    {
        path: 'templateform',
        component: TemplateForm2Component
    }
];
