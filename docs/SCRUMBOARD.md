# SCRUM BOARD
## IN PROGRESS 
### Priority A - skallkrav

## TODO (Not started)
### Priority A - "Skall-krav"
* Last frame has three rolls  
  -  Estimate: 2-8 hours (***)

### FR? : MaxScore?
- Estimate 4 hours
### Update running score in the frame
- Estimate 4 hours

Total: 16 hours left

## constants.js common for both server and client


## error handling if server is unavailable


### BUGS
 * when strike, roll1===10 => pins should sho nothing, now it shows 0  
- Estimate : 1-2 hours
* common constants = exception for prettier


## DONE

### FR1: Backend/server - 
  - debug calcTotalScore
  - Estimate: 8-12 hours (***) ; Actual: 4 hours
  - [10,null] [8,2] [3,4] gives 38 but should be 40
DONE
### Tests in jest
- Priority: A - "skall-krav"
 * 4 tests at the moment 
 * Create additonal tests - 7+ DONE
 * Use ecma modules (es6+) https://jestjs.io/docs/ecmascript-modules
- DONE

### NFR3. Good naming of functions and variables
* I3. Good is a term of subjective meaning :) but I have tried. Will go this trough again ***
- Priority B: Estimate: 0.5 hours (***)
DONE

### NFR4. Well designed(short and precise) functions
* I4: Will have go through this again to see that functions haven't become to large.
- Priority B: Estimate: 0.5 hours (***)
DONE


### Misc
  * Write README.md // installation instructions
DONE

##  IMPEDIMENT -  Questions
#### FR4. Proper interfaces and types (frontend and backend)
* IFR3:  
    - Interfaces 
    Language dependent 
    - Types
    Not so much typing in javascript...
    
#### NFR5. Well designed classes
* I5: If classes are used? Not always the case...I would say this is language specific. In react I tend to use functional components when possible, with hooks instead of the old class components. Where inheritance becomes interesting I might use class components from time to time.

## Change request
* **CASE 1**:
- Priority: B - nice to have
  - inheritance for httpost, httpget etc
  - Estimate: 16 hours

* **CASE 2**:
- Priority: A - "skall-krav"
  - send everything in the response from the post, i.e. 
    * maxScore
    * totalScore
  - Estimate: 2-4 hours (***)
### Priority B - Nice to have 
### Frontend/client  
* CSS
- Priority: B - nice to have
  - fix body css
  - fix footer css
  * Estimate: 8 hours or infinite
  
### Backend/server
- use more headers (cors, etc)
- Priority: B - nice to have
       
