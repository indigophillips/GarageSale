exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('Items', function (table) {
    table.increments().primary()
    table.string('name')
    table.string('description')
    table.integer('price')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('Items')
}