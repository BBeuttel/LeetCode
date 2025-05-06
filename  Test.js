//Intersection of two linked list

const iOTLL = (headA, headB) => {
    if(!head || !headB) return false;

    let currentA = headA;
    let currentB = headB;

    while (currentA !== currentB) {
        currentA = currentA ? currentA.next : headB;
        currentB = currentB ? currentB.next : headA;
    }
    return currentA;    
}

const validParens = (s) => {
    if (s.length % 2 !== 0) return false;

    const stack = [];

    const pair = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let char of s){
        if (Object.values(pair).includes(char)){
            stack.push(char);
        } else if (Object.keys(pair).includes(char)){
            if(stack.pop() !== pair[char])
                return false;
           } 
        }
        return s.length === 0;
    }