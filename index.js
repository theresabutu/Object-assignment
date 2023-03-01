//Question One

function InstagramPost( HandleOfAuthor, content, imageLink, views, likes) {
    this.HandleOfAuthor = author;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
  }

  console.log(InstagramPost);

  //Question Two
const myPost = new InstagramPost('@Cristiano', 'See all goals on my story!', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.aljazeera.com%2Fwp-content%2Fuploads%2F2023%2F01%2FAP23019650223931-1.jpg%3Fresize%3D1800%252C1800&imgrefurl=https%3A%2F%2Fwww.aljazeera.com%2Fgallery%2F2023%2F1%2F19%2Fphotos-ronaldo-messi-roll-back-the-years-in-nine-goal-thriller&tbnid=8f0wgTKjVPOmLM&vet=12ahUKEwi8jeW817b9AhUInCcCHT0QABcQMygPegUIARDhAQ..i&docid=dMbYs9IW7_KQkM&w=1800&h=1800&q=goals%20of%20cristiano%20ronaldo%202023&ved=2ahUKEwi8jeW817b9AhUInCcCHT0QABcQMygPegUIARDhAQ', 56315207, 18956750);
const myPost2 = new InstagramPost('@Messi', 'Check out my goal stories!', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.marca.com%2Fen%2Ffootball%2Fpsg%2F2022%2F09%2F24%2F632ec488e2704e1a6d8b45db.html&psig=AOvVaw0zUhoHmZufOsiPrj5Fqu6z&ust=1677731701248000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPjij7Hxuf0CFQAAAAAdAAAAABAE',3215874, 20000215);

console.log(myPost.author); // 'Cristiano'
console.log(myPost.content); // 'See all goals on my story!'

//Question Three

function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location,
    };
  }
  const musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State');
  
//Question 3B

function createJambScores(eng, govt, lit, crk) {
    return {
      english: eng,
      government: govt,
      literature: lit,
      crk: crk,
    };
  }
  
  // Create a new object representing Musa's JAMB scores
const musaJambScores = createJambScores(70, 85, 82, 94);

// Add the JAMB scores object to the musa object
musa.jambScores = musaJambScores;

console.log(musa.jambScores.eng); // 70
console.log(musa.jambScores.govt); // 85
console.log(musa.jambScores.lit); // 82
console.log(musa.jambScores.crk); // 94

//Question Four

//1. Using Object.assign() method: You can use the Object.assign() method to clone an object.
// This method copies all the enumerable properties of one or more source objects to a target object and returns the target object. 
//By passing an empty object as the target object and the object you want to clone as the source object, you can create a shallow clone of the original object.
//Example:
const originalObject = {a: 1, b: 2, c: 3};
const ClonedObject= Object.assign({}, originalObject);

console.log(clonedObject); // {a: 1, b: 2, c: 3}

//2. Using the spread operator (...): You can use the spread operator (...) to clone an object. 
//This is similar to the Object.assign() method, but using the spread operator can be more concise and easier to read.
const Object = {a: 1, b: 2, c: 3};
const clonedObj = {...Object};

console.log(clonedObj); // {a: 1, b: 2, c: 3}


//3. 
//Using JSON.parse() and JSON.stringify():
//You can also use the JSON.parse() and JSON.stringify() methods to clone an object. 
//This method creates a deep clone of the original object, but it has some limitations. 
//This method does not work with objects that contain functions or properties with circular references.

const originalObj = {a: 1, b: 2, c: 3};
const clonedObject = JSON.parse(JSON.stringify(originalObj));

console.log(clonedObject); // {a: 1, b: 2, c: 3}

//Question 5
//In JavaScript, there are several enumeration methods that can be used to iterate over objects and arrays.

//for...in loop: This loop can be used to iterate over the properties of an object. It works by iterating over all the enumerable properties of an object, including its prototype chain.
example:
for (const party in presidentialCandidates) {
    const candidate = presidentialCandidates[party];
    console.log(`${candidate} is the presidential candidate of ${party}`);
  }

  //Alternatively, you can use a for...of loop with the Object.entries() method to achieve the same result:
  
  for (const [party, candidate] of Object.entries(presidentialCandidates)) {
    console.log(`${candidate} is the presidential candidate of ${party}`);
  }
  
  


