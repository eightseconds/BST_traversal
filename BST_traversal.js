function inOrderTraverse(tree, array) {
    //traverse left
    //visit note
    //traverse right
    if (tree !== null) {
        inOrderTraverse(tree.left, array);
        array.push(tree.value)
        inOrderTraverse(tree.right, array);
    }

    return array
}

function preOrderTraverse(tree, array) {
    //visit node
    //traverse left
    //traverse right
    if (tree !== null) {
        array.push(tree.value)
        preOrderTraverse(tree.left, array)
        preOrderTraverse(tree.right, array)
    }

    return array
}

function postOrderTraverse(tree, array) {
    //traverse left
    //traverse right
    //visit node
    if (tree !== null) {
        postOrderTraverse(tree.left, array)
        postOrderTraverse(tree.right, array)
        array.push(tree.value)
    }

    return array
}