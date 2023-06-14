## Bowling logic / math
(Skriv på sidan - reglerna)
From the game provided I can conclude that:

## Spare

(A)
* Square is indicated by "/"
* You need to know the score of the next frame to calculate the score for the spare
* Spare gives point 10 + plus a bonus of whatever is scored with the next ball
(10 = sum of the pins)
for example:
1. I knock down 9 pins ==> 9 points
2. I knock down the remaining pin ==> 9 points + 1 
3. Next I get frame I get 5 points the first round

=== I get 10+5 for the Spare


## Strike 
(B)
* Strike is indicated by "X"
* You need to know the score of the next frame to calculate the score for the spare
* Strike gives 10 + bonus of next two points for next two balls
* Example: 
1. I knock down 10 pins ==> 9 points
2. Next frame I knock down 4 and 3 pins
3. I get score; 10+4+3 = 17

## The last point have 3 attempts. 
what is this about?



## Max points is
* 10 strikes à 30 points = 300 points

## Handicape score

## How to represent the frame, rounds, currentAccumlatedScore, finalScore

Example above for spare representated (A):

[[9,1][5]] eller ??? 

Example above for spare representated (B):
[[10],[4,3]]

[
  [3, 4], // first frame
  [10, null], // second frame
  [null, null], // third frame
  // ...
]

## Examples of a unit test
1. Strike, spare, and then a frame of 4 and 0 shall output 38
2. Perfect series (12 strikes) shall output 300
3. inperfect series gives 0 
4. Spare, 4,6 for all ten gives 140
5. strike, spare (5,5) 5 gives:
frameCount1= 20 = 10 + next two points 5+5
frameCount2= frameCount1 + 10+5 = 35
frameCount3= frameCount2 + 5 + 0 = 40

## Terminology

frame  - game consists of 10 frames and
each frame consists of two rounds
spare
trike
perfect game


## server

# given a pair of tries of a frame, decide if we got
function decideFrame
1. A strike
2. A spare
3. A "noraml" frame

# given this frame, strike, spare, or frame, calculate the currentScore
This score should be calculcalated by the server/backend

function calculateCurrentScore
1. frame: curentScore = tryOne + tryTwo;
2. spare: currentScore = tryOne + tryTwo+scoreOfNextFrame(tryOne, 0);
3. spare: currentScore = tryOne + tryTwo+scoreOfNextFrame(tryOne,tryTwo);

# Calculcate current handicapscore = accumulated score

# Calculcate max possible current



given (frame,tryOne, tryTwo )
tryOne + tryTwo ==  10 ==> spare


if ( tryOne === 10 ) ===> strike

tryOne + tryTwo ==  10 ==> spare



## client'

### static content
1. an array of 10 chiffres -10, ska ändras beeroene på fiursta klicket

hur ska sidan uppdateras?
call server => get new content

2. Title bar
with button name | firstname | lastname | hdcp | title                                          ^minimize, remove
1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 handicpap | max possible
tryOne ¶ tryTwo 
currentScore


tryTwo = "X" if tryOne === 10
tryTwo = "/" if currentScore=tryOne+TryTwo == 10

en statiks sida
en tabell
knappar



# Dynakic content
# click remove to remove the current module
# add another game to create a new module of 10 frames
# click the person
- add name, first and last name
- add handicape number
- press OK

updates "Rickard Åberg : hcp: 5"


# what sghould be in the state?

# Q and A
- handicape?
- user handling?
- remove add module?
-  The last point have 3 attempts. what is this about?



FR4. Proper interfaces and types (frontend and backend)
Q=?