const { verifyArguments } = require('./verifyArguments');

function main (){

  
  const [ firstHand, secondHand ] = process.argv.slice(2);
  
  if (!verifyArguments(firstHand.toUpperCase(), secondHand.toUpperCase())){
    console.log('Please send the arguments again');
    process.exit(1);
  }
  
  
  
  console.log('Go ahead!!');
  
}
  
main(); 