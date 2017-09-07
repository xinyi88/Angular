import { RouterModule, Routes } from '@angular/router';
import { CircularComponent } from './circular/circular.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { InteractionComponent } from './interaction/interaction.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
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
    }
];
