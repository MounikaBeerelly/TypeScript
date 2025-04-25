### 1.  What is TypeScript ?
- TypeScript is a syntactic superset of JavaScript which adds static typing.
- This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

### 2. Why should I use TypeScript ?
- JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.
- TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.
- For example, `TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.`
- TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.

### 3. How do I use TypeScript ?
- A common way to use TypeScript is to use the official TypeScript compiler, which transpiles TypeScript code into JavaScript.

### 4. TypeScript Compiler ?
- TypeScript is transpiled into JavaScript using a compiler.
- Installing the compiler
    - npm install typescript --save-dev
- Configuring the compiler `tsconfig.json`
    - npx tsc --init

### 5. TypeScript Types ?
- There are three main primitives in JavaScript and TypeScript.
    - **boolean** - true or false values
    - **number** - whole numbers and floating point values
    - **string** - text values like "TypeScript Rocks"
- There are also 2 less common primitives used in later versions of Javascript and TypeScript.
    - **bigint** - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
    - **symbol** are used to create a globally unique identifier.

### Type Assignment
- When creating a variable, there are two main ways TypeScript assigns a type :
    1. **Explicit** 
        - writing out the type
        - Explicit type assignment are easier to read.
        ```
        let firstName: string = "Mounika";
        ```
    2. **Implicit**
        - TypeScript will "guess" the type, based on the assigned value.
            ```
            let name = "Mounika";
            ```
- Having TypeScript guess the type of a value is called `infer`.
- Implicit type assignment are shorter, faster to type, and often used when developing and testing.
- TypeScript will throw an error if data types do not match.
- TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to `any` which disables type checking.

### type: any :
- any is a type that disables type checking and effectively allows all types to be used.
- Setting any to the special type any disables type checking:
    ```
    let v: any = true;
    v = "hello";
    ```
### type: unknown -
- unknown is a similar, but safer alternative to any.
- TypeScript will prevent unknown types from being used.

### type: never
- never effectively throws an error whenever it is defined.
- let x: never = true;

### TypeScript Arrays
- TypeScript has a specific syntax for typing arrays.
    ```
    const names: string[] = [];
    names.push("Mounika");
    names.push(12); // Error
    ```
- TypeScript can infer the type of an array if it has values.
    ```
    const numbers = [1, 2, 3]; // inferred to type number[]
    numbers.push(4); // no error
    // comment line below out to see the successful assignment
    numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
    ```
### Tuple:
- A tuple is a typed array with a pre-defined length and types for each index.
- Tuples are great because they allow each element in the array to be a known type of value.
- To define a tuple, specify the type of each element in the array:
    ```
    let ourTuple: [number, boolean, string];
    ourTuple = [5, true, 'hello'];
    ```
- If we try to set them in the wrong order - get error

### TypeScript Object Types
- TypeScript has a specific syntax for typing objects.
- Example:
    ```
    const car: { type: string, model: string, year: number } = {
        type: "Toyota",
        model: "Corolla",
        year: 2009
    };
    ```
- TypeScript can infer the types of properties based on their values.
- Example:
    ```
    const car = {
        type: "Toyota",
    };
    car.type = "Ford"; // no error
    car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
    ```
- Optional properties are properties that don't have to be defined in the object definition.
- Example:
    ```
    const car: { type: string, mileage?: number } = { // no error
        type: "Toyota"
    };
    car.mileage = 2000;
    ```

### TypeScript Enums
- An enum is a special "class" that represents a group of constants (unchangeable variables).
- Enums come in two flavors string and numeric. Lets start with numeric.
- **Numeric Enums - Default**
    - By default, enums will initialize the first value to 0 and add 1 to each additional value:
    - Example:
        ```
        enum CardinalDirections {
            North,
            East,
            South,
            West
        }
        let currentDirection = CardinalDirections.North;
        // logs 0
        console.log(currentDirection);
        // throws error as 'North' is not a valid enum
        currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
        ```
- **Numeric Enums - Initialized**
    - You can set the value of the first numeric enum and have it auto increment from that: 
    - Example:
        ```
        enum CardinalDirections {
            North = 1,
            East,
            South,
            West
        }
        console.log(CardinalDirections.North); // logs 1
        console.log(CardinalDirections.West); // logs 4
        ```
- **Numeric Enums - Fully Initialized**
    - You can assign unique number values for each enum value. Then the values will not incremented automatically:
    - Example:
        ```
        enum StatusCodes {
            NotFound = 404,
            Success = 200,
            Accepted = 202,
            BadRequest = 400
        }
        console.log(StatusCodes.NotFound); // logs 404
        console.log(StatusCodes.Success); // logs 200
        ```
