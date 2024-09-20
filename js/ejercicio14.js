let str = 'ab1c3de4fg';

for (let i = 0; i < str.length; i++) {
    if(str.charAt(i).match(/[aeiouAEIOU]/g) ){
        document.write(str.charAt(i)+' Vocales ')
    }if(str.charAt(i).match(/[0123456789]/g) ){
        document.write(str.charAt(i)+' Numeros ')
    }
}