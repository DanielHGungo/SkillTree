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
  static async updateArcanum(myObject, numSkills){
      let cursor
      try{
          cursor = await arcanum.updateOne({owner: 'Daniel'},
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
}
module.exports = StrixhavenDAO