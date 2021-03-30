class Search{
    static linearSearch(array,search){
        let comp = 0;
        for(let i = 0; i < array.length; i++){
            comp++;
            if (array[i] == search){
                return {result:i,computations:comp}
            }
        }
        return {result:-1,computations:comp};
    }
}

class BSTNode {constructor(data) {this.data = data; this.left = null; this.right = null}}

class BinarySearchTree {
    constructor() {this.root = null; this._size = 0}
    insert(data) {
        if(data.key) {
            let newNode = new BSTNode(data);
            if (!this.root) {this.root = newNode; this._size ++}
            else {this.findOpenNode(this.root, newNode)}
        }
    }
    findOpenNode(current, newNode){
        if (newNode.data.key < current.data.key){
            if (!current.left) {current.left = newNode; this._size ++}
            else {this.findOpenNode(current.left, newNode)}
        }
        else {
            if (!current.right) {current.right = newNode; this._size ++}
            else {this.findOpenNode(current.right, newNode)}
        }
    }
    find(key){
        let comp = 0;
        let data = {};
        let found = false;
        let current = this.root;
        while (found == false) {
            if (key == current.data.key){
                data = current.data;
                comp++;
                found = true;
                break;
            }
            if (key < current.data.key && current.left){
                current = current.left;
                comp++;
            }
            if (key > current.data.key && current.right){
                current = current.right;
                comp++;
            }
        }
        return {result:found,computations:comp};

    }
    size(){
        return this._size();
    }
    toArray() {
        let arrayOfNodeData = [];
        this.look(this.root.left,arrayOfNodeData);
        arrayOfNodeData.push(this.root.data);
        this.look(this.root.right,arrayOfNodeData);
        return arrayOfNodeData;
    }
    look(node,array){
        if (node.left){this.look(node.left,array)}
        array.push(node.data);
        if (node.right){this.look(node.right,array)}
    }
}