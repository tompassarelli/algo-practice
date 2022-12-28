overview of this layer:

Implements the continuous/optimal learning architecture described below:

a data structure contains two files, ex:
  queue.js
  queue-ref.js

The objective is to simplify "review" cycles. 
create a test suite for the main queue.js file


On review cycle 
  The file default state is empty
  on review attempt to implement some prompt 
  (like leave methods empty, include in header instructions)
  all files can be easily examined with quokka for fast prototyping
  TODO: it might nice to create a service that when I finish a review cycle, 
  depending on the iteration of the review cycle, the next review cycle is pushed
  back by a dynamic amount of time and (1d, 2d, 3d, 5d, 8d ex)

An alternative to this is to do LeetCode Problems in the form of
"implement at queue, implement at linkedlist" to avoid managing a test suite

But because I want to practice unit testing, I'd prefer just to manage this all myself.