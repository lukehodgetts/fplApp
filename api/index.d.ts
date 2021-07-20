import Footballer from "./models/Footballer"

declare global{
  namespace Express {
      interface Response {
          footballer: Footballer
      }
  }
}
