let arcanum
let strixhaven

class StrixhavenDAO {
  static async injectDB(conn){
      if(arcanum){
          console.log('arcanum is true somehow? error?')
          return
      }
      try{
        strixhaven = await conn.db(process.env.STX_NS)
        arcanum = await conn.db(process.env.STX_NS).collection("arcanum")
        } catch(e){
            console.error(`Unable to establish a collection in strixhavenDAO: ${e}`)
        }
    }
  static async updateArcanum(Usr, myObject, numSkills){
      let cursor
      try{
          cursor = await arcanum.updateOne({owner: Usr},
          {$set: {skills: myObject, numSkills: numSkills}}
          )
      } catch(e){
          console.error(`Unable to updateArcanum ${e}`)
      }
  }
  static async find(option){
      try{
          console.log('Finding a document')
          return await arcanum.findOne(option)
      }catch(e){
        console.error(`Unable to findOne ${e}`)
    }
  }
  static async insertOne(myNewUsr){
      try{
        console.log('Creating a new User')
        await arcanum.insertOne({
            owner: myNewUsr.owner,
            password: myNewUsr.password,
            numSkills: 0,
        })
      } catch(e){
        console.error(`Unable to Create User ${e}`)
      }
  }
}
module.exports = StrixhavenDAO