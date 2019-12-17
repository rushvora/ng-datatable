# Table component with sorting and pagination for Angular
It is a forked version of [ng-datatable](https://github.com/PascalHonegger/ng-datatable) updated to Angular 8, using Feather icons instead of Glyphicon for showing sorting arrows.

## IMPORTANT
I am currently using custom CSS, to transform the fe-code icon 90 degrees as the default sort icon, and bolded + black chevron up & down icons accordingly.
When feather releases their sort icons (should be soon, going by the related issues), will update the package to use those instead of the current patchwork.

#### Add below to your CSS theme. 
```
.fe-bold {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'Feather' !important;
  speak: none;
  font-style: normal;
  font-weight: bold;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```
```
.fe-bold-transform90 {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'Feather' !important;
  speak: none;
  font-style: normal;
  font-weight: bold;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* Transform 90 degrees, specifically for fe-code for sorting */
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
```
```
.fe-bold-black {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'Feather' !important;
  speak: none;
  font-style: normal;
  font-weight: bold;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  color: black;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```
## Installation

```
npm i @rushvora/ng-datatable --save
```

## Usage example

AppModule.ts
```typescript
import {NgModule} from "@angular/core";
...
import {DataTableModule} from "@rushvora/ng-datatable";

@NgModule({
    imports: [
        ...
        DataTableModule
    ],
    ...
})
export class AppModule {

}
```

AppComponent.html
```html
<table class="table table-striped" [mfData]="data" #mf="mfDataTable" [mfRowsOnPage]="5">
    <thead>
    <tr>
        <th style="width: 20%">
            <mfDefaultSorter by="name">Name</mfDefaultSorter>
        </th>
        <th style="width: 50%">
            <mfDefaultSorter by="email">Email</mfDefaultSorter>
        </th>
        <th style="width: 10%">
            <mfDefaultSorter by="age">Age</mfDefaultSorter>
        </th>
        <th style="width: 20%">
            <mfDefaultSorter by="city">City</mfDefaultSorter>
        </th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let item of mf.data">
        <td>{{item.name}}</td>
        <td>{{item.email}}</td>
        <td class="text-right">{{item.age}}</td>
        <td>{{item.city | uppercase}}</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <td colspan="4">
            <mfBootstrapPaginator [rowsOnPageSet]="[5,10,25]"></mfBootstrapPaginator>
        </td>
    </tr>
    </tfoot>
</table>
```

## API

### `mfData` directive

 - selector: `table[mfData]`
 - exportAs: `mfDataTable`
 - inputs
   - `mfData: any[]` - array of data to display in table
   - `mfRowsOnPage: number` - number of rows should be displayed on page (default: 1000)
   - `mfActivePage: number` - page number (default: 1)
   - `mfSortBy: any` - sort by parameter
   - `mfSortOrder: string` - sort order parameter, "asc" or "desc"
 - outputs
   - `mfSortByChange: any` - sort by parameter
   - `mfSortOrderChange: any` - sort order parameter
 
### `mfDefaultSorter` component

 - selector: `mfDefaultSorter`
 - inputs
   - `by: any` - specify how to sort data (argument for lodash function [_.sortBy ](https://lodash.com/docs#sortBy))
 
### `mfBootstrapPaginator` component
Displays buttons for changing current page and number of displayed rows using bootstrap template (css for bootstrap is required). If array length is smaller than current displayed rows on page then it doesn't show button for changing page. If array length is smaller than min value rowsOnPage then it doesn't show any buttons.

 - selector: `mfBootstrapPaginator`
 - inputs
   - `rowsOnPageSet: number` - specify values for buttons to change number of diplayed rows
