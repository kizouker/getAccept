## SCRUM BOARD

## TODO 



## Change request
* **CASE 1**:
  - inheritance for httpost, httpget etc
  - Estimate: 16 hours

* **CASE 2**:
  - send everything in the response from the post, i.e. 
    * maxScore
    * totalScore
  - Estimate: 4-8 hours


### Frontend/client  
* CSS
  - fix body css
  - fix footer css
  * Estimate: 8 hours or infinite
* Last frame has three rolls  
  * Estimate: 2-4 hours
  
### Backend/server
- use more headers (cors, etc)
- debug calcTotalScore
  - Estimate: 8 hours
  
        
### Tests in jest
 * Use ecma modules (es6+) https://jestjs.io/docs/ecmascript-modules
      - Estimate: 4 hours
  * Create more tests:
    - Estimate: 2-4 hours


## IN PROGRESS 
### REQUIREMENTS
    FR1. A calculator service that consist of the bowling logic. This service can have a function like function calculate(currentRoll: Roll, historicRolls: array of Rolls) (backend)

### BUGS
 * when strike, roll1=== 10 => pins should sho nothing, no it shows 0
  =>> debug why this doesn't work out of the box


## DONE
  * spare roll1+roll2 === 10 "/"
  * strike roll1 ===10 "X"
  * Write README.md // installation instructions


