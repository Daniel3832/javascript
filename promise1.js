buyIphone()
.then(result => showFriend(result))
.then(newResult => friendPlayIphone(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);