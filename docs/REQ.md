## Things we would like to see you master
Please note all requirements are needed for frontend and backend, unless otherwise specified

* R#= Requirement #
* I#= Implementation of #
* NFR = Non-functional requirement #
* FR = Functional requirement #

### Non-functional requirements #
#### NFR1. The application shall use a state manager (frontend only)
* Answer: I use redux to manage state in the frontend;
(redux tools)

#### NFR2. The application shall be written with "clean code" in mind
* I2. Check. I use prettier and eslint to check syntax and formatting of code. 

#### NFR3. Good naming of functions and variables
* I3. Good is a term of subjective meaning :) but I have tried. Will go this trough again ***

#### NFR4. Well designed(short and precise) functions
* I4: Will have go through this again to see that functions haven't become to large.

#### NFR5. Well designed classes
* I5: If classes are used? Not always the case...I would say this is language specific. In react I tend to use functional components when possible, with hooks instead of the old class components. Where inheritance becomes interesting I might use class components from time to time.

#### NFR6 The application shall contain unit tests
* I6: Check. I use jest and run it with `--experimental-vm-modules` to allow es modules introduces in es6. 

### Functional requirements - What shall be done?

#### FR1. A calculator service that consist of the bowling logic. This service can have a function like function calculate(currentRoll: Roll, historicRolls: array of Rolls) (backend)

#### FR2. A view to fill in all the bowling values (frontend)

#### FR3. At least one stateless component (frontend) 
* IFR3: done. But wy stateless. Some are stateful.

#### FR4. Proper interfaces and types (frontend and backend)
* IFR3:  
    - Interfaces 
    Language dependent or do you mean "REST API as a interface?"
    - Types
    Not so much typing in javascript...

#### Examples of a unit test
1. Strike, spare, and then a frame of 4 and 0 shall output 38
2. Perfect series (12 strikes) shall output 300

#### How to write it?
* Q1. You are free to use any frontend framework (Vue, Angular, React, etc) for frontend
* A1: I use react.

* Q2. You can use any backend (Node, PHP, C#, Java, Python, etc)
* A2: I use node.js

* Q3. You don't need any database
* A3. OK I will not.

## Time
1. You have 72 hours after the test have been sent to you.
2. Finished result can be sent to margret.bjorgvinsdottir@getaccept.com 

Good luck!