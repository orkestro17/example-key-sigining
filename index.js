const { sign } = require("jsonwebtoken")
const { addHours } = require("date-fns")

const response = {
  privateKey:
  "-----BEGIN RSA PRIVATE KEY-----\n something here -----END RSA PRIVATE KEY-----\n",
  kid: "<key_id>",
  ownerId: "<app_id>",
}

const now = new Date()

const jwt = sign(
  {
    entity: { type: "merchant", id: "<merchant_or_order_id>", access: ["manage_fleet_settings"] },
    user: { id: "123", username: "Bob" },
    iat: now.getTime(),
    exp: addHours(now, 24).getTime(),
  },
  response.privateKey,
  { keyid: response.kid, issuer: response.ownerId, algorithm: "RS256" }
)

console.log(jwt)
