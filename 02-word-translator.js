/*Use simple conditional statements
Create an application that prompts the user for a language code
 ("es", "de", "en", and "fr"). If they enter one of the four codes, \
 display the translated version of "Hello World" for the given language within the console window. 
 If the user enters anything but those four language codes, the application should default to English. 
 The result should be (for example):
Hello World translated in French is: Bonjour le monde
*/

userCode = prompt("Enter a language code: es, de, en, fr")
if (userCode === 'es'){
    document.write("Hola Mundo!")
} else if (userCode === 'de') {
    document.write("Hallo Welt!")
} else if (userCode === 'eng') {
    document.write("Hello World!")
} else if (userCode === 'fr') {
    document.write("Bonjour le monde!")
}
