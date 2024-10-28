export default function handler(req, res) {
    const { email, password, register } = req.body;
  
    // Exemplo simples para login ou registro (a ser melhorado)
    if (register) {
      // Registrar novo usuário
      // Lógica de criação de usuário aqui
      res.status(200).json({ message: 'Usuário registrado' });
    } else {
      // Lógica de login
      if (email === 'admin@admin.com' && password === 'admin') {
        res.status(200).json({ message: 'Login bem-sucedido' });
      } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
      }
    }
  }
  