// eslint-disable

const muliply = (a: string  | number, b: string | number) => {
    
    const aNumber = typeof a === 'string' ? parseInt(a, 10) : a;
    const bNumber = typeof b === 'string' ? parseInt(b, 10) : b;

    return String(aNumber * bNumber);
}

muliply(2, 5);
muliply("2", 10);
muliply(10, "5");