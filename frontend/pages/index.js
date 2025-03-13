import React from 'react';

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1>Welcome to Sttona</h1>
        <p>An innovative, open-source CRM and business automation platform.</p>
        
        <div className="grid">
          <a href="/dashboard" className="card">
            <h3>Dashboard &rarr;</h3>
            <p>View your business metrics and analytics.</p>
          </a>

          <a href="/contacts" className="card">
            <h3>Contacts &rarr;</h3>
            <p>Manage your customer relationships.</p>
          </a>

          <a href="/automation" className="card">
            <h3>Automation &rarr;</h3>
            <p>Set up workflows and business processes.</p>
          </a>

          <a href="/settings" className="card">
            <h3>Settings &rarr;</h3>
            <p>Configure your CRM platform.</p>
          </a>
        </div>
      </main>

      <footer>
        <p>
          Powered by{' '}
          <a href="https://github.com/Sttona/sttona" target="_blank" rel="noopener noreferrer">
            Sttona
          </a>
        </p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: #0070f3;
          text-decoration: none;
        }

        a:hover,
        a:focus,
        a:active {
          text-decoration: underline;
        }

        h1 {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }

        p {
          line-height: 1.5;
          font-size: 1.5rem;
          text-align: center;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
} 