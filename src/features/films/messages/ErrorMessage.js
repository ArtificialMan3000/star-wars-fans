import React from 'react';

// Список фильмов
export function ErrorMessage({ error }) {
  return <div className="error-message">{error || 'Произошла ошибка'}</div>;
}
