[![Metadelta Logo](http://aunyks.com/metadelta/assets/metadelta-logo-transparent.png)](https://aunyks.com/metadelta)
# Metadelta Documentation
______________________________________________  
## Arithmetic Functions
**metadelta.abs**

*Get absolute value of a value*
```
metadelta.abs('-1') // or metadelta.abs(-1)
returns
'1'
```
Argument(s): a string or number representation of the value of which the absolute value will be found

Return: A string of the absolute value of the given value  

**metadelta.sin**

*Find the sine of a value*
```
metadelta.sin('0') // or metadelta.sin(0)
returns
'0'
```
Argument(s): a string or number representation of the value of which the corresponding sine value will be found

Return: A string of the output sine value of the given value  

**metadelta.cos**

*Find the cosine of a value*
```
metadelta.cos('0') // or metadelta.cos(0)
returns
'1'
```
Argument(s): a string or number representation of the value of which the corresponding cosine value will be found

Return: A string of the output cosine value of the given value  

**metadelta.tan**

*Find the tangent of a value*
```
metadelta.tan('pi/4') // or metadelta.tan(0.7853981)
returns
'1'
```
Argument(s): a string or number representation of the value of which the corresponding tangent value will be found

Return: A string of the output tangent value of the given value  

**metadelta.arcsin**

*Find the inverse sine of a value*
```
metadelta.arcsin('1') // or metadelta.arcsin(1)
returns
'1/2 pi'
```
Argument(s): a string or number representation of the value of which the corresponding inverse sine value will be found

Return: A string of the output inverse sine value of the given value  

**metadelta.arccos**

*Find the inverse cosine of a value*
```
metadelta.arccos('1') // or metadelta.arccos(1)
returns
'0'
```
Argument(s): a string or number representation of the value of which the corresponding inverse cosine value will be found

Return: A string of the output inverse cosine value of the given value  

**metadelta.arctan**

*Find the inverse tangent of a value*
```
metadelta.arctan('1') // or metadelta.arctan(1)
returns
'1/4 pi'
```
Argument(s): a string or number representation of the value of which the corresponding inverse tangent value will be found

Return: A string of the output inverse tangent value of the given value  

## Algebra Functions

**metadelta.simplify**

*Simplify the given expression*
```
metadelta.simplify('x + x + 2 * 8')
returns
2x + 16
```
Argument(s): a string of the expression that is to be simplified

Return: A string of the simplified expression  

**metadelta.factor**

*Factor the given expression*
```
metadelta.factor('x^2 - 1')
returns
(x - 1) (x + 1)
```
Argument(s): a string of the expression that is to be factored

Return: A string of the factored expression  

**metadelta.zeroes**

*Find the x values at which the function expression is equal to 0*
```
metadelta.zeroes('x^2 - 1')
returns
[1, -1]
```
Argument(s): a string representation of the function of which the zeroes are to be found

Return: An array of the zeroes of the function  

**metadelta.solve**

*Solve the given expression (of a single variable)*
```
metadelta.solve('35 = 7x')
returns
'x = 5'
```
Argument(s): a string representation of the expression to be solved

Return: A string of the value that the variable equals (see example above)  

## Calculus Functions

**metadelta.derive**

*Find the first derivative of the function expression*
```
metadelta.derive('x^2')
returns
2 x
```
Argument(s): a string representation of the function to be differentiated

Return: The first derivative of the given function expression  

**metadelta.integrate**

*Find an integral of the function expression*
```
metadelta.integrate('x^2')
returns
1/3 x^3
```
Argument(s): a string representation of the function to be integrated

Return: A string representation of an integral of the given function expression  

**metadelta.tangent**

*Find the tangent line of a function at a given x value*
```
metadelta.tangent('x^2', 1)
returns
2 x + -1
```
Argument(s): 1. a string representation of the function on which the tangent is to be found 2. a number representing the x value at which to find the tangent of the function

Return: A string representation of the tangent function expression  

**metadelta.areaUnder**

*Find area under a given function between two x values*
```
metadelta.areaUnder('x^2', { start: 1, finish: 3})
returns
8
```
Argument(s): 1. a string representation of the function under which the area is to be found 2. an object with properties *start* and *finish* representing the x values between which the area will be found under the function

Return: A number representation of the area under the given function between the two x values  
