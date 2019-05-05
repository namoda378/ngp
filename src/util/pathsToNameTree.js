export default function(paths){
    const root = {name:"/",children:[],dm:{height:0}};
    let id_tic = 1;

    for(let path of paths){  
        let curnode = root;
        let tokens = path.split("/");
        tokens = tokens.filter((elm)=>elm.length>0);
        let accpath = "";

        for(let idx in tokens){
          const depth = parseInt(idx)+1;
          const tok = tokens[idx];
          accpath += `/${tok}`;
          let node = curnode.children.find( node => node.name === tok );
          if(!node){
            node = {name:tok,children:[],depth,dm:{height:0},id:id_tic++,accpath};
            curnode.children.push(node);
          }
          curnode = node;        
        }
        curnode.path = path;
    }
    return root;
}