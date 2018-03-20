interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}