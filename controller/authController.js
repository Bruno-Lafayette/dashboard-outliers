export const loginUser = (email, password) => {
    // Lógica de autenticação
    if (email === 'admin@admin.com' && password === 'admin') {
      return { success: true };
    }
    return { success: false };
  };
  
  export const registerUser = (email, password) => {
    // Lógica de registro
    return { success: true };
  };
  