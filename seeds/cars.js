exports.seed = async function (knex) {
    await knex("cars").insert([
        { name: "main car", color: "black", make: "hyundai", model: "elantra", pretty: true},
        { name: "second truck", color: "blue", make: "gmc", model: "1500", pretty: true},
        { name: "other", color: "grey", make: "hyundai", model: "elantra", pretty: true}
    ])
}