function reverseString(char){

//  1995/10 199.5 => 199
    var result = char.split('');

    for(var i=char.length - 1; i>=0; i--){ // -1>=0 // O(n)
        result = result + char[i] // hsnayvid
    }
    // var l = 0;
    // var r = char.length - 1; // 7

    // while( l < r){ // 0 < 7
    //     temp= result[l] // d
    //     result[l] = result[r] //
    //     console.log(result);
    //     result[r] = temp // i
    //     l++;
    //     r--;
    // }
    
   
    return result.join('');
}

var str = 'divyansh'; // 7 ['divyansh']
// console.log(str.split('').reverse().join('')) // [d,i,v,y,a,n,s,h] => [h,s, n] => hsn

// console.log(reverseString(str))

// str[0] = 'd';
// str[7] = 'h';
// temp = ''




// var temp = ''
// var a = 20;
// var b = 30;


// temp = b; // 30
// b = a // 20;
// a = temp // 30
// console.log(a, b)




function reverseNumber(num){

    var result = 0;

    while(num > 0){
        result = result * 10 + (num %10) // 5991
        num = Math.floor(num/10); // 0
    }

    return result;
}

var num = 1995; // 5991
console.log(reverseNumber(num));