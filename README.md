# Jsonstitch-angular

Takes xml from a rest call and converts it to a json, then displays it in a table. This is useful for scraping XML and calling API's for data you need. *wink wink*

Uses rxjs to mock the ui calls using a random number generator to pick an arbitrary time for each call.  It then converts the XML to json and stitches them together and subscribes to the forkjoin using an async pipe.  The UI will show a loading text and then display the combined values in a table.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Notes

Run `npn install` to install everything and then `ng serve` to run it.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


