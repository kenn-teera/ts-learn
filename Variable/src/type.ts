let username: unknown;
username = "kenn-teera"
console.log((<string>username).toUpperCase())
console.log((username as string).toUpperCase())
