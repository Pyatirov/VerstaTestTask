import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/')}>
      Назад к списку
    </button>
  );
}