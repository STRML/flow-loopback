An attempt to work out how to type Loopback models.

Error:

```
bar.js:5
  5: User.delete = function(): boolean {
          ^^^^^^ property `delete`. Property not found in
  5: User.delete = function(): boolean {
     ^^^^ statics of function

foo.js:9
  9: var errors = User.nonexistent('Ralph'); // doesn't exist, error
                       ^^^^^^^^^^^ property `nonexistent`. Property not found in
  9: var errors = User.nonexistent('Ralph'); // doesn't exist, error
                  ^^^^ statics of function

foo.js:10
 10: var deleted:boolean = ralph.delete(); // defined in bar, error
                                 ^^^^^^ property `delete`. Property not found in
 10: var deleted:boolean = ralph.delete(); // defined in bar, error
                           ^^^^^ prototype


Found 3 errors
```
