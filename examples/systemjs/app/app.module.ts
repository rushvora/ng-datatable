import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {DataTableModule} from "@rushvora/ng-datatable";
import {HttpClientModule} from "@angular/common/http";
import {DataFilterPipe} from "./data-filter.pipe";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        DataTableModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        DataFilterPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}