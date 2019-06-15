# ts-rop

> This library is based on the  [talk](https://fsharpforfunandprofit.com/rop/) and [post](https://fsharpforfunandprofit.com/posts/recipe-part2/) Railway Oriented Programming by [Scott Wlaschin](https://twitter.com/ScottWlaschin).


| Concept   | Description                                                                                                                                                                        |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| success   | A constructor that takes a one-track value and creates a two-track value on the Success branch. In other contexts, this might also be called return or pure.                       |
| failure   | A constructor that takes a one-track value and creates a two-track value on the Failure branch.                                                                                    |
| bind      | An adapter that takes a switch function and creates a new function that accepts two-track values as input.                                                                         |
| compose   | Switch composition. A combiner that takes two switch functions and creates a new switch function by connecting them in series.                                                     |
| lift      | An adapter that takes a normal one-track function and turns it into a switch function.                                                                                             |
| map       | An adapter that takes a normal one-track function and turns it into a two-track function.                                                                                          |
| tee       | An adapter that takes a dead-end function and turns it into a one-track function that can be used in a data flow. (Also known as tap.)                                             |
| tryCatch  | An adapter that takes a normal one-track function and turns it into a switch function, but also catches exceptions.                                                                |
| doubleMap | An adapter that takes two one-track functions and turns them into a single two-track function. (Also known as bimap.)                                                              |
| plus      | A combiner that takes two switch functions and creates a new switch function by joining them in "parallel" and "adding" the results. (Also known as ++ and <+> in other contexts.) |
