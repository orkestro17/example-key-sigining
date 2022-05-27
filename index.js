const { sign } = require("jsonwebtoken")
const { addHours } = require("date-fns")

const response = {
  privateKey:
  "-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEA3+CnxqF1VQwj9YR9xd5FeXm4AVdPkEC1eKqHPZ5DDBskb+7I\n8rTiq2hqkbDOSYNLLGWCvedU7UPvUQvG/MGfKjHwV7Y6a/GsMh0J9McBuTmSb9mV\n6xfD2ENdMMz3wk3LO4Gvo/I1eKNdR2+n/I/ByFxw5j2tSVh8SZVWcJ1XzFvDf7Rf\nTZl5UZcP2vF4QlLJQeX9NTD3L1KNUU4MkUfG1oVZ/0eZoKCwmWJuyw6akBBdbqZB\narTw13A0+hS4HYY+774zMoWmr+7f5e60/zM7mVxgCpgutt72PBzKU/UFEt1GNljc\n1rCFdwhgnHP6hYBzfiPMFMzSXktL1uxR7UfhcwIDAQABAoIBACuFPJg8Yta5mXPs\n4ZZJcy/+HWsFUg40xhJC9C9iSJ5d2GN6A85Ko5W2oqDXwgJAZ6ilwxivk67b+fXD\nWFdiPFKziolCf3Dkdhj31CulVAxxyKm9noso/4VW8xK9hZxcCxnyR/aS6xoch9GP\nPxS1zXHppnjbnIgZj2+ufDNAIwUypFxGtl9JXBZldNvdBxIfdKjQPOz6ZAuVHM71\nG+O99F/AWKeoG4gOPfGTt/ZCDP5Bqud3uqs3v+y01W7bBBNp5M+vrD+3C5XAK/Rq\nxcnC75CghVmRPt5AsHdvWIC+tsb9D9mLidasgwI9rUkRHWx8VHLCKuHwhSkahY+g\nXQKi9aECgYEA9pDFO4HTihTy9yoj7g7l2dGSe3q1WpPJLxxLNNtVRwhM07UbiKyN\nj0xDgvPX9Mo7slb9eJmklBbBB5hf2apwWnAX9eNZjeWz+LTik2k6wi5KcUKZcgrZ\nC3/LYLbdwU944lWnxDbfBaxb26fi5AqmUIH07G4tviVKmCzXVzpJ0w0CgYEA6HGl\nOGmjdyitMalKOcLEVE5joKYpSQ5zvSFw5s3xXyNn27rs6AnSOdHeq1a7H54mykF7\nkdwwDElPPqs+A1/BaX2MwuhichKS9jXQsD5s/nNY3Z5377imsjpu1OowHFgsOund\n9XSHRxIddU6e8WTfvohOwA+Ga+GPKAG7/UqVZn8CgYEAyZphymBC6Tpr1zC7pCDG\nS62SCiixNFh2PXDzBUr5lVTyDICe/MeqD6sZ4G8k+uCIoy+BnSRzbyqTtnQem0lD\nCI9y5/h29xEEcKzmPgXip3dWIvmDob3A7igV0QR0mWUzwEytGkCLZoYhrZ6+ZBtZ\nFabM7qy/9iNjtL2lbYsZZdkCgYEA1LTKgKkK0UwD0WIdbmXwy0VAng3v0c7L0tL7\nQfpLWshHjiesC1qRah/HJ/uiGPjcflEWBw/7WALt5WdGxEen8iTV3rZRABpHKc9t\nPRqjGuXq+EK/djr/MDGQon37sLRvJSpF1wvfjwXgtyxO/o9UwEJz7gVG+Qnburx7\njvnlZXkCgYEAu7Qp0mQzFvIPB0uTj+/jObLpNyrRYw/c1TZBhPWBQ2Ydc3AxpKsu\nh0P2ZuR/l5L6UQXKChZOyHilxjwEKJ+yriUj3NkYCwuIA3j6Fl0dl/3+3GJNfECQ\nFwCLY+EdX9aIl4sM2Ctobrke11dQzDsB2VUusAhhAA3UMPkGHeN1FBw=\n-----END RSA PRIVATE KEY-----\n",
  kid: "1ebdab9e-40e9-4caa-a157-19a2b8e24a87",
  ownerId: "db243aa9-b2bc-4b8b-a654-a138ae1a5cb5",
}

const now = new Date()

const jwt = sign(
  {
    entity: { type: "merchant", id: "b90b121a-ac96-4114-a5ee-7499dd3acf7a", access: ["manage_fleet_settings"] },
    user: { id: "123", username: "Bob" },
    iat: now.getTime(),
    exp: addHours(now, 24).getTime(),
  },
  response.privateKey,
  { keyid: response.kid, issuer: response.ownerId, algorithm: "RS256" }
)

console.log(jwt)
