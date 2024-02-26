// pages/api/users.js
import db from '../../db';

export default function handler(req, res) {
  console.log('work')
  db.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      res.status(500).json({ error });
      return;
    }
    res.status(200).json(results);
  });
}
