// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simuleer AI-reactie
    if (input.trim() === '') {
      setResponse('⚠️ Vul eerst iets in.');
    } else {
      setResponse(`📧 Hier is een voorbeeldmail voor: "${input}"\n\nBeste [Naam],\n\n${input}\n\nMet vriendelijke groet,\nEmailAI`);
    }
  };

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>EmailAI 🚀</h1>
      <p>Welkom bij jouw slimme e-mailassistent. Typ hieronder wat je in een e-mail wilt zeggen:</p>

      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <textarea
          rows="5"
          placeholder="Bijvoorbeeld: Bedank een klant voor een bestelling..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
        />
        <button
          type="submit"
          style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Genereer e-mail
        </button>
      </form>

      {response && (
        <div
          style={{
            marginTop: '2rem',
            backgroundColor: '#f9f9f9',
            padding: '1rem',
            borderRadius: '4px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {response}
        </div>
      )}
    </main>
  );
}
