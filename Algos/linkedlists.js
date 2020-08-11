// This is the class for our Singly Linked Node
class SLNode {
    // The constructor is built to take 1 parameter; the value of the node we want
    // to create
    constructor(val){
        // The node's actual value being set to the value passed in through the constructor
        this.value = val;
        // And the pointer that refers to the node next in the sequence after
        // this node. Note it starts as null, because when you first create a node,
        // it is not connected to anything.
        this.next = null;
    }
}

// This is the class for our Singly Linked List
class SLList {
    constructor() {
        // The head marks the beginning of the linked list.
        this.head = null;

        // Note that it's null. This is because when you first create a list, it's empty!
    }

    // Write a method that returns a boolean based on whether or not the list
    // is empty. HINT! Check out 
    isEmpty(){
        return this.head === null;

        // Alternatively:
        // if(this.head == null) {
        //      return true;   
        // }
        // else {
        //      return false;
        // }
    }

    // Write a method that will add to the back of a singly linked list.

    // Essentially, have a runner start at the head, traverse along to the end, 
    // then create a new node at the end, and reassign the last node's .next pointer
    // to the new node.
    addToBack(value){
        // First step is going to be checking to see if the singly linked list is empty!

        // Let's use the isEmpty method we wrote!
        if(this.isEmpty()){
            // If this.isEmpty() resolved to true, that means our list has no content!
            // So let's set the head of our list to a new node!
            this.head = new SLNode(value);
            return this;
        }

        // If we're here, then we passed the empty check, and we need to find our way to the
        // end of the current list.

        // To do so, we create a variable and have it hold onto the first
        // node in our SLL
        let runner = this.head;

        // Because we want to get to the end of the list, and not what comes AFTER
        // the end of the list, we want to move runner along until we're AT the last
        // node.
        while(runner.next != null) {
            // If runner.next is not null, we're not quite at the end of the list,
            // so we move runner to its .next 
            runner = runner.next;
        }
        // Since we've broken out of that loop, we must be at the end!
        // Let's take that last node, and reassign its .next pointer to
        // point at a new node instead!
        runner.next = new SLNode(value);

        // And finally, so we can chain methods 
        return this;
    }


    // Write a method for our singly linked list class that will take a value, and
    // add a new node to the front of the current singly linked list.
    addToFront(value) {
        // Step 1: Let's create our new node
        let newNode = new SLNode(value);

        // Step 2: Assign that new node's .next pointer to be the current head of the list
        newNode.next = this.head;

        // Step 3: And reassign the head of the list to now be the new node.
        this.head = newNode;

        // Step 4: Return the list.
        return this;

        // You might be saying "But Cody, what if the list is empty??"

        // It's a good question! But if the list is empty, this.head is null, right?
        // So that means we're still safe to assign the new node's .next to be the head,
        // because Adding to the front of an empty list means the new node will be both
        // the first and last node, so its .next SHOULD be null!
    }

    // Write a method that will remove the head node from the 
    // Singly Linked List.
    removeHead(){
        // If the list is empty, we can't possibly remove anything
        if(this.isEmpty()){
            // So let's let it be known and just return the list.
            console.log("List is already empty.");
            return null;
        }

        // Let's hold onto the current head so we can eventually return it
        let removed = this.head;
        // Set the head to the current head's next node
        this.head = removed.next;
        // Chop off the removed node's .next so we can treat it
        // as a stand-alone node
        removed.next = null;

        // and return it.
        return removed;

    }

    // Write a method that will calculate and return the average
    // of all the node's values in a singly linked list
    average(){
        if(this.isEmpty()){
            console.log("List is empty.");
            return 0;
        }
        // We'll use 2 variables to keep track of the sum and number of nodes
        let sum = 0;
        let count = 0;
        // Let's start our runner at the head of the list
        let runner = this.head;
        // And move it until it's null
        while(runner != null){
            // At each node, we'll add its value to the sum and increment our counter
            sum += runner.value;
            count++;
            // and move the runner down the list
            runner = runner.next;
        }

        // Now that we've touched all of the nodes, lets calculate and return the average.
        return sum / count;
    }

    // Write a method that determines whether or not the linked list contains
    // a node with a given value, and return a boolean based on that
    contains(value){
        // Basically what we want to do here is run through each node
        // and check for a matching value.

        // So let's create our runner
        let runner = this.head;

        while(runner != null) {
            // We'll check if the runner's value matches the value requested
            if(runner.value == value){
                // if they match, the list contains that value!
                return true;
            }
            // Otherwise let's progress down the list
            runner = runner.next;
        }

        // if we checked every node in the list and never found the value,
        // then the list clearly doesn't contain that value.
        return false;

    }

    // Write a method that will remove the last node from the linked list.
    // HINT: Figuring out a way to find the SECOND TO LAST node will be immensely
    // helpful!
    // Return the node. Or the list. Idk, I'm not your dad.
    removeFromBack(){
        // First step: Is the list empty?
        if(this.isEmpty()){
            console.log("List is empty.");
            return null;
        }
        // Second step: Is the list only one element long? 
        // If so, just set the head to null
        else if(this.head.next == null) {
            let temp = this.head;
            this.head = null;
            return temp;
        }
        //If either of those conditions weren't met, let's get down to business
        else {
            // We'll need 2 iterators. Let's call them runner and walker

            // walker will start at the head, and runner at the 2nd node
            let walker = this.head;
            let runner = this.head.next;

            // And let's iterate so that runner reachest the last node,
            // with walker remaining 1 node behind
            while(runner.next != null) {
                // move walker to the runner
                walker = runner;
                // and move runner to the next node
                runner = runner.next;
            }
            // If we've broken out of the loop, then runner is the last node,
            // and walker is the second to last node.

            // Set walker.next to null, which essentially lops runner off 
            walker.next = null;
            // and return the runner (previously the final node)
            return runner;
        }

    }


    // Write a method that will find a node with a given value 
    // and remove it from the linked list.

    // Things to think about: What are your edge cases?

    // HINT: Removing means point the previous node's .next to the
    // current node's .next
    removeVal(value){

    }



    // Here's a gimme: This will print the contents of a singly linked list.
    printList(){
        if(this.isEmpty()){
            console.log("This list is empty");
            return this;
        }

        // We need to initialize an empty string
        let toPrint = "";
        // And start a runner at the head of the list.
        let runner = this.head;

        // We want to perform something every time runner isn't null
        while(runner != null) {
            // Add the new value and an arrow (oh so fancy, I know!)
            // to the string we want to print
            toPrint += `${runner.value} -> `;
            // And move runner to the next node. This is gonna be your 
            // bread and butter when it comes to linked lists
            runner = runner.next;
        }
        // What good is our print list method if it doesn't console log?!
        console.log(toPrint);

        // And just so we can chain methods (idk why you'd want to chain from print list,
        // but why not), just return this.

        return this;
    }
}