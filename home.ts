function main() {
    console.log(Deno.env())
    console.table(Deno.metrics());
}

main();