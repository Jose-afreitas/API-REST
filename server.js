import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log('\n');
  console.log(`listening at the door ${port}`);
  console.log(`CTRL + Click in http://localhost: ${port}`);
});
