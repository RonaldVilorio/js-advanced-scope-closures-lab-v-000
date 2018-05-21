
function produceDrivingRange(blockRange){
  return function(start,end){
    // debugger
    start = parseInt(start.slice(0,2))
    end = parseInt(end.slice(0,2))

    if (end - start  < blockRange){
      console.log(`${end - start} blocks out of range`)
    }else{
      console.log(`within range by ${end - start}`)
    }



  }

}
