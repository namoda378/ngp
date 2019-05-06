

export default function(tokens = ["apple","peach","tomato"]){
    const paths = [];
    function r(depth,accpath){
      paths.push(accpath);
      if(depth < 5){
        for(let tok of tokens){
          r(depth+1,accpath+"/"+tok);
        }
      }
    }
    r(0,"");
    return paths;
}


