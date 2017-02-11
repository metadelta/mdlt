[![Metadelta Logo](http://aunyks.com/metadelta/assets/metadelta-logo-transparent.png)](https://aunyks.com/metadelta)
# Mdlt Documentation
______________________________________________  
## Arithmetic
**abs**

*Get absolute value of a value*
```
mdlt abs -1
Returns:
1
```
Argument(s): The value of which the absolute value will be found

Return: The absolute value of the given value  

**sin**

*Find the sine of a value*
```
mdlt sin pi / 2
Returns:
1
```
Argument(s): The value of which the corresponding sine value will be found

Return: The output sine value of the given value  

**cos**

*Find the cosine of a value*
```
mdlt cos 0
Returns:
1
```
Argument(s): The value of which the corresponding cosine value will be found

Return: The output cosine value of the given value  

**tan**

*Find the tangent of a value*
```
mdlt tan pi/4 // or mdl tan 0.7853981
returns
1
```
Argument(s): The value of which the corresponding tangent value will be found

Return: The output tangent value of the given value  

**arcsin**

*Find the inverse sine of a value*
```
mdlt arcsin 1
returns
1/2 pi
```
Argument(s): The value of which the corresponding inverse sine value will be found

Return: The output inverse sine value of the given value  

**arccos**

*Find the inverse cosine of a value*
```
mdlt arccos 1
returns
0
```
Argument(s): The value of which the corresponding inverse cosine value will be found

Return: The output inverse cosine value of the given value  

**arctan**

*Find the inverse tangent of a value*
```
mdlt arctan 1
returns
1/4 pi
```
Argument(s): The value of which the corresponding inverse tangent value will be found

Return: The output inverse tangent value of the given value  

## Algebra

**simplify**

*Simplify the given expression*
```
mdlt simplify x + x + 2 * 8
returns
2x + 16
```
Argument(s): The expression that is to be simplified

Return: The simplified expression  

**factor**

*Factor the given expression*
```
mdlt factor x^2 - 1
returns
(x - 1) (x + 1)
```
Argument(s): The expression that is to be factored

Return: The factored expression  

**zeroes**

*Find the x values at which the function expression is equal to 0*
```
mdlt zeroes x^2 - 1
returns
[1, -1]
```
Argument(s): a string representation of the function of which the zeroes are to be found

Return: An array of the zeroes of the function  

**solve**

*Solve the given expression (of a single variable)*
```
mdlt solve 35 = 7x
returns
'x = 5'
```
Argument(s): a string representation of the expression to be solved

Return: The value that the variable equals (see example above)  

## Calculus

**derive**

*Find the first derivative of the function expression*
```
mdlt derive x^2
returns
2 x
```
Argument(s): The function to be differentiated

Return: The first derivative of the given function expression  

**integrate**

*Find an integral of the function expression*
```
mdlt integrate x^2
returns
1/3 x^3
```
Argument(s): The function to be integrated

Return: An integral of the given function expression  
