const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const mongoURI = "mongodb+srv://eisidorohernandez_db_user:Emi1608betsabe@cluster0.edls6jq.mongodb.net/ConnectTeam?appName=Cluster0"; 

mongoose.connect(mongoURI)
  .then(() => console.log("Conexión exitosa a MongoDB Atlas"))
  .catch(err => console.error(" Error de conexión:", err));

const FormularioSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  edad: Number
});

const Formulario = mongoose.model('Formulario', FormularioSchema, 'atabla_formulario');

app.get('/api/datos', async (req, res) => {
  const datos = await Formulario.find();
  res.json(datos);
});

app.post('/api/datos', async (req, res) => {
  const nuevo = new Formulario(req.body);
  await nuevo.save();
  res.json({ mensaje: 'Añadido con éxito' });
});

app.delete('/api/datos/:id', async (req, res) => {
  await Formulario.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Eliminado' });
});

app.put('/api/datos/:id', async (req, res) => {
  await Formulario.findByIdAndUpdate(req.params.id, req.body);
  res.json({ mensaje: 'Actualizado' });
});

app.listen(3000, () => console.log("🚀 Servidor listo en el puerto 3000"));