- **String Enums**:
    - Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
    - Example:
        ```
        enum CardinalDirections {
            North = 'North',
            East = "East",
            South = "South",
            West = "West"
        };
        // logs "North"
        console.log(CardinalDirections.North);
        // logs "West"
        console.log(CardinalDirections.West);
        ```

### TypeScript Aliases & Interfaces
- TypeScript allows types to be defined separately from the variables that use them.
- Aliases and Interfaces allows types to be easily shared between different variables/objects.
- **Type Aliases**
    - Type Aliases allow defining types with a custom name (an Alias).
    - Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
    ```
    type CarYear = number
    type CarType = string
    type CarModel = string
    type Car = {
        year: CarYear,
        type: CarType,
        model: CarModel
    }

    const carYear: CarYear = 2001
    const carType: CarType = "Toyota"
    const carModel: CarModel = "Corolla"
    const car: Car = {
        year: carYear,
        type: carType,
        model: carModel
    };
    ```
- **Interfaces**
    - Interfaces are similar to type aliases, except they only apply to object types.
    - Example:
        ```
        interface Rectangle {
            height: number,
            width: number
        }

        const rectangle: Rectangle = {
            height: 20,
            width: 10
        };
        ```
- **Extending Interfaces**
    - Interfaces can extend each other's definition.
    - Example:
        ```
        interface Rectangle {
            height: number,
            width: number
        }
        interface ColoredRectangle extends Rectangle {
            color: string
        }

        const coloredRectangle: ColoredRectangle = {
            height: 20,
            width: 10,
            color: "red"
        };
        ```
### TypeScript Union Types
- Union types are used when a value can be more than a single type.
- **Union | (OR)**
    - Using the | we are saying our parameter is a string or number:
    - Example
        ```
        function printStatusCode(code: string | number) {
            console.log(`My status code is ${code}.`)
        }
        printStatusCode(404);
        printStatusCode('404');
        ```
### TypeScript Functions:
- TypeScript has a specific syntax for typing function parameters and return values.
- **Return Type**
    - The type of the value returned by the function can be explicitly defined.
    - Example:
        ```
        // the `: number` here specifies that this function returns a number
        function getTime(): number {
           return new Date().getTime();
        }
        ```
- If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.
- **Void Return Type**
    - The type void can be used to indicate a function doesn't return any value.
    - Example:
        ```
        function printHello(): void {
            console.log('Hello');
        }
        ```
- **Parameters**
    - Function parameters are typed with a similar syntax as variable declarations.
    - Example:
        ```
        function multiply(a: number, b: number) {
            return a*b;
        }
        ```
- If no parameter type is defined, TypeScript will default to using any, unless additional type information is available as shown in the Default Parameters.
- **Optional Parameters**
    - By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
    - Example:
        ```
        // the `?` operator here marks parameter `c` as optional
        function add(a: number, b: number, c?: number) {
            return a + b + (c || 0);
        }
        ```
- **Default Parameters**
    - For parameters with default values, the default value goes after the type annotation:
    - Example:
        ```
        function pow(value: number, exponent: number = 10) {
            return value ** exponent;
        }
        ```
- **Named Parameters**
    - Typing named parameters follows the same pattern as typing normal parameters.
    - Example:
        ```
        function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
            return dividend / divisor;
        }
        ```
- **Rest Parameters**
    - Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
    - Example:
        ```
        function add(a: number, b: number, ...rest: number[]) {
            return a + b + rest.reduce((p, c) => p + c, 0);
        }
        ```
- **Type Alias**
    - Function types can be specified separately from functions with type aliases.
    - These types are written similarly to arrow functions, read more about arrow functions here.
    - Example:
        ```
        type Negate = (value: number) => number;

        // in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
        const negateFunction: Negate = (value) => value * -1;
        ```

### TypeScript Casting
- Casting is the process of overriding a type.
- **Casting with `as`**
    - cast a variable is using the as keyword, which will directly change the type of the given variable.
    - Example:
        ```
        let x: unknown = 'hello';
        console.log((x as string).length);
        ```
- **Casting with `<>`**
    - Using <> works the same as casting with `as`.
    - Example:
        ```
        let x: unknown = 'hello';
        console.log((x as string).length); // 4
        ```
- **Force Casting**
    - To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
    - Example:
        ```
        let x = 'hello';
        console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined
        ```

