// problem 1

function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  }

// problem 2


  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
  }

//   problem 3

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }


// problem 4

  class Vehicle {
    
    private make: string;
    private year: number;
  
   
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
   
    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

//   problem 5
  
  class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);  
      this.model = model;
    }
  
    getModel(): string {
      return `Model: ${this.model}`;
    }
  }

  function processValue(value: string | number): number {
    if (typeof value === 'string') {
      return value.length;  
    } else {
      return value * 2;  
    }
  }

//   problem 6

  interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;  
    }
    return products.reduce((max, current) => (current.price > max.price ? current : max));
  }



//   problem 7

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    return (day === Day.Saturday || day === Day.Sunday) ? "Weekend" : "Weekday";
  }


//   problem 8

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000);  
    });
  }
  
  
  
  
  