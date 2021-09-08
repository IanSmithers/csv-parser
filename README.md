# PrintJobber
A print job processor for the **PaperCut Coding Challenge**. Takes an input of a CSV file of print jobs in the form
```
Total Pages, Color Pages, Double Sided
25, 10, false
55, 13, true
502, 22, true
1, 0, false
```
and calculates the cost of each job, and the total for all.


## Setup
Before first run, NPM packages need to be installed. 
```
$ npm install
```

## Build
Before running for the first time, or after code updates, a build is required. This can be done using the build command within the `papercut-challenge` folder:
```
$ npm run build
```

There is also a script to build and run against a csv which is useful during development
```
$ npm run buildAndRun ./assets/input/sample-1.csv
```

## Usage
Within the `papercut-challenge` folder, use 
```
$ node . <Filename of CSV file to process>
``` 
to process a csv file of print jobs.

To process the included sample file, run 
```
$ node . ./assets/input/sample-1.csv
```

## Linting
To run Prettier over the code to check for consistency
```
$ npm run lint
```

## Testing
To run Jest tests and get a coverage report, run 
```
$ npm test
```
