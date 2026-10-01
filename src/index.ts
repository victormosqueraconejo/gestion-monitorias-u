import app from './app'
import mongoose from 'mongoose'


const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb://localhost:27017/showsdb';



mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Base de datos conectada');
    
    app.listen(PORT, () => console.log(`Server UP en puerto ${PORT}`)); 
  })
  .catch(err => console.error('Error de conexión:', err));
