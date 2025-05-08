How does TypeScript help in improving code quality and project maintainability?
Answer:
TypeScript checks types at compile time, not runtime.
function add(a: number, b: number) {
  return a + b;
}
add(5, "hello"); //error becase b string but give value string.
Code Scalability with Interfaces & Types
As projects grow, TypeScript lets you define and reuse complex types:
interface User {
  id: number;
  name: string;
  isAdmin?: boolean;
}
TypeScript code is easy to use, and error checking is easy, but code maintenance is also easy. Auto-suggestion, proper documentation, and bug-free refactoring are all helpful in this  project.

 *What are some differences between interfaces and types in TypeScript?
Answer:
Both define shapes for objects, but their syntax differs: 
 Interface
interface Person {
  name: string;
  age: number;
}

Type
type Person = {
  name: string;
  age: number;
};
 Interfaces are great for objects and classes. They’re like blueprints for how data should look.  
Types are more flexible. 
Interfaces use `extends`:  
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}


Types use `&` (intersection):  

type Animal = { name: string };
type Dog = Animal & { breed: string };
Interfaces can be merged! If you declare the same interface twice, TypeScript combines them:  
interface User { name: string; }
interface User { age: number; }
// Result: { name: string; age: number }
Types can’t do this. Duplicate `type` declarations throw an error.

