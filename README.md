# Notes

Run `npn install` to install everything and then `ng serve` to run it.

This uses rxjs to mock the ui calls using a random number generator to pick an arbitrary time for each call.  It then converts the xml to json and stitches them together and subscribes to the forkjoin using an async pipe.  The UI will show a loading text and then display the combined values in a table.

# Jsonstitch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

