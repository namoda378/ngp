

function generatePaths(tokens = ["apple","peach","tomato"]){
    function r(depth,accpath){
      paths.push(accpath);
      if(depth < 5){
        for(let tok of tokens){
          r(depth+1,accpath+"/"+tok);
        }
      }
    }
    r(0,"");
}


export {generatePaths};