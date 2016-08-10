var tree = require('./pretty-tree.js');

var str = tree({
  label: '(root)', // the label of this node
  nodes: [{
    label: '(child)',
    leaf: {
      hello: 'world',
      hej: 'verden'
    }
  }]
});

console.log(str);
