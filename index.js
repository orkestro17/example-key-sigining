const jwt = require("jsonwebtoken")

const KID = "<key_id>"
const PRIVATE_KEY = "<private_key>"
const APP_ID = "<app_id>"

function main() {
  const today = new Date()
  const c = jwt.sign(
    {
      iss: APP_ID,
      entity: { type: "order", id: "<order_id>", access: ["manage_chat"] },
      user: { id: "123", username: "Bob" },
      iat: Date.now(),
      exp: today.setHours(today.getHours() + 1),
    },
    PRIVATE_KEY,
    { algorithm: "RS256", header: { kid: KID } }
  )
  console.log(c)
}

if (require.main === module) {
  main()
}