### TypeScript Classes
- TypeScript adds types and visibility modifiers to JavaScript classes.
- **Members: Types**
    - The members of a class (properties & methods) are typed using type annotations, similar to variables.
    - Example:
        ```
        class Person {
            name: string;
        }

        const person = new Person();
        person.name = "Jane";
        ```
- **Members: Visibility**
    - There are three main visibility modifiers in TypeScript.
    - **public** - (default) allows access to the class member from anywhere
    - **private** - only allows access to the class member from within the class
    - **protected** - allows access to the class member from itself and any classes that inherit it.
- Example:
    ```
    class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
    }

    const person = new Person("Jane");
    console.log(person.getName()); // person.name isn't accessible from outside the class since it's private
    ```
- The `this` keyword in a class usually refers to the instance of the class.
- **Parameter Properties**
    - TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
    - Example:
    ```
    class Person {
    // name is a private member variable
    public constructor(private name: string) {}

    public getName(): string {
        return this.name;
    }
    }

    const person = new Person("Jane");
    console.log(person.getName());
    ```
- **Inheritance: Implements**
    - Interfaces can be used to define the type a class must follow through the implements keyword.
    - Example
    ```
    interface Shape {
        getArea: () => number;
    }

    class Rectangle implements Shape {
        public constructor(protected readonly width: number, protected readonly height: number) {}

        public getArea(): number {
            return this.width * this.height;
    }
    }
    ```
- **Inheritance: Extends**
    - Classes can extend each other through the extends keyword. A class can only extends one other class.
    - Example:
    ```
    interface Shape {
        getArea: () => number;
    }

    class Rectangle implements Shape {
        public constructor(protected readonly width: number, protected readonly height: number) {}

        public getArea(): number {
            return this.width * this.height;
    }
    }

    class Square extends Rectangle {
        public constructor(width: number) {
        super(width, width);
    }

    // getArea gets inherited from Rectangle
    }
    ```
- **Override**
    - When a class extends another class, it can replace the members of the parent class with the same name.
    - Newer versions of TypeScript allow explicitly marking this with the override keyword.
    - Example:
    ```
    interface Shape {
        getArea: () => number;
    }

    class Rectangle implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
        public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
        return this.width * this.height;
    }

    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
    }

    class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }

    // this toString replaces the toString from Rectangle
    public override toString(): string {
        return `Square[width=${this.width}]`;
    }
    }
    ```
- **Abstract Classes**
    - Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.
    - Example:
    ```
    abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea()}]`;
    }
    }

    class Rectangle extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
    }
    ```

### TypeScript Generics
- Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
- Generics makes it easier to write reusable code.
- **Functions**
    - Generics with functions help make more generalized methods which more accurately represent the types used and returned.
    - Example:
    ```
    function createPair<S, T>(v1: S, v2: T): [S, T] {
        return [v1, v2];
    }
    console.log(createPair<string, number>('hello', 42)); // ['hello', 42]
    ```
### TypeScript Utility Types
- TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.
- **Partial**
    - Partial changes all the properties in an object to be optional.
    - Example:
        ```
        interface Point {
            x: number;
            y: number;
        }

        let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
        pointPart.x = 10;
        ```
- **Required**
    - Required changes all the properties in an object to be required.
    - Example:
    ```
    interface Car {
        make: string;
        model: string;
        mileage?: number;
    }

    let myCar: Required<Car> = {
        make: 'Ford',
        model: 'Focus',
        mileage: 12000 // `Required` forces mileage to be defined
    };
    ```
- **Record**
    - Record is a shortcut to defining an object type with a specific key type and value type.
    - Example:
    ```
    const nameAgeMap: Record<string, number> = {
        'Alice': 21,
        'Bob': 25
    };
    ```
- **Omit**
    - Omit removes keys from an object type.
    - Example:
    ```
    interface Person {
        name: string;
        age: number;
        location?: string;
    }

    const bob: Omit<Person, 'age' | 'location'> = {
        name: 'Bob'
        // `Omit` has removed age and location from the type and they can't be defined here
    };
    ```
- **Pick**
    - Pick removes all but the specified keys from an object type.
    - Example:
    ```
    interface Person {
        name: string;
        age: number;
        location?: string;
    }

    const bob: Pick<Person, 'name'> = {
        name: 'Bob'
        // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
    };
    ```
- **Exclude**
    - Exclude removes types from a union.
    - Example:
    ```
    type Primitive = string | number | boolean
    const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.
    ```

