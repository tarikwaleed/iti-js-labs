
var names=new Set(["tarik","ali","abdo"])
console.log(names);
names.add("tarik")
console.log(names);
console.log(...names)
for (const name of names) {
    console.log(name);
}
