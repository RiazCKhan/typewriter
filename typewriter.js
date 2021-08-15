const sentence = "hello there from lighthouselabs";

let delay = 1;
for (let i = 0; i < sentence.length; i++) {
  
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      console.log();
    }
  }, delay += 15 * i);
};

// --- *** SECOND SOLUTION without bugfix
/* let delay = 50;
let stagger = 0;

for (const char of sentence) {
  delay += 50 * stagger
  setTimeout(() => {
    process.stdout.write(char);
  }, delay)
  
  stagger += 1;
} */