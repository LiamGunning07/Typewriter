const sentence = "hello there from lighthouse labs";
console.log();
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, i * 85);
}