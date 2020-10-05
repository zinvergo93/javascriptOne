// class Instructor {
//     constructor({ name }) {
//       this.name = name;
//     }
//   }

//   class Instructor {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const jon = new Instructor('Jon Snow');
//   console.log(jon.name);

// //   **************************************

// class Account {
//     constructor ({ username, password}) {
//         this.username = username;
//         this.password = password
//     }
// }

// const user = new Account({ username: 'zachary', password: '12345'});

// console.log(user.username);
// console.log(user.password);


// // ************Instance methods/behaviors in class********************
// INSTANCE: what an instance method is it's a function inside of a class. And whenever
// you create a new instance of that class you can then call those instance methods on it.
// **********************************************************************
// class Instructor {
//     constructor({ name, role = 'assistant' }) {
//       this.name = name;
//       this.role = role;
//     }
  
//     renderDetails() {
//       console.log(`${this.name}: ${this.role}`);
//     }
//   }
 
//  Instantiate the class \/\/\/\/
//   const jon = new Instructor({name: 'Jon Snow'});
//   const brayden = new Instructor({name: 'Brayden', role: 'teacher'});
//   console.log(jon.renderDetails());
//   console.log(brayden.renderDetails());


// **********************************************************

class Car {
	constructor({ year, brand, poweredBy = 'gas' }) {
		this.year = year;
		this.brand = brand;
		this.poweredBy = poweredBy;
	}

	carSpecs() {
		return(`The ${this.year} ${this.brand} runs on ${this.poweredBy}`)
	}
}

// Instantiate the class \/\/\/\/
const model3 = new Car({year: 2020, brand: 'Tesla', poweredBy: 'electricity'});
console.log(model3.carSpecs());
