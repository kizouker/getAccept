## Bowling logic / math


From the game provided I can conclude that:


## Spare
* Square is indicated by "/"
* Spare gives point 10 + plus a bonus of whatever is scored with the next ball
(10 = sum of the pins)
for example:

1. I knock down 9 pins ==> 9 points
2. I knock down the remaining pin ==> 9 points + 1 
3. Next I score 1
=== I get 11 

## Strike 
* Strike is indicated by "X"
* Strike gives 10 + bonus of next two points for next two balls

* Weird thing: points for the strike is shown at the previous score board

## The last point have 3 attempts



## Max points is
* 10 strikes à 30 points = 300 points

## Handicape score


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
spare
trike
perfect game


## server

# given a pair of tries of a frame, decide if we got

function decideFrame
1. A strike
2. A spare
3. A "noramal" frame

# given this frame, strike, spare, or frame, calculate the currentScore
function calculateCurrentScore
1. frame: curentScore = tryOne + tryTwo;
2. spare: currentScore = tryOne + tryTwo+scoreOfNextFrame(tryOne, 0);
3. spare: currentScore = tryOne + tryTwo+scoreOfNextFrame(tryOne,tryTwo);


given (frame,tryOne, tryTwo )
tryOne + tryTwo ==  10 ==> spare


if ( tryOne === 10 ) ===> strike

tryOne + tryTwo ==  10 ==> spare



## client