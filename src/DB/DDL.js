db.collection('info')
  .get()
  .then(querySnapshot =>{
    const info = querySnapshot.docs.map(doc => doc.data())
    
  })