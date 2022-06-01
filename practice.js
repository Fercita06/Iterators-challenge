const nameArray = ["Charlie","Rob"]

const capitalizedNames= (nameArr) => {
  const newArr = nameArr.map ((name)=> name.upperCase() + nameArr.slice(1));  
  return newArr;
}

const letters = ["f","e","r","n","a","n","d","a"]

const removeVowels = (vowelArr) => {
  const vowels = ["a","e","i","o","u"];
  return vowelArr.filter((letter) => !vowels.includes(letter))
};

const numbers = [25, 50, 175, 50];

const mean = (numArr) => {
  return numbArr.reduce((total, current) => total +- current, 0) / numArr.length;
  
}

console.log (mean)

