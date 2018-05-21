
 function produceDrivingRange(blockRange){
  return function(start,end){
    // debugger
    start = parseInt(start.slice(0,2))
    end = parseInt(end.slice(0,2))

    if (blockRange < (end - start)){
       return `${(end - start) - blockRange} blocks out of range`
    }else{
       return `within range by ${(end - start)}`
    }
  }
}
function produceTipCalculator(tip_percent){
  

}
