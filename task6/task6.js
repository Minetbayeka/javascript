function addNumbers(...args) {
    return args.reduce((sum, num) => sum + num, 0);
  }
  

  const result = addNumbers(1, 2, 3, 4);
  console.log(result); 
  const numbersArray = [...args];
  console.log(numbersArray); 