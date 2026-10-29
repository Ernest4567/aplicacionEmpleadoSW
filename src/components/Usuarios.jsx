export default function Usuarios({ user }) {
  
  // Función para obtener las iniciales para el avatar
  const getInitials = (name) => {
    const nameArray = name.split(" ");
    if (nameArray.length > 1) {
      return `${nameArray[0][0]}${nameArray[1][0]}`;
    }
    return nameArray[0][0];
  };

  return (
    <div className="user-card">
      <div className="avatar">
        {getInitials(user.name)}
      </div>
      <div className="user-info">
        <h3>{user.name}</h3>
        <p><strong>Email:</strong> {user.email}</p>

        <p><strong>Teléfono:</strong> {user.phone}</p>

        <p><strong>Empresa:</strong> {user.company.name}</p>
        
      </div>
    </div>
  );
}