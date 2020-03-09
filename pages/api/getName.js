const chance = require('chance').Chance()

export default (req, res) => {
  const name = chance.name()
  return res.status(200).json({ name })
}
