const { sign } = require("jsonwebtoken")
const { addHours } = require("date-fns")

const credentials = {
  privateKey:
    "-----BEGIN RSA PRIVATE KEY-----\n<insert_private_rsa_key>\n-----END RSA PRIVATE KEY-----\n",
  kid: "<insert_key_id>",
  issuer: "<insert_app_id>",
}

const now = new Date()

const jwt = sign(
  {
    entity: { type: "order", id: "<order_id>", access: ["manage_chat"] },
    user: { id: "123", username: "Bob" },
    iat: now.getTime(),
    exp: addHours(now, 1).getTime(),
  },
  credentials.privateKey,
  { keyid: credentials.kid, issuer: credentials.issuer, algorithm: "RS256" }
)

console.log(`You generated token: ${jwt}`)